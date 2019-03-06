<template>
  <div>
    <div class="d-flex flex-wrap">
      <form @submit.prevent="changeStatus(item.id)"
            v-for="item in statuses"
      >
        <button class="btn mr-2" :class="item.id === 50 ? 'btn-danger' : 'btn-info'">{{item.label}}</button>
      </form>
    </div>
    <p v-if="success !== ''" class="text-success mt-2">{{success}}</p>
    <p v-if="error !== ''" class="text-danger mt-2">{{error}}</p>
    <TableDetail :name="'response'"
                 :dataNames="dataNames"
                 class="mt-4"
                 @addMissingValue="onAddMissingValue"
                 :missingValue="missingValue"
    />
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import TableDetail from "../../components/TableDetail";
  import tableDetailMixin from '../../mixins/tableDetailMixin';

  export default {
    name: "ResponseView",
    components: {TableDetail},
    data() {
      return {
        statuses: [
          {
            id: 1,
            label: 'Собеседование'
          },
          {
            id: 3,
            label: 'Выход в торговую точку'
          },
          {
            id: 50,
            label: 'Отклонён'
          }
        ],
        success: '',
        error: '',
        dataNames: {
          id: 'ID',
          job: 'Название вакансии',
          user: 'Имя пользователя',
          status: 'Статус',
          created: 'Дата отклика',
        },
        missingValue: {
          training: '',
          id: ''
        },
        hasTraining: false
      }
    },
    methods: {
      ...mapActions({
        RESPONSE_STATUS: 'response/RESPONSE_STATUS'
      }),
      changeStatus(status) {
        this.RESPONSE_STATUS({id: this.$route.params.id, status: status})
          .then(res => {
            if(res.ok) {
              this.success = 'Статус изменён';
              this.error = '';
            }
            else {
              for (let key in res.body.error) {
                this.error = res.body.error[key];
              }
              this.success = '';
            }
          });
      },
      changedValue() {
        if(this.missingValue.training === 1 && !this.hasTraining) {
          this.statuses.splice(1, 0, {id: 2, label: 'Обучение'});
          this.hasTraining = true;
        }
      }
    },
    mixins: [tableDetailMixin]
  }
</script>

<style scoped>

</style>