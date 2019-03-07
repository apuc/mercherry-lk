<template>
  <div>
    <form class="mb-4">
      <div class="d-flex">
        <input v-validate="'required|email'"
               name="email"
               placeholder="email"
               class="form-control"
               type="text"
               v-model="email"
               :class="{'is-invalid': errors.first('email') !== undefined}"
        >
        <button type="button" class="btn btn-success ml-3" @click.prevent="validateBeforeSubmit">Добавить</button>
      </div>
      <p v-if="error !== ''" class="text-danger mt-2">{{error}}</p>
    </form>
    <Table :head="head"
           :name="name"
           :idRequired="idRequired"
           :idName="idName"
           :editBtn="editBtn"
           :deleteBtn="deleteBtn"
           v-if="auth || hash !== ''"
    />
  </div>
</template>

<script>
  import Table from "../../components/Table";
  import InputText from "../../components/inputs/InputText";
  import {mapActions} from 'vuex';
  import hashMixin from '../../mixins/hashMixin';
  import store from '../../store/store';

  export default {
    name: "Responses",
    components: {InputText, Table},
    data() {
      return {
        head: [
          'Название',
          'Имя пользователя',
          'Статус',
          'Дата отклика'
        ],
        name: 'response',
        idRequired: true,
        idName: 'job_id',
        editBtn: false,
        deleteBtn: false,
        email: '',
        error: '',
        auth: false
      }
    },
    methods: {
      ...mapActions({
        RESPONSE_EMAIL: 'response/RESPONSE_EMAIL'
      }),
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.RESPONSE_EMAIL({email: this.email, job_id: this.$route.params.id})
              .then(res => {
                if (res.ok) {
                  this.error = '';
                  localStorage.setItem('hash', '');
                  this.checkHash();
                  console.log(res)
                }
                else {
                  this.error = res.body.error.job_id;
                  localStorage.removeItem('hash');
                  this.checkHash();
                }
              });
          }
        });
      }
    },
    created() {
      this.auth = store.getters['profile/auth'];
      this.checkHash();
    },
    mixins: [hashMixin]
  }
</script>

<style scoped>

</style>