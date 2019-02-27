<template>
  <div>
    <div class="form-group">
      <label :for="data.id">{{data.label}}</label>
      <div class="d-flex">
        <input v-if="data.inputType === 'input'"
               type="text"
               class="form-control"
               :id="data.id"
               :name="data.name"
               @input="updateValue"
               @change="updateValue"
               @blur="$emit('blur')"
               :value="value"
        >
        <select v-else-if="data.inputType === 'select'"
                class="form-control"
                :id="data.id"
                :name="data.name"
                @input="updateValue"
                @change="updateValue"
                @blur="$emit('blur')"
                :value="null"
        >
          <option v-for="option in data.options"
                  :value="option.id"
          >
            {{option.label}}
          </option>
        </select>
        <button type="button" class="btn btn-success ml-3" :data-target="data.modal" data-toggle="modal">+</button>
      </div>
      <p class="text-danger">{{error}}</p>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';

  export default {
    name: "InputAddProduct",
    methods: {
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
    mixins: [inputMixin],
  }
</script>

<style scoped>

</style>