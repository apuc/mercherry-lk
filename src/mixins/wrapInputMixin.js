const wrapInputMixin = {
  methods: {
    checkInput() {
      for (let i = 0; i < this.$refs.inputs.length; i++) {
        let item = this.$refs.inputs[i];
        const event = new Event("change");
        if (item.$refs.input !== undefined) {
          if (item.$refs.input.length !== undefined) {
            for (let i = 0; i < item.$refs.input.length; i++) {
              item.$refs.input[i].dispatchEvent(event);
            }
          }
          else {
            item.$refs.input.dispatchEvent(event);
          }
        }
      }
    }
  }
};

export default wrapInputMixin;