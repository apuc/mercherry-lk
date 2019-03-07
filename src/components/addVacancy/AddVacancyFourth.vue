<template>
  <div>
    <div class="tab-content">
      <form>
        <div class="form-group d-flex">
          <input class="form-control" type="text" v-model="newQuestion">
          <button type="button" class="btn btn-primary ml-3" @click="addQuestion">Добавить</button>
        </div>
      </form>
      <div v-for="(item, index) in questions"
           class="question"
      >
        <span>{{item}}</span>
        <button class="btn-close" @click="deleteQuestion(index)"><i class="fa fa-close"></i></button>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-end mt-4 px-2">
        <button type="button" class="btn btn-primary mb-2" @click="$emit('prev')">Предыдущий шаг</button>
        <button v-if="canSave" type="button" class="btn btn-primary ml-3 mb-2" @click="$emit('next')">Следующий шаг</button>
        <button v-else class="btn btn-primary ml-3 mb-2" @click.prevent="$emit('send')">Сохранить</button>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex';

  export default {
    name: "AddVacancyFourth",
    props: {
      education: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        newQuestion: '',
        questions: [
          'Вы уверенены, что вам будет удобно работать на территории (#Адрес)?',
          'Вы уверены, что вам подходит график (#График)?',
          'Вы уверены, что вас устраивает заработная плата (#ЗП)?'
        ]
      }
    },
    computed: {
      canSave() {
        return !this.education;
      }
    },
    methods: {
      ...mapMutations({
        ADD_DATA_VACANCY: 'vacancy/ADD_DATA_VACANCY'
      }),
      ...mapGetters({
        getAddVacancyData: 'vacancy/getAddVacancyData'
      }),
      deleteQuestion(index) {
        this.questions.splice(index, 1);
        this.ADD_DATA_VACANCY({questions: this.questions});
      },
      addQuestion() {
        this.questions.push(this.newQuestion);
        this.newQuestion = '';
        this.ADD_DATA_VACANCY({questions: this.questions});
      }
    },
    created() {
      if (this.getAddVacancyData().hasOwnProperty('questions')) {
        this.questions = this.getAddVacancyData().questions;
      }
      else {
        this.ADD_DATA_VACANCY({questions: this.questions});
      }
    }
  }
</script>

<style lang="scss">
  .question {
    display: flex;
    align-items: center;
    padding: 0.8375rem 0.6rem;
    font-size: 0.875rem;
    border-bottom: 1px solid #f3f3f3;
    .btn-close {
      margin-left: auto;
      padding: 0;
      background-color: transparent;
      border: 0;
    }
    .fa-close {
      color: #ff5e5e;
      font-size: 1.2rem;
    }
    &:first-of-type {
      border-top: 1px solid #f3f3f3;
    }
  }
</style>