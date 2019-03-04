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

<style lang="scss">
  .btn {
    &-icons {
      display: flex;
    }
    &-ico {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 29px;
      max-width: 29px;
      min-height: 29px;
      max-height: 29px;
      font-size: 14px;
      color: #93a2dd;
      font-weight: 600;
      text-transform: uppercase;
      background-color: transparent;
      border: none;
      border-radius: 50%;
      transition: all 0.3s;
      &:hover {
        color: #5d78ff;
        background: #f0f3ff;
      }
    }
  }
</style>