<template>
  <div>
    <div class="form-group">
      <label v-if="data.label !== undefined" :for="data.id">{{data.label}}</label>
      <div class="fileuploader"
           :id="data.id"
           :name="data.name"
           :value="value"
      >
        Upload
      </div>
      <p v-if="getVacancyError.hasOwnProperty(data.name)" class="text-danger">{{getVacancyError[data.name]}}</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "InputUpload",
    props: {
      data: {
        type: Object,
        required: true
      },
      value: {
        default: ''
      }
    },
    computed: {
      ...mapGetters({
        getVacancyError: 'vacancy/getVacancyError'
      })
    },
    mounted() {
      setTimeout(() => {
        let contextVue = this;
        $(document).ready(function() {
          $(`#${contextVue.data.id}`).uploadFile({
            autoSubmit: false,
            fileName: "myfile",
            onSelect:function(files)
            {
              this.value = files[0];
              let formData = new FormData();
              formData.append('file', files[0]);
              this.value = formData;
              contextVue.$emit("input", this.value);
            }
          });
        });
      }, 100)
    }
  }
</script>

<style scoped>

</style>