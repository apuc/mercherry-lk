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
                :value="value"
        >
          <option v-for="option in data.options">
            {{option}}
          </option>
        </select>
        <button type="button" class="btn btn-success ml-3" @click="countPlus">+</button>
      </div>
      <p class="text-danger">{{error}}</p>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';

  export default {
    name: "InputAdd",
    data() {
      return {
        count: 1,
        dataAdd: {}
      }
    },
    methods: {
      countPlus() {
        this.newElem();
        this.count++;
        this.dataAdd.data.name = this.dataAdd.data.name + this.count;
        this.$emit('countPlus', {
          index: this.index + 1, data: this.dataAdd
        });
        this.dataAdd = {};
      },
      newElem() {
        this.dataAdd = Object.assign(this.dataAdd, this.data.addComponent);
        this.dataAdd.data = {};
        for (let key in this.data) {
          this.dataAdd.data[key] = this.data[key];
        }
        delete this.dataAdd.data.id;
        delete this.dataAdd.data.label;
        delete this.dataAdd.data.inputType;
        delete this.dataAdd.data.addComponent;
      }
    },
    mixins: [inputMixin],
  }
</script>

<style scoped>

</style>