<template>
  <div>
    <router-link to="/vacancy/add" class="btn btn-sm btn-primary mb-2">
      <i class="fa fa-circle-o mr-1">
        <i class="fa fa-plus"></i>
      </i>
      <span>Добавить вакансию</span>
    </router-link>
    <Table :head="head"
           :name="name"
           :nameLink="nameLink"
    />
  </div>
</template>

<script>
  import Table from "../../components/Table";
  export default {
    name: "AdminVacancies",
    components: {Table},
    data() {
      return {
        head: [
          'Название',
          'Тип продукта',
          'Тип вакансии',
          'Статус'
        ],
        name: 'vacancy',
        nameLink: true,
      }
    },
  }
</script>

<style scoped>

</style>