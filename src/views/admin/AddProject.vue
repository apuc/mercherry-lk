<template>
  <div>
    <div class="alert alert-success">
      Используйте в названии и описании проекта только понятные обозначения, так как оно будет отображаться для всех пользователей.
    </div>
    <form  class="forms-sample">
      <div class="row">
        <component
            v-for="input in inputs"
            :is="input.component"
            :class="input.className"
            :key="input.data.name"
            :data="input.data"
            v-validate="input.rules"
            :name="input.data.name"
            v-model="value[input.data.name]"
            :error="errors.first(input.data.name)"
        >
        </component>
      </div>
      <button class="btn btn-success" @click.prevent="validateBeforeSubmit">Сохранить</button>
    </form>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import InputText from "../../components/inputs/InputText";
  import InputTextarea from "../../components/inputs/InputTextarea";
  import InputUpload from "../../components/inputs/InputUpload";

  export default {
    name: "AddProject",
    components: {InputUpload, InputTextarea, InputText},
    data() {
      return {
        value: {},
        inputs: [
          {
            component: 'InputText',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              id: 'label',
              label: 'Название',
              name: 'label',
            }
          },
          {
            component: 'InputTextarea',
            className: 'col-12',
            data: {
              id: 'text',
              label: 'Описание',
              name: 'text',
            }
          },
          {
            component: 'InputUpload',
            className: 'col-12',
            data: {
              id: 'image_id',
              name: 'image_id',
              label: 'Изображение'
            }
          },
          {
            component: 'InputUpload',
            className: 'col-12',
            data: {
              id: 'video_id',
              name: 'video_id',
              label: 'Видео'
            }
          },
          {
            component: 'InputUpload',
            className: 'col-12',
            data: {
              id: 'presentation_id',
              name: 'presentation_id',
              label: 'Презентация'
            }
          },
          {
            component: 'InputText',
            className: 'col-12',
            data: {
              id: 'url',
              label: 'Ссылка на сайт',
              name: 'url',
            }
          },
        ],
      }
    },
    methods: {
      ...mapActions({
        ADD_PROJECT: 'project/ADD_PROJECT'
      }),
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.ADD_PROJECT(this.value)
              .then(res => {
                if (res.ok) {
                  this.$router.push({name: 'projects'});
                }
              });
          }
        });
      },
    },
  }
</script>

<style>
  .ajax-upload-dragdrop {
    border-color: #f3f3f3;
    border-style: dotted;
    max-width: 100%;
  }
  .ajax-upload-dragdrop .ajax-file-upload {
    background: #4d7cff;
    box-shadow: none;
    height: auto;
  }
  .ajax-upload-dragdrop span b {
    font-size: .8125rem;
    color: #222222;
    font-weight: initial;
  }
  .ajax-file-upload-statusbar {
    margin: 0;
  }
  .ajax-file-upload-statusbar,
  .ajax-file-upload-statusbar * {
    max-width: 100%;
  }
</style>