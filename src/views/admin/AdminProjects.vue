<template>
  <div class="admin-content">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Проекты</h4>
        <button class="btn btn-sm btn-primary mb-2">Добавить проекты</button>
        <div class="table-wrap">
          <table class="table">
            <thead>
            <tr>
              <th class="table-id">ID</th>
              <th>Название</th>
              <th class="table-btn-group"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in data">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>
                <div class="btn-icons">
                  <button class="btn-ico">
                    <i class="fa fa-eye"></i>
                  </button>
                  <button class="btn-ico">
                    <i class="fa fa-pencil"></i>
                  </button>
                  <button class="btn-ico">
                    <i class="fa fa-close"></i>
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <Pagination :currentPage="currentPage"
                    :pages="pages"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Pagination from "../../components/admin/Pagination";
  import paginationMixin from '../../mixins/paginationMixin';

  export default {
    name: "AdminProjects",
    components: {Pagination},
    data() {
      return {
        data: [
          {
            id: 1,
            name: 'name1'
          },
          {
            id: 2,
            name: 'name2'
          },
          {
            id: 3,
            name: 'name3'
          }
        ],
        totalPages: 4
      }
    },
    mixins: [paginationMixin]
  }
</script>

<style lang="scss">
  .btn {
    &-icons {
      display: flex;
    }
    &-ico {
      min-height: 45px;
      max-height: 45px;
      min-width: 45px;
      max-width: 45px;
      color: #99a7df;
      font-size: 1rem;
      border-radius: 50%;
      background-color: transparent;
      border: none;
      transition: all 0.3s;
      &:hover {
        background-color: #dde1f7;
      }
    }
  }
  .card {
    border-radius: 0.625rem;
    border: none;
    &-body {
      padding: 1.88rem 1.81rem;
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