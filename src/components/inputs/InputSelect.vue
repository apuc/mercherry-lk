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
    methods: {
      setSelected() {
        if (isNaN(parseInt(this.value)) && this.value !== '') {
          for (let i = 0; i < this.data.options.length; i++) {
            if (this.value === this.data.options[i].label) {
              this.selected = this.data.options[i].id;
              this.updateValue({target: {value: this.data.options[i].id}});
            }
          }
        }
        else if (this.value !== '') {
          this.selected = this.value;
        }
        else if (this.data.options[0] !== undefined) {
          this.selected = this.data.options[0].id;
          this.updateValue({target: {value: this.selected}});
        }
      }
    },
    created() {
      this.setSelected();
    },
    beforeUpdate() {
      this.setSelected();
    }
  }
</script>

<style scoped>

</style>