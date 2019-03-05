<template>
  <div>
    <div class="d-flex flex-wrap">
      <form @submit.prevent="changeStatus(item.id)"
            v-for="item in statuses"
      >
        <button class="btn btn-primary mr-2">{{item.label}}</button>
      </form>
    </div>
    <p v-if="success !== ''" class="text-success mt-2">{{success}}</p>
    <p v-if="error !== ''" class="text-danger mt-2">{{error}}</p>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "ResponseView",
    data() {
      return {
        statuses: [
          {
            id: 0,
            label: 'Отклик'
          },
          {
            id: 1,
            label: 'Собеседование'
          },
          {
            id: 2,
            label: 'Обучение'
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
        error: ''
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
      }
    }
  }
</script>

<style scoped>

</style>