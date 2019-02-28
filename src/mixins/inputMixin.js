import {excluded} from "vee-validate/dist/rules.esm";

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
    },
    firstValue() {
      if (this.data.done) {
        this.$emit('input', this.data.options[0].id);
        this.data.done = false;
      }
    },
  },
  beforeUpdate() {
    this.firstValue();
  },
  created() {
    this.firstValue();
  },
};

export default inputMixin;