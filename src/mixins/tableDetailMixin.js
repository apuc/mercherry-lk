const tableDetailMixin = {
  data() {
    return {
      missingValue: {}
    }
  },
  methods: {
    onAddMissingValue(key, value) {
      this.missingValue[key] = value;
      this.changedValue();
    },
    changedValue() {}
  }
};

export default tableDetailMixin;