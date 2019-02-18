<template>
  <div class="main-layout layout">
    <Header :headerClass="'admin-header'"/>
    <main class="main">
      <div class="admin-wrap">
        <AdminMenu/>
        <slot/>
      </div>
    </main>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import AdminMenu from "../../components/admin/AdminMenu";
  export default {
    name: "MainLayout",
    components: {AdminMenu, Header}
  }
</script>

<style lang="scss">
  .admin-wrap {
    display: flex;
  }
  .admin-content {
    padding: 15px;
  }
  .table {
    margin-bottom: 0;
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
      padding: 0.9375rem;
      vertical-align: middle;
      line-height: 1;
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

</style>