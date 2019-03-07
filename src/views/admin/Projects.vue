<template>
  <div>
    <router-link to="/project/add" class="btn btn-primary mb-2">
      <img width="15" class="mr-1" src="/img/plus-sign-in-circle.svg" alt="">
      <span>Добавить проекты</span>
    </router-link>
    <Table :head="head"
           :name="name"
    />
  </div>
</template>

<script>
  import Pagination from "../../components/Pagination";
  import Table from "../../components/Table";

  export default {
    name: "AdminProjects",
    components: {Table, Pagination},
    data() {
      return {
        head: [
          'Название'
        ],
        name: 'project'
      }
    }
  }
</script>

<style lang="scss">
</style>