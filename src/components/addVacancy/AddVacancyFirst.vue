<template>
  <form @submit.prevent="validateBeforeSubmit">
    <div class="row">
      <component
          v-for="input in inputs"
          :is="input.component"
          :class="input.className"
          :data="input.data"
          @customInput="onCustomInput"
          ref="inputs"
      >
      </component>
    </div>
  </form>
</template>

<script>
  import InputText from "../inputs/InputText";
  import InputSelect from "../inputs/InputSelect";
  import {mapMutations} from 'vuex';
  import InputRadio from "../inputs/InputRadio";
  import wrapInputMixin from '../../mixins/wrapInputMixin';

  export default {
    name: "AddVacancyFirst",
    components: {InputRadio, InputSelect, InputText},
    data() {
      return {
        inputs: [
          {
            component: 'InputSelect',
            className: 'col-12',
            data: {
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
            data: {
              label: 'Название вакансии (это будет видно мерчендайзерам)',
              name: 'label',
              validate: 'required',
            }
          },
          {
            component: 'InputRadio',
            className: 'col-12',
            data: {
              label: 'Анкета',
              name: 'profile',
              validate: 'required',
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
          }
        ]
      }
    },
    methods: {
      validateBeforeSubmit() {
        this.checkInput();
        this.$validator.validateAll().then((result) => {
          if (result) {
            alert('Form Submitted!');
            return;
          }

          alert('Correct them errors!');
        });
      },
      ...mapMutations({
        ADD_DATA_VACANCY: 'addVacancy/ADD_DATA_VACANCY'
      }),
      onCustomInput(obj) {
        this.ADD_DATA_VACANCY({value: obj.value, name: obj.name});
        this.$emit('inputUpdate');
      }
    },
    mixins: [wrapInputMixin]
  }
</script>

<style scoped>

</style>