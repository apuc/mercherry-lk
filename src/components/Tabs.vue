<template>
  <ul class="nav nav-tabs">
    <li v-for="item in dataTabs.tabs"
        class="nav-item"
    >
      <button v-if="dataTabs.click"
              class="nav-link"
              :class="{active: item.name === dataTabs.currentTab, disabled: item.disabled, 'nav-link-success': item.done}"
              @click="tabClick(item.name)"
      >
        {{item.label}}
      </button>
      <span v-else
            class="nav-link"
            :class="{active: item.name === dataTabs.currentTab, disabled: item.disabled, 'nav-link-success': item.done}"
      >
         {{item.label}}
      </span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Tabs",
    props: {
      dataTabs: {
        type: Object,
        required: true
      }
    },
    methods: {
      tabClick(name) {
        this.$emit('tabClick', name);
      }
    }
  }
</script>

<style lang="scss">
  .nav-tabs {
    border-bottom: 1px solid #ebedf2;
    .nav-link {
      background: #f6f8fa;
      color: #000000;
      font-size: 0.875rem;
      line-height: 1.8;
      border-radius: 0;
      border: 1px solid #f3f3f3;
      padding: .75rem 1.5rem;
      &:hover {
        border-color: #f3f3f3;
      }
      &.active {
        color: #222222;
        border-color: #ebedf2 #ebedf2 #ffffff;
      }
      &-success {
        margin-bottom: -2px;
        border-bottom: 3px solid #6fd96f;
        &:hover {
          border-bottom: 3px solid #6fd96f;
        }
      }
    }
  }
  .nav-tabs a.nav-link:hover, .nav-tabs a.nav-link:focus,
  .nav-tabs button.nav-link:hover, .nav-tabs button.nav-link:focus{
    border-color: #e9ecef #e9ecef #dee2e6;
  }
</style>