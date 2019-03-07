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
            @countMinus="onCountMinus"
            :index="index"
        >
        </component>
      </div>
    </div>
    <div class="row mt-4">
      <div class="pagination col-12 d-flex flex-wrap justify-content-end ml-auto">
        <button type="button" class="btn btn-primary mb-2" @click="$emit('prev')">Предыдущий шаг</button>
        <button v-if="canSave" type="button" class="btn btn-primary mb-2" @click="$emit('next')">Следующий шаг</button>
        <button v-else class="btn btn-primary mb-2" @click.prevent="$emit('send')">Сохранить</button>
      </div>
    </div>
  </form>
</template>
<script>
  import InputSelect from "../inputs/InputSelect";
  import InputRadio from "../inputs/InputRadio";
  import {mapMutations, mapGetters} from 'vuex';
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
              name: 'interviewing',
              radio: [
                {
                  value: 0,
                  label: 'Тот кто разместил вакансию'
                },
                {
                  value: 1,
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
              id: 'notify_freq',
              label: 'Частота оповещений',
              name: 'notify_freq',
              options: [
                {
                  id: 0,
                  label: 'Каждый день'
                },
                {
                  id: 1,
                  label: 'Через день'
                },
                {
                  id: 2,
                  label: 'Раз в два дня'
                }
              ]
            }
          },
          {
            component: 'InputRadio',
            className: 'col-12',
            data: {
              label: 'Есть ли повторное собеседование',
              name: 'interviewing_repeat',
              addFieldValue: [1],
              radio: [
                {
                  value: 1,
                  label: 'Да'
                },
                {
                  value: 0,
                  label: 'Нет'
                }
              ],
              addField: {
                component: 'InputRadio',
                className: 'col-12',
                data: {
                  id: 'interviewing_repeat_who',
                  label: 'Кто проводит повторное собеседование',
                  name: 'interviewing_repeat_who',
                  radio: [
                    {
                      value: 0,
                      label: 'Тот кто разместил вакансию'
                    },
                    {
                      value: 1,
                      label: 'Другой специалист'
                    }
                  ]
                }
              }
            }
          },
          {
            component: 'InputRadio',
            className: 'col-12',
            data: {
              label: 'Кто координирует выход на стажировку',
              name: 'internship_coord',
              radio: [
                {
                  value: 0,
                  label: 'Тот кто создал'
                },
                {
                  value: 1,
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
      ...mapGetters({
        getAddVacancyData: 'vacancy/getAddVacancyData'
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