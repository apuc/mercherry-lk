const inputMixin = {
  $_veeValidate: {
    value() {
      return this.value;
    }
  },
  data() {
    return {
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
      type: String,
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