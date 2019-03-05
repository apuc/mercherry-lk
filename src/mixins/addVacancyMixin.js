const addVacancyMixin = {
  data() {
    return {
      value: {},
      setDataDone: false
    }
  },
  props: {
    getData: {
      type: Boolean
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
      for (let key in this.value) {
        let regexp = /\d/;
        if (regexp.test(key)) {
          let name = key.replace(/\d/g, '');
          if (!Array.isArray(this.value[name])) {
            let value = this.value[name];
            this.value[name] = [];
            if (value !== undefined) {
              this.value[name].push(value);
            }
          }
          else {
            let done = false;
            for (let i = 0; i < this.value[name].length; i++) {
              if (this.value[name][i] === this.value[key]) {
                done = true;
              }
            }
            if (!done) {
              this.value[name].push(this.value[key]);
            }
          }
          delete this.value[key];
        }
      }
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
    if (this.getData && !this.setDataDone) {
      this.setData();
      this.setDataDone = true;
    }
  },
  created() {
    this.setData();
  }
};

export default addVacancyMixin;