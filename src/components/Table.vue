<template>
  <div>
    <div class="table-wrap">
      <table class="table">
        <thead>
        <tr>
          <th class="table-id">ID</th>
          <th v-for="(item, index) in head">
            {{item}}
          </th>
          <th class="table-buttons"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in data">
          <td v-for="label in item">
            {{label}}
          </td>
          <td>
            <div class="btn-icons justify-content-end">
              <button class="btn-ico">
                <i class="fa fa-eye"></i>
              </button>
              <button class="btn-ico">
                <i class="fa fa-pencil"></i>
              </button>
              <button class="btn-ico" @click="deleteElem(item.id)">
                <i class="fa fa-close"></i>
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <Pagination :currentPage="currentPage"
                :pages="pages"
                :totalPages="totalPages"
    />
  </div>
</template>

<script>
  import store from '../store/store';
  import Pagination from "./Pagination";
  import paginationMixin from '../mixins/paginationMixin';

  export default {
    name: "Table",
    components: {Pagination},
    data() {
      return {
        data: []
      }
    },
    props: {
      head: {
        type: Array,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    methods: {
      deleteElem(id) {
        let deleted = false;
        store.dispatch(`${this.name}/DELETE_${this.name.toUpperCase()}`, {id: id})
          .then(res => {
            if (res.ok) {
              deleted = true;
            }
          });
        if (deleted) {
          this.getElem();
          deleted = false;
        }
      },
      getElem() {
        store.dispatch(`${this.name}/${this.name.toUpperCase()}_LIST`, {currentPage: this.currentPage})
          .then(res => {
            this.data = res.body.result;
            this.totalPages = res.body.totalPages;
            this.currentPage = res.body.currentPage;
          });
      }
    },
    created() {
      this.getElem();
    },
    mixins: [paginationMixin]
  }
</script>

<style scoped>

</style>