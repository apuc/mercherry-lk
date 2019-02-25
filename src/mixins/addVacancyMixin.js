const addVacancyMixin = {
  data() {
    return {
      value: {}
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$emit('next');
        }
      });
    },
    onInput() {
      this.ADD_DATA_VACANCY(this.value);
      this.$emit('onInput');
    },
    onCountPlus(obj) {
      this.inputs.splice(obj.index, 0, obj.data)
    }
  },
};

export default addVacancyMixin;