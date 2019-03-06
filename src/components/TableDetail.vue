<template>
  <div>
    <div class="table-wrap">
      <table class="table">
        <tbody>
          <tr v-for="(item, index) in data">
            <td class="table-detail-first">{{dataNames[index]}}</td>
            <td>
              {{item}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import store from '../store/store';
  import timeMixin from '../mixins/timeMixin';

  export default {
    name: "TableDetail",
    data() {
      return {
        data: {},
        addData: {}
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
      },
      missingValue: {
        type: Object
      }
    },
    methods: {
      getData() {
        let dataSend = {id: this.$route.params.id};
        store.dispatch(`${this.name}/${this.name.toUpperCase()}`, dataSend)
          .then(res => {
            this.data = res.body;
            this.parseTime(this.data);
            this.deleteValue();
          });
      },
      deleteValue() {
        for (let i in this.missingValue) {
          if (this.data.hasOwnProperty(i)) {
            this.$emit('addMissingValue', i, this.data[i]);
            delete this.data[i];
          }
        }
      }
    },
    created() {
      this.getData();
    },
    mixins: [timeMixin]
  }
</script>

<style scoped>
  .table-detail-first {
    width: 250px;
  }
</style>