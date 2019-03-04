<template>
  <div>
    <router-link to="/project/add" class="btn btn-sm btn-primary mb-2">
      <i class="fa fa-circle-o mr-1">
        <i class="fa fa-plus"></i>
      </i>
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
        name: 'project',
      }
    }
  }
</script>

<style lang="scss">
  .table-buttons {
    width: 115px;
  }
  .fa-circle-o {
    position: relative;
    font-size: 20px;
    .fa {
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: 11px;
      transform: translate(-50%, -50%);
    }
  }

  .card {
    border-radius: 0.625rem;
    border: none;
    &-body {
      padding: 1.88rem 1.81rem;
      @media (max-width: 575px) {
        padding: 1rem;
      }
    }
    .card-title {
      color: #737373;
      margin-bottom: 1.5rem;
      font-family: inherit;
      text-transform: capitalize;
      font-size: 1.125rem;
    }
  }
</style>