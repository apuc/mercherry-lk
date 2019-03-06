<template>
  <div>
    <div class="table-wrap">
      <table class="table">
        <thead>
        <tr>
          <th class="table-id">ID</th>
          <th v-for="item in head">
            {{item}}
          </th>
          <th class="table-buttons"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in data"
            :class="getClass(item.status)"
        >
          <td v-for="(label, key, index) in item">
            <router-link class="table-name-link" v-if="nameLink && index == 1" :to="`/responses/${item.id}`">
              {{label}}
            </router-link>
            <span :class="{'admin-menu__count': key === 'response_count' && label !== 0}" v-else>
              {{label}}
            </span>
          </td>
          <td>
            <div class="btn-icons justify-content-end">
              <router-link class="btn-ico" :to="`/${name}/${item.id}`">
                <i class="fa fa-eye"></i>
              </router-link>
              <router-link v-if="editBtn" class="btn-ico" :to="`/${name}/update/${item.id}`">
                <i class="fa fa-pencil"></i>
              </router-link>
              <button v-if="deleteBtn" class="btn-ico" @click="deleteElem(item.id)">
                <i class="fa fa-close"></i>
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <Pagination v-if="pages.length > 0"
                :currentPage="currentPage"
                :pages="pages"
                :totalPages="totalPages"
                :path="path"
                @changePath="getPath()"
    />
  </div>
</template>

<script>
  import store from '../store/store';
  import Pagination from "./Pagination";
  import paginationMixin from '../mixins/paginationMixin';
  import timeMixin from '../mixins/timeMixin';

  export default {
    name: "Table",
    components: {Pagination},
    data() {
      return {
        data: [],
        path: ''
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
      },
      nameLink: {
        type: Boolean
      },
      idRequired: {
        type: Boolean
      },
      idName: {
        type: String
      },
      deleteBtn: {
        type: Boolean,
        default: true
      },
      editBtn: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      deleteElem(id) {
        store.dispatch(`${this.name}/DELETE_${this.name.toUpperCase()}`, {id: id})
          .then(res => {
            if (res.ok) {
              this.getElem();
            }
          });
      },
      getElem() {
        let dataSend = {page: this.currentPage};
        if (this.idRequired) {
          dataSend[this.idName] = this.$route.params.id;
        }
        store.dispatch(`${this.name}/${this.name.toUpperCase()}_LIST`, dataSend)
          .then(res => {
            this.data = res.body.result;
            for (let value of this.data) {
              this.parseTime(value);
            }
            this.totalPages = res.body.totalPages;
          });
      },
      getPath() {
        this.path = this.$route.path;
        if (this.$route.params.page !== undefined) {
          this.currentPage = parseInt(this.$route.params.page);
        }
        if (this.path.indexOf('/page') !== -1) {
          this.path = this.path.slice(0, this.path.indexOf('/page'));
        }
        this.getElem();
      },
      getClass(status) {
        if (status === "Отклик") {
          return 'table-success';
        }
        else if (status === "Отклонён") {
          return 'table-danger';
        }
      }
    },
    created() {
      this.getPath();
    },
    mixins: [paginationMixin, timeMixin]
  }
</script>

<style>
  .table-name-link {
    color: inherit;
  }
  .table-success {
    background-color: #d7f4d7;
  }
  .table-danger {
    background-color: #ffd2d2;
  }
</style>