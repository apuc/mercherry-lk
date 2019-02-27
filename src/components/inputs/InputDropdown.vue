<template>
  <div>
    <div class="form-group">
      <label v-if="data.label !== undefined" :for="data.id">{{data.label}}</label>
      <div class="position-relative">
        <input :type="data.type || 'text'"
               class="form-control"
               :id="data.id"
               :name="data.name"
               @input="dropdownRequest"
               @blur="$emit('blur')"
               :value="value"
        >
        <!--<ul class="dropdown-input" v-if="profileCity.length > 0 && focused && dropdownValue.length > 0">-->
          <!--<li v-for="(dropdownItem, index) in dropdownValue"-->
              <!--ref="cityDrop"-->
              <!--@click="choiceValue('city', index)"-->
          <!--&gt;-->
            <!--{{dropdownItem}}-->
          <!--</li>-->
        <!--</ul>-->
      </div>
      <p v-if="error !== undefined" class="text-danger">{{error}}</p>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';
  import _ from 'lodash';

  export default {
    name: "InputDropdown",
    data() {
      return {
        focused: false,
        dropdownValue: []
      }
    },
    methods: {
      dropdownRequest:
        _.debounce(function(e) {
          const name = this.data.name.charAt(0).toUpperCase() + this.data.name.slice(1);
          this.$emit("input", e.target.value);
        }, 200)
    },
    mixins: [inputMixin],
  }
</script>

<style scoped>

</style>