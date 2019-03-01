<template>
  <ul class="nav nav-tabs">
    <li v-for="item in dataTabs.tabs"
        class="nav-item"
        :style="width"
    >
      <button v-if="item.done"
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
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    border-bottom: none;
    .nav-item {
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
      font-weight: 600;
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
</style>