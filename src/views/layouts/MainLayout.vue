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