<template>
  <div>
    <div class="alert alert-success">
      Используйте в названии и описании проекта только понятные обозначения, так как оно будет отображаться для всех пользователей.
    </div>
    <form  class="forms-sample">
      <div class="form-group">
        <label for="label">Название</label>
        <input type="text"
               class="form-control"
               id="label"
               v-model="data.label"
               name="label"
               v-validate="'required'"
        >
        <p class="text-danger">{{errors.first('label')}}</p>
      </div>
      <div class="form-group">
        <label for="text">Описание</label>
        <textarea class="form-control" id="text" rows="4" v-model="data.text"></textarea>
      </div>
      <div class="form-group" v-for="item in files">
        <label class="d-inline-block mr-2">{{item.label}}</label>
        <div class="fileuploader">Upload</div>
      </div>
      <div class="form-group">
        <label for="link">Сслыка на сайт</label>
        <input type="text"
               class="form-control"
               id="link"
               v-model="data.url"
        >
      </div>
      <button class="btn btn-success" @click.prevent="validateBeforeSubmit">Сохранить</button>
      <p v-if="success">Проект добавлен</p>
    </form>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "AddProject",
    data() {
      return {
        files: [
          {
            label: 'Изображение',
            name: 'image_id'
          },
          {
            label: 'Видео',
            name: 'video_id'
          },
          {
            label: 'Презентация',
            name: 'presentation_id'
          }
        ],
        data: {
          label: '',
          text: '',
          image_id: '',
          video_id: '',
          presentation_id: '',
          url: ''
        },
        success: false
      }
    },
    methods: {
      ...mapActions({
        ADD_PROJECT: 'project/ADD_PROJECT'
      }),
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.ADD_PROJECT(this.data)
              .then(res => {
                if (res.ok) {

                }
                else {

                }
                console.log(res)
              });
          }
        });
      },
    },
    mounted() {
      setTimeout(function() {
        $(document).ready(function() {
          if ($(".fileuploader").length) {
            $(".fileuploader").each(function(index, value) {
              $(value).uploadFile({
                autoSubmit: false,
                fileName: "myfile",
                onSelect:function(files)
                {
                  const name = this.files[index].name;
                  this.data[name] = files[0];
                }
              });
            });
          }
        });
      }, 100)
    }
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