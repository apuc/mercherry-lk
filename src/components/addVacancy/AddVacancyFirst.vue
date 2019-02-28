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
          @countMinus="onCountMinus"
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
    <ModalAddProductType @newProductType="onNewProductType"/>
  </form>
</template>

<script>
  import InputText from "../inputs/InputText";
  import InputSelect from "../inputs/InputSelect";
  import InputRadio from "../inputs/InputRadio";
  import {mapMutations, mapActions} from 'vuex';
  import InputAdd from "../inputs/InputAdd";
  import InputTextarea from "../inputs/InputTextarea";
  import addVacancyMixin from "../../mixins/addVacancyMixin"
  import ModalAddProductType from "./ModalAddProductType";

  export default {
    name: "AddVacancyFirst",
    components: {ModalAddProductType, InputTextarea, InputAdd, InputRadio, InputSelect, InputText},
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
              id: 'project_id',
              label: 'Проект',
              name: 'project_id',
              options: []
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
              done: true,
              options: [
                {
                  id: 0,
                  label: 'Полная занятость',
                },
                {
                  id: 1,
                  label: 'Частичная занятость',
                },
                {
                  id: 2,
                  label: 'Разовое задание',
                }
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
              done: true,
              options: [
                {
                  id: 0,
                  label: 'Мерчандайзинг стационарный'
                },
                {
                  id: 1,
                  label: 'Мерчандайзинг визитный'
                },
                {
                  id: 2,
                  label: 'Консультант стационарный'
                },
                {
                  id: 3,
                  label: 'Консультант визитный'
                },
                {
                  id: 4,
                  label: 'Аудит'
                },
                {
                  id: 5,
                  label: 'Тайный покупатель'
                },
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
              id: 'product_type',
              label: 'Тип продукта',
              name: 'product_type',
              options: [],
              modal: '#modalAddProductType'
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
                  value: true,
                  label: 'Да'
                },
                {
                  value: false,
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
                  value: true,
                  label: 'Да'
                },
                {
                  value: false,
                  label: 'Нет'
                }
              ],
              addField: {
                component: 'InputText',
                className: 'col-12',
                data: {
                  id: 'mobile_req',
                  label: 'КПК требования',
                  name: 'mobile_req'
                }
              }
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
                  value: true,
                  label: 'Да'
                },
                {
                  value: false,
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
                  value: true,
                  label: 'Да'
                },
                {
                  value: false,
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
                  value: true,
                  label: 'Да'
                },
                {
                  value: false,
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
                  value: true,
                  label: 'Да'
                },
                {
                  value: false,
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
      ...mapActions({
        PROJECT_LIST: 'project/PROJECT_LIST',
        PRODUCT_TYPE: 'productType/PRODUCT_TYPE'
      }),
      onNewProductType() {
        this.PRODUCT_TYPE()
          .then(res => {
            for (let value of this.inputs) {
              if (value.data.name === 'product_type') {
                value.data.options = [];
                for (let key in res.body) {
                  value.data.options.push({id: parseInt(key), label: res.body[key]});
                }
                break;
              }
            }
          })
      }
    },
    created() {
      this.PROJECT_LIST()
        .then(res => {
          for (let value of this.inputs) {
            if (value.data.name === 'project_id') {
              value.data.options = res.body.result;
              value.data.done = true;
              break;
            }
          }
        });
      this.PRODUCT_TYPE()
        .then(res => {
          for (let value of this.inputs) {
            if (value.data.name === 'product_type') {
              for (let key in res.body) {
                value.data.options.push({id: parseInt(key), label: res.body[key]});
              }
              value.data.done = true;
              break;
            }
          }
        })
    },
    mixins: [addVacancyMixin]
  }
</script>

<style scoped>

</style>