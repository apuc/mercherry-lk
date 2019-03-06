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
      this.inputs.splice(obj.index, 0, obj.data);
    },
    onCountMinus(index) {
      this.inputs.splice(index, 1);
    },
    setData() {
      for (let key in this.getAddVacancyData()) {
        this.value[key] = this.getAddVacancyData()[key];
      }
    }
  },
  beforeUpdate() {
    this.setData();
  },
  created() {
    this.setData();
  }
};

export default addVacancyMixin;