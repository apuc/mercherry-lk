const tabsMixin = {
  methods: {
    onTabClick(name) {
      this.dataTabs.currentTab = name;
    }
  },
  created() {
    this.dataTabs.currentTab = this.dataTabs.tabs[0].name;
  }
};

export default tabsMixin;