<template>
  <div>
    <div class="table-wrap">
      <table class="table">
        <tbody>
          <tr v-for="(item, index) in data">
            <td>{{dataNames[index]}}</td>
            <td>{{item}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import store from '../store/store';

  export default {
    name: "TableDetail",
    data() {
      return {
        data: {}
      }
    },
    props: {
      name: {
        type: String,
        required: true
      },
      dataNames: {
        type: Object,
        required: true
      }
    },
    methods: {
      getData() {
        let dataSend = {id: this.$route.params.id};
        store.dispatch(`${this.name}/${this.name.toUpperCase()}`, dataSend)
          .then(res => {
            this.data = res.body;
          });
      }
    },
    created() {
      this.getData();
    }
  }
</script>

<style scoped>

</style>