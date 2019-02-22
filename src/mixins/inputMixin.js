const inputMixin = {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    customInput(e) {
      this.$emit('customInput', {value: e.target.value, name: this.data.name, errors: this.errors})
    },
  }
};

export default inputMixin;