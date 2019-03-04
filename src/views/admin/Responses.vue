<template>
  <div>
    <Table :head="head"
           :name="name"
           :idRequired="idRequired"
           :idName="idName"
           :editBtn="editBtn"
           :deleteBtn="deleteBtn"
    />
  </div>
</template>

<script>
  import Table from "../../components/Table";
  export default {
    name: "Responses",
    components: {Table},
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
        deleteBtn: false
      }
    },
  }
</script>

<style scoped>

</style>