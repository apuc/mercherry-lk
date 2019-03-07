<template>
  <ul class="nav nav-tabs">
    <li v-for="item in dataTabs.tabs"
        class="nav-item"
        :style="width"
    >
      <button v-if="item.done"
              class="nav-link"
              :class="{active: item.name === dataTabs.currentTab, 'd-none': item.disabled, 'nav-link-success': item.done}"
              @click="tabClick(item.name)"
      >
        {{item.label}}
      </button>
      <span v-else
            class="nav-link"
            :class="{active: item.name === dataTabs.currentTab, 'd-none': item.disabled, 'nav-link-success': item.done}"
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
    },
    computed: {
      width() {
        return 'width: ' + 100 / this.dataTabs.tabs.length + '%';
      }
    }
  }
</script>

<style lang="scss">
  .nav-tabs {
    border-bottom: none;
    .nav-item {
      line-height: 1.8;
      @media(max-width: 992px) {
        width: unset !important;
      }
    }
    .nav-link {
      width: calc(100% - 1rem);
      margin: 0 0.5em 0.5em;
      padding: 1em 1em;
      border-radius: 5px;
      font-size: 0.875rem;
      font-weight: 500;
      text-align: center;
      color: #434a54;
      background: #e6e9ed;
      border: none;
      white-space: nowrap;
      &:hover {
        border-color: #f3f3f3;
      }
      &.active {
        background: #7571f9;
        color: #ffffff;
      }
      &-success {
        background: #d4d3fd;
        color: #ffffff;
      }
    }
  }
  .nav-tabs a.nav-link:hover, .nav-tabs a.nav-link:focus,
  .nav-tabs button.nav-link:hover, .nav-tabs button.nav-link:focus{
    border-color: #e9ecef #e9ecef #dee2e6;
  }
  .tab-content {
    margin: 0.5em;
    padding: 2.5%;
    border-radius: 5px;
    border: 1px solid #f3f3f3;
  }
</style>