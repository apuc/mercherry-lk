<template>
  <div>
    <div class="table-wrap">
      <table class="table">
        <tbody>
          <tr v-for="(item, index) in data">
            <td class="table-detail-first">{{dataNames[index]}}</td>
            <td>
              <template v-if="Array.isArray(item)">
                <template v-for="text in item">
                  {{text}}
                  <br>
                </template>
              </template>
              <template v-else>
                {{item}}
              </template>
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
            this.parseData();
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
      },
      parseData() {
        for (let i in this.data) {
          if (this.data[i] === false) {
            this.data[i] = 'Нет';
          }
          else if (this.data[i] === true) {
            this.data[i] = 'Да';
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