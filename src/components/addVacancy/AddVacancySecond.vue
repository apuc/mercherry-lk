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
          <button type="button" class="btn btn-secondary" @click="$emit('prev')">Предыдущий шаг</button>
          <button type="button" class="btn btn-secondary" @click="validateBeforeSubmit">Следующий шаг</button>
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
  import InputDropdown from "../inputs/InputDropdown";

  export default {
    name: "AddVacancySecond",
    components: {InputDropdown, InputTextarea, InputAdd, InputRadio, InputSelect, InputText},
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
            }
          },
          {
            component: 'InputSelect',
            className: 'col-12',
            data: {
              id: 'district',
              label: 'Район города',
              name: 'district',
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
            data: {
              inputType: 'select',
              id: 'network',
              label: 'Сеть',
              name: 'network',
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
              type: 'number',
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
                'item1',
                'item2',
                'item3'
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
    },
    mixins: [addVacancyMixin]
  }
</script>

<style scoped>

</style>