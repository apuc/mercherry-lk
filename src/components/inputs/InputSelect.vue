<template>
  <div>
    <div class="form-group">
      <label>{{data.label}}</label>
      <select class="form-control"
              :name="data.name"
      >
        <option v-for="option in data.options">
          {{option}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';

  export default {
    name: "InputSelect",
    mixins: [inputMixin]
  }
</script>

<style scoped>

</style>