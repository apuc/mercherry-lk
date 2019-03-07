<template>
  <div class="main-layout layout">
    <Header :headerClass="'admin-header'"/>
    <main class="main">
      <div class="admin-wrap">
        <AdminMenu :menuCount="menuCount"/>
        <div class="admin-content">
          <div class="card container p-0">
            <div class="card-body">
              <h4 class="card-title">
                {{$route.meta.title}}
                <template v-if="$route.meta.id">{{$route.params.id}}</template>
              </h4>
              <slot/>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import AdminMenu from "../../components/admin/AdminMenu";
  import {mapActions} from 'vuex';
  import store from '../../store/store';

  export default {
    name: "MainLayout",
    components: {AdminMenu, Header},
    data() {
      return {
        menuCount: {
          'Вакансии': 0
        }
      }
    },
    methods: {
      ...mapActions({
        RESPONSE_COUNT: 'response/RESPONSE_COUNT'
      }),
      responseCount() {
        if (store.getters['profile/auth']) {
          this.RESPONSE_COUNT()
            .then(res => {
              this.menuCount['Вакансии'] = res.body.count;
            })
        }
      }
    },
    created() {
      this.responseCount();
    },
    beforeUpdate() {
      this.responseCount();
    }
  }
</script>

<style lang="scss">
  .admin-wrap {
    display: flex;
  }
  .admin-content {
    flex-grow: 1;
    max-width: 100%;
    padding: 1.75rem 1.75rem;
    background-color: #f5f5f5;
    @media (max-width: 575px) {
      padding: 1rem;
    }
  }
  .table {
    margin-bottom: 0;
    @media (max-width: 991px) {
      min-width: 800px;
    }
    &-wrap {
      width: 100%;
      @media (max-width: 991px) {
        overflow-x: scroll;
        overflow-y: hidden;
      }
    }
    thead {
      th {
        border-top: 0;
        border-bottom-width: 1px;
        font-weight: 500;
        font-size: 1rem;
        i {
          margin-left: 0.325rem;
        }
      }
    }
    th,
    td {
      padding: 0.8375rem 0.6rem;
      vertical-align: middle;
      line-height: 1;
      border-color: #f3f3f3 !important;
    }
    td {
      font-size: 0.875rem;
    img {
      width: 36px;
      height: 36px;
      border-radius: 100%;
    }
    .badge {
      margin-bottom: 0;
    }
    }
    &.table-borderless {
       border: none;
      tr,
      td,
      th {
        border: none;
      }
    }
    &-id {
      width: 60px;
    }
    &-btn-group {
      width: 160px;
    }
  }

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
    box-shadow: 6px 11px 41px -28px #a99de7;
    -webkit-box-shadow: 6px 11px 41px -28px #a99de7;
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