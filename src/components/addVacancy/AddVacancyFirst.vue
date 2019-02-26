<template>
  <form>
    <div class="row">
      <component
          v-for="(input, index) in inputs"
          :is="input.component"
          :class="input.className"
          :key="input.data.name"
          :data="input.data"
          v-validate="input.rules"
          @input="onInput"
          :name="input.data.name"
          v-model="value[input.data.name]"
          :error="errors.first(input.data.name)"
          @countPlus="onCountPlus"
          :index="index"
      >
      </component>
      <div class="col-12 d-flex">
        <div class="btn-group ml-auto">
          <button type="button" class="btn btn-secondary disabled">Предыдущий шаг</button>
          <button type="button" class="btn btn-secondary" @click.prevent="validateBeforeSubmit">Следующий шаг</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  import InputText from "../inputs/InputText";
  import InputSelect from "../inputs/InputSelect";
  import InputRadio from "../inputs/InputRadio";
  import {mapMutations} from 'vuex';
  import InputAdd from "../inputs/InputAdd";
  import InputTextarea from "../inputs/InputTextarea";
  import addVacancyMixin from "../../mixins/addVacancyMixin"

  export default {
    name: "AddVacancyFirst",
    components: {InputTextarea, InputAdd, InputRadio, InputSelect, InputText},
    data() {
      return {
        inputs: [
          {
            component: 'InputSelect',
            className: 'col-12',
            rules: {
              required: true,
            },
            data: {
              id: 'project',
              label: 'Проект',
              name: 'project',
              options: [
                'item1',
                'item2',
                'item3'
              ]
            }
          },
          {
            component: 'InputText',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              id: 'label',
              label: 'Название вакансии (это будет видно мерчендайзерам)',
              name: 'label',
            }
          },
          {
            component: 'InputSelect',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              id: 'employment',
              label: 'Занятость',
              name: 'employment',
              options: [
                'item1',
                'item2',
                'item3'
              ]
            }
          },
          {
            component: 'InputSelect',
            className: 'col-12',
            rules: {
              required: true,
            },
            data: {
              id: 'type',
              label: 'Тип вакансии',
              name: 'type',
              options: [
                'item1',
                'item2',
                'item3'
              ]
            }
          },
          {
            component: 'InputAdd',
            className: 'col-12',
            rules: {
              required: true,
            },
            data: {
              inputType: 'select',
              id: 'product_type',
              label: 'Тип продукта',
              name: 'product_type',
              options: [
                'item1',
                'item2',
                'item3'
              ],
              addComponent: {
                className: 'col-12',
                component: 'InputSelect',
              }
            }
          },
          {
            component: 'InputRadio',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              label: 'Медицинская книжка',
              name: 'm_book',
              radio: [
                {
                  value: 1,
                  label: 'Да'
                },
                {
                  value: 2,
                  label: 'Нет'
                }
              ]
            }
          },
          {
            component: 'InputRadio',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              label: 'КПК (мобильный телефон)',
              name: 'mobile',
              radio: [
                {
                  value: 1,
                  label: 'Да'
                },
                {
                  value: 2,
                  label: 'Нет'
                }
              ]
            }
          },
          {
            component: 'InputTextarea',
            className: 'col-12',
            data: {
              id: 'description',
              label: 'Описание вакансии',
              name: 'description',
            }
          },
          {
            component: 'InputRadio',
            className: 'col-12',
            data: {
              label: 'Наличие автомобиля',
              name: 'auto',
              radio: [
                {
                  value: 1,
                  label: 'Да'
                },
                {
                  value: 2,
                  label: 'Нет'
                }
              ]
            }
          },
          {
            component: 'InputRadio',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              label: 'Анкета',
              name: 'need_questions',
              radio: [
                {
                  value: 1,
                  label: 'Да'
                },
                {
                  value: 2,
                  label: 'Нет'
                }
              ]
            }
          },
          {
            component: 'InputRadio',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              label: 'Обучение перед собеседованием',
              name: 'interview_training',
              radio: [
                {
                  value: 1,
                  label: 'Да'
                },
                {
                  value: 2,
                  label: 'Нет'
                }
              ]
            }
          },
          {
            component: 'InputRadio',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              label: 'Обучение перед стажировкой',
              name: 'internship_training',
              radio: [
                {
                  value: 1,
                  label: 'Да'
                },
                {
                  value: 2,
                  label: 'Нет'
                }
              ]
            }
          },
          {
            component: 'InputText',
            className: 'col-12',
            data: {
              type: 'number',
              id: 'duration_internship',
              label: 'Длительность стажировки (дней)',
              name: 'duration_internship',
            }
          },
        ],
      }
    },
    methods: {
      ...mapMutations({
        ADD_DATA_VACANCY: 'vacancy/ADD_DATA_VACANCY'
      }),
    },
    mixins: [addVacancyMixin]
  }
</script>

<style scoped>

</style>