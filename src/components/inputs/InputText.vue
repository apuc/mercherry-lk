<template>
  <div>
    <div class="form-group">
      <label v-if="data.label !== undefined" :for="data.id">{{data.label}}</label>
      <input :type="data.type || 'text'"
             class="form-control"
             :id="data.id"
             :name="data.name"
             @input="updateValue"
             @blur="$emit('blur')"
             :value="value"
             :placeholder="data.placeholder || data.label"
      >
      <p v-if="error !== undefined" class="text-danger mt-1">{{error}}</p>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';

  export default {
    name: "InputText",
    mixins: [inputMixin],
  }
</script>

<style scoped>

</style>