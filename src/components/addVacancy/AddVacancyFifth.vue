<template>
  <div>
    <div class="tab-content">
      <form>
        <template v-if="this.interview_training == 1">
          <div class="form-group">
            <label class="mb-4">Обучение перед собеседованием</label>
            <div class="row">
              <component v-for="input in interview_training_data"
                         :is="input.component"
                         :class="input.className"
                         :key="input.data.name"
                         :data="input.data"
                         v-model="value[input.data.name]"
                         :name="input.data.name"
                         @input="onInput"
              >
              </component>
            </div>
          </div>
        </template>
        <template v-if="this.internship_training == 1">
          <div class="form-group">
            <label class="mb-4">Обучение перед стажировкой</label>
            <div class="row">
              <component v-for="input in internship_training_data"
                         :is="input.component"
                         :class="input.className"
                         :key="input.data.name"
                         :data="input.data"
                         v-model="value[input.data.name]"
                         :name="input.data.name"
                         @input="onInput"
              >
              </component>
            </div>
          </div>
        </template>
      </form>
    </div>
    <div class="row mt-4 px-2">
      <div class="col-12 d-flex flex-wrap justify-content-end">
        <button type="button" class="btn btn-primary mb-2" @click="$emit('prev')">Предыдущий шаг</button>
        <button class="btn btn-primary ml-3 mb-2" @click.prevent="$emit('send')">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import InputUpload from "../inputs/InputUpload";
  import InputTextarea from "../inputs/InputTextarea";
  import addVacancyMixin from "../../mixins/addVacancyMixin"

  export default {
    name: "AddVacancyFifth",
    components: {InputTextarea, InputUpload},
    data() {
      return {
        interview_training: false,
        internship_training: false,
        interview_training_data: [
          {
            component: 'InputUpload',
            className: 'col-12',
            data: {
              id: 'interview_video',
              name: 'interview_video',
              label: 'Добавить видео'
            }
          },
          {
            component: 'InputUpload',
            className: 'col-12',
            data: {
              id: 'interview_presentation',
              name: 'interview_presentation',
              label: 'Добавить презентацию'
            }
          },
          {
            component: 'InputTextarea',
            className: 'col-12',
            data: {
              id: 'interview_text',
              name: 'interview_text',
              label: 'Добавить описание'
            }
          }
        ],
        internship_training_data: [
          {
            component: 'InputUpload',
            className: 'col-12',
            data: {
              id: 'internship_video',
              name: 'internship_video',
              label: 'Добавить видео'
            }
          },
          {
            component: 'InputUpload',
            className: 'col-12',
            data: {
              id: 'internship_presentation',
              name: 'internship_presentation',
              label: 'Добавить презентацию'
            }
          },
          {
            component: 'InputTextarea',
            className: 'col-12',
            data: {
              id: 'internship_text',
              name: 'internship_text',
              label: 'Добавить описание'
            }
          }
        ]
      }
    },
    methods: {
      ...mapMutations({
        ADD_DATA_VACANCY: 'vacancy/ADD_DATA_VACANCY'
      }),
      ...mapGetters({
        getAddVacancyData: 'vacancy/getAddVacancyData'
      })
    },
    created() {
      this.interview_training = this.getAddVacancyData().interview_training;
      this.internship_training = this.getAddVacancyData().internship_training;
    },
    mixins: [addVacancyMixin]
  }
</script>

<style scoped>

</style>