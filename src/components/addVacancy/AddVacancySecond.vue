<template>
  <form>
    <div class="tab-content">
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
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 d-flex flex-wrap justify-content-end mt-4">
        <button type="button" class="btn btn-primary mb-2" @click="$emit('prev')">Предыдущий шаг</button>
        <button type="button" class="btn btn-primary ml-3 mb-2" @click="validateBeforeSubmit">Следующий шаг</button>
      </div>
    </div>
    <ModalAddNetwork/>
  </form>
</template>

<script>
  import InputText from "../inputs/InputText";
  import InputSelect from "../inputs/InputSelect";
  import InputRadio from "../inputs/InputRadio";
  import {mapMutations, mapGetters} from 'vuex';
  import InputTextarea from "../inputs/InputTextarea";
  import addVacancyMixin from "../../mixins/addVacancyMixin"
  import ModalAddNetwork from "./ModalAddNetwork";
  import InputDropdown from "../inputs/InputDropdown";

  export default {
    name: "AddVacancySecond",
    components: {ModalAddNetwork, InputDropdown, InputTextarea, InputRadio, InputSelect, InputText},
    data() {
      return {
        inputs: [
          {
            component: 'InputDropdown',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              id: 'city',
              label: 'Город',
              name: 'city',
              placeholder: 'Город'
            }
          },
          {
            component: 'InputDropdown',
            className: 'col-12',
            data: {
              id: 'district',
              label: 'Район города',
              name: 'district',
              params: [
                'city'
              ],
              placeholder: 'Район города'
            }
          },
          {
            component: 'InputDropdown',
            className: 'col-12',
            data: {
              id: 'network',
              label: 'Сеть',
              name: 'network',
              modal: '#modalAddNetwork',
              multiply: true
            }
          },
          {
            component: 'InputText',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              id: 'schedule',
              label: 'График работы',
              name: 'schedule',
            }
          },
          {
            component: 'InputText',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              type: 'number',
              id: 'total_salary',
              label: 'Заработная плата',
              name: 'total_salary',
            }
          },
          {
            component: 'InputText',
            className: 'col-lg-6',
            data: {
              type: 'number',
              id: 'salary',
              label: 'Оклад',
              name: 'salary',
            }
          },
          {
            component: 'InputText',
            className: 'col-lg-6',
            data: {
              type: 'number',
              id: 'prize',
              label: 'Премия',
              name: 'prize',
            }
          },
          {
            component: 'InputText',
            className: 'col-12',
            data: {
              id: 'weekend',
              label: 'Выходные',
              name: 'weekend',
            }
          },
          {
            component: 'InputText',
            className: 'col-12',
            data: {
              id: 'point_count',
              label: 'Количество точек',
              name: 'point_count',
            }
          },
          {
            component: 'InputText',
            className: 'col-12',
            data: {
              id: 'point_count_day',
              label: 'Количество точек в день',
              name: 'point_count_day',
            }
          },
          {
            component: 'InputSelect',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              id: 'experience',
              label: 'Опыт работы',
              name: 'experience',
              options: [
                {
                  id: 0,
                  label: 'Без опыта'
                },
                {
                  id: 1,
                  label: 'Опыт не менее 1 месяца'
                },
                {
                  id: 2,
                  label: 'Опыт не менее 1 года'
                },
                {
                  id: 3,
                  label: 'Прочее'
                }
              ]
            }
          },
        ],
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
    mixins: [addVacancyMixin]
  }
</script>

<style scoped>

</style>