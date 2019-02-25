<template>
  <div>
    <div class="form-group">
      <label v-if="data.label !== undefined" :for="data.id">{{data.label}}</label>
      <select class="form-control"
              :id="data.id"
              :name="data.name"
              @input="updateValue"
              @change="updateValue"
              @blur="$emit('blur')"
              :value="value"
      >
        <option v-for="option in data.options">
          {{option}}
        </option>
      </select>
      <p v-if="error !== undefined" class="text-danger">{{error}}</p>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';

  export default {
    name: "InputSelect",
    mixins: [inputMixin],
    mounted() {
      this.$emit('input', this.data.options[0])
    }
  }
</script>

<style scoped>

</style>