<template>
  <div>
    <div class="form-group">
      <label v-if="data.label !== undefined" :for="data.id">{{data.label}}</label>
      <div class="d-flex">
        <select class="form-control"
                :id="data.id"
                :name="data.name"
                @input="updateValue"
                @blur="$emit('blur')"
                :value="value"
        >
          <option v-for="option in data.options"
                  :value="option.id"
          >
            {{option.label}}
          </option>
        </select>
        <button v-if="data.modal !== undefined" type="button" class="btn btn-success ml-3" :data-target="data.modal" data-toggle="modal">+</button>
      </div>
      <p v-if="error !== undefined" class="text-danger">{{error}}</p>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';

  export default {
    name: "InputSelect",
    mixins: [inputMixin],
    methods: {
      firstValue() {
        if (this.data.done) {
          this.$emit('input', this.data.options[0].id);
          this.data.done = false;
        }
      },
      updateValue(e) {
        this.$emit("input", e.target.value);
      }
    },
    beforeUpdate() {
      this.firstValue();
    },
    created() {
      this.firstValue();
    },
  }
</script>

<style scoped>

</style>