const inputMixin = {
  $_veeValidate: {
    value() {
      return this.value;
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    error: {
      type: String
    },
    value: {
      default: ''
    },
    index: {
      type: Number
    }
  },
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    }
  }
};

export default inputMixin;