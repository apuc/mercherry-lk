<template>
  <div>
    <div class="form-group">
      <label v-if="data.label !== undefined" :for="data.id">{{data.label}}</label>
      <textarea type="text"
             class="form-control"
             :id="data.id"
             :name="data.name"
             @input="updateValue"
             @blur="$emit('blur')"
             :value="value"
      >
      </textarea>
      <p v-if="error !== undefined" class="text-danger mt-1">{{error}}</p>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';

  export default {
    name: "InputTextarea",
    mixins: [inputMixin],
  }
</script>

<style scoped>

</style>