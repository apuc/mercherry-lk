<template>
  <div class="admin-menu-wrap" :class="menuOpen ? 'admin-menu--open' : ''">
    <router-link class="navbar-brand" to="/">
      Mercherry
    </router-link>
    <button class="admin-menu__btn" @click="menuOpen = !menuOpen">
      <i class="fa" :class="menuOpen ? 'fa-angle-left' : 'fa-angle-right'"></i>
    </button>
    <nav class="admin-menu">
      <router-link v-for="item in links"
                   :to="`/${item.href}`"
                   :key="item.href"
                   class="admin-menu__item"
      >
        <span>{{item.name}}</span>
        <span v-if="menuCount[item.name] !== undefined && menuCount[item.name] !== 0"
              class="admin-menu__count ml-auto"
        >
          {{menuCount[item.name]}}
        </span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "AdminMenu",
    data() {
      return {
        links: [
          {
            name: 'Проекты',
            href: 'projects'
          },
          {
            name: 'Вакансии',
            href: 'vacancies',
          },
          {
            name: 'Список резюме',
            href: 'resume'
          }
        ],
        menuOpen: false,
      }
    },
    props: {
      menuCount: {
        type: Object
      }
    }
  }
</script>

<style lang="scss">
  .navbar-brand {
    margin: 15px auto;
    color: #000;
    &:hover {
      color: #000;
    }
  }
  .admin-menu {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    &-wrap {
      z-index: 101;
      display: flex;
      flex-direction: column;
      min-width: 255px;
      max-width: 255px;
      min-height: 100vh;
      margin-top: -75px;
      background-color: #fff;
      transition: all 0.3s ease;
      -webkit-box-shadow: 0 0 28px 0 rgba(82, 63, 105, 0.08);
      box-shadow: 0 0 28px 0 rgba(82, 63, 105, 0.08);
      @media (max-width: 1199px) {
        position: fixed;
        top: 0;
        margin-top: 0;
        left: -255px;
      }
    }
    &--open {
      left: 0;
    }
    &__count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 22px;
      height: 22px;
      color: #fff;
      font-size: 12px;
      border-radius: 50%;
      background-color: #ff5e5e;;
    }
    &__btn {
      position: fixed;
      top: 15px;
      right: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0;
      color: #404852;
      font-size: 22px;
      background: #f3f3f9;
      border: none;
      border-radius: 50%;
      transition: all 0.3s ease;
      @media (min-width: 1200px) {
        display: none;
      }
    }
    &__item {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0.75rem 1.25rem 0.75rem 1.25rem;
      color: #000000;
      font-size: 0.875rem;
      &:hover {
        color: #56595a;
        background: #f3f3f9;
      }
      .fa {
        margin-left: auto;
        color: #404852;
      }
      &.router-link-active:before {
        content: "";
        position: absolute;
        width: 5px;
        height: 100%;
        background: #5f6be3;
        left: 0;
        top: 0;
      }
    }
  }
</style>