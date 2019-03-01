<template>
  <div>
    <div class="form-group">
      <label class="d-block">{{data.label}}</label>
      <div class="form-check" v-for="item in data.radio">
        <label class="form-check-label">
          <input type="radio"
                 class="form-check-input"
                 :value="item.value"
                 :name="data.name"
                 @input="updateValue"
                 @blur="$emit('blur')"
                 v-model="checked"
          >
          <i class="input-helper"></i>
          <span>{{item.label}}</span>
        </label>
      </div>
      <p v-if="error !== undefined" class="text-danger">{{error}}</p>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';

  export default {
    name: "InputRadio",
    data() {
      return {
        checked: ''
      }
    },
    created() {
      this.checked = this.value;
      if (this.checked !== '') {
        this.updateValue({target: {value: this.checked}});
      }
    },
    mixins: [inputMixin]
  }
</script>

<style lang="scss">
  .form-check {
    position: relative;
    display: inline-block;
    padding-left: 0;
    .form-check-label {
      min-height: 18px;
      display: block;
      margin-left: 1.65rem;
      margin-right: 1.3rem;
      font-size: 0.875rem;
      line-height: 1.5;
      cursor: pointer;
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% - 1.3rem);
        height: calc(100% - 0.5rem);
        margin-left: 0;
        margin-top: 0;
        z-index: 1;
        cursor: pointer;
        opacity: 0;
        filter: alpha(opacity=0);
        &[type="checkbox"] + .input-helper:before,
        &[type="radio"] + .input-helper:before {
          position: absolute;
          content: "";
          width: 18px;
          height: 18px;
          border: 2px solid #7571f9;
          transition: all 0.3s ease;
        }
        &[type="checkbox"] + .input-helper:before {
          border-radius: 2px;
        }
        &[type="radio"] + .input-helper:before {
          border-radius: 50%;
        }
        &[type="checkbox"] + .input-helper:after {
          position: absolute;
          top: -1px;
          left: 2px;
          font-family: FontAwesome;
          opacity: 0;
          transition: all 0.3s ease;
          content: "\f00c";
          font-size: .8rem;
          color: #ffffff;
        }
        &[type="radio"] + .input-helper:after {
          position: absolute;
          top: 0;
          left: 0;
          content: '';
          width: 18px;
          height: 18px;
          background: #ffffff;
          border-radius: 50%;
          border: 5px solid #7571f9;
          transition: all 0.3s ease;
          transform: scale(0);
        }
        &[type="checkbox"]:checked + .input-helper:before {
          background-color: #7571f9;
        }
        &[type="checkbox"]:checked + .input-helper:after {
          opacity: 1;
        }
        &[type="radio"]:checked + .input-helper:after {
          transform: scale(1);
        }
      }
    }
  }
  .input-helper {
    position: absolute;
    left: 0;
    top: 1px;
  }
</style>