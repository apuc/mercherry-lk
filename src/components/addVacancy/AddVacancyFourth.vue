<template>
  <div>
    <form>
      <div class="form-group d-flex">
        <input class="form-control" type="text" v-model="newQuestion">
        <button type="button" class="btn btn-success ml-3" @click="addQuestion">Добавить</button>
      </div>
    </form>
    <div v-for="(item, index) in questions"
         class="question"
    >
      <span>{{item}}</span>
      <button class="btn-close" @click="deleteQuestion(index)"><i class="fa fa-close"></i></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddVacancyFourth",
    data() {
      return {
        newQuestion: '',
        questions: [
          'Вы уверенены, что вам будет удобно работать на территории (#Адрес)?'
        ]
      }
    },
    methods: {
      deleteQuestion(index) {
        this.questions.splice(index, 1);
      },
      addQuestion() {
        this.questions.push(this.newQuestion);
        this.newQuestion = '';
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