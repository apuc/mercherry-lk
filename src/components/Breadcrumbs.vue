<template>
  <ul class="breadcrumb">
    <li v-for="(item, index) in items"
        class="breadcrumb-item"
        :class="lastItem(index) ? 'active' : ''"
    >
      <router-link v-if="!lastItem(index)" :to="`/${item.href}`">{{item.name}}</router-link>
      <template v-else>{{item.name}}</template>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Breadcrumbs",
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    methods: {
      lastItem(index) {
        return index === this.items.length - 1;
      }
    }
  }
</script>

<style lang="scss">
  .breadcrumb {
    padding: 0.56rem 1.13rem;
    background-color: transparent;
    border: 1px solid #f3f3f3;
    .breadcrumb-item {
      font-size: 0.875rem;
    }
    &-item.active {
      color: #495057;
    }
  }
</style>