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
          <button type="button" class="btn btn-secondary" :class="{disabled: !canSave}" @click="validateBeforeSubmit">Следующий шаг</button>
        </div>
        <button v-if="!canSave" class="btn btn-success ml-3">Сохранить</button>
      </div>
    </div>
  </form>
</template>
<script>
  import InputSelect from "../inputs/InputSelect";
  import InputRadio from "../inputs/InputRadio";
  import {mapMutations} from 'vuex';
  import addVacancyMixin from "../../mixins/addVacancyMixin"

  export default {
    name: "AddVacancyThird",
    components: {InputSelect, InputRadio},
    data() {
      return {
        inputs: [
          {
            component: 'InputRadio',
            className: 'col-12',
            rules: {
              required: true
            },
            data: {
              label: 'Кто проводит собеседование',
              name: 'interviewer',
              radio: [
                {
                  value: 1,
                  label: 'Тот кто разместил вакансию'
                },
                {
                  value: 2,
                  label: 'Другой специалист'
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
              id: 'frequency',
              label: 'Частота оповещений',
              name: 'frequency',
              options: [
                'item1',
                'item2',
                'item3'
              ]
            }
          },
          {
            component: 'InputRadio',
            className: 'col-12',
            data: {
              label: 'Есть ли повторное собеседование',
              name: 'repeat_interview',
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
            data: {
              label: 'Кто координирует выход на стажировку',
              name: 'coordinator',
              radio: [
                {
                  value: 1,
                  label: 'Тот кто создал'
                },
                {
                  value: 2,
                  label: 'Другой'
                }
              ]
            }
          },
        ]
      }
    },
    props: {
      profile: {
        type: Boolean,
        required: true
      },
      education: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      ...mapMutations({
        ADD_DATA_VACANCY: 'vacancy/ADD_DATA_VACANCY'
      }),
    },
    computed: {
      canSave() {
        return !this.profile || !this.education;
      }
    },
    mixins: [addVacancyMixin]
  }
</script>

<style scoped>

</style>