<template>
  <div class="main-layout layout">
    <Header :headerClass="'admin-header'"/>
    <main class="main">
      <div class="admin-wrap">
        <AdminMenu/>
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
  export default {
    name: "MainLayout",
    components: {AdminMenu, Header},
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
  }

  .table {
    &-id {
      width: 60px;
    }
    &-btn-group {
      width: 160px;
    }
  }

</style>