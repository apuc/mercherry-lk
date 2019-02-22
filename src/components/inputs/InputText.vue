<template>
  <div>
    <div class="form-group">
      <label>{{data.label}}</label>
      <input type="text"
             class="form-control"
             @input="customInput"
             :name="data.name"
             ref="input"
             v-validate="data.validate"
      >
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';

  export default {
    name: "InputText",
    mixins: [inputMixin]
  }
</script>

<style scoped>

</style>