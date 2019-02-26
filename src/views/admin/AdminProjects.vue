<template>
  <div class="admin-content">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Проекты</h4>
        <router-link to="/project/add" class="btn btn-sm btn-primary mb-2">
          <i class="fa fa-circle-o mr-1">
            <i class="fa fa-plus"></i>
          </i>
          <span>Добавить проекты</span>
        </router-link>
        <div class="table-wrap">
          <table class="table">
            <thead>
            <tr>
              <th class="table-id">ID</th>
              <th>Название</th>
              <th class="table-buttons"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in data">
              <td v-for="label in item">
                {{label}}
              </td>
              <td>
                <div class="btn-icons justify-content-end">
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

  .btn {
    &-icons {
      display: flex;
    }
    &-ico {
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