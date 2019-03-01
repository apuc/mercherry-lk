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
                v-model="selected"
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
    data() {
      return {
        selected: ''
      }
    },
    created() {
      this.selected = this.value;
    }
  }
</script>

<style scoped>

</style>