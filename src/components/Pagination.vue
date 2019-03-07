<template>
  <div class="d-flex align-items-center justify-content-between flex-column flex-sm-row mt-4">
    <p class="mb-3 mb-sm-0">Показана {{currentPage}} страница из {{totalPages}}</p>
    <nav v-if="totalPages > 1">
      <ul class="pagination pagination-primary">
        <li class="page-item prev">
          <router-link v-if="currentPage != 1" class="page-link" :to="`${path}/page/${prevPage}`" @click.native="$emit('changePath')">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </router-link>
          <span v-else class="page-link disabled">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </span>
        </li>
        <li class="page-item" :class="page == currentPage ? 'active' : ''" v-for="page in pages" :key="page">
          <router-link class="page-link" :to="`${path}/page/${page}`" @click.native="$emit('changePath')">{{page}}</router-link>
        </li>
        <li>
          <router-link v-if="currentPage != pages.length" class="page-link" :to="`${path}/page/${nextPage}`" @click.native="$emit('changePath')">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </router-link>
          <span v-else class="page-link disabled">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

  export default {
    name: "Pagination",
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      pages: {
        type: Array,
        required: false
      },
      totalPages: {
        type: Number,
        required: true
      },
      path: {
        type: String,
        required: true
      }
    },
    computed: {
      prevPage() {
        return this.currentPage - 1 + '';
      },
      nextPage() {
        return this.currentPage + 1 + '';
      },
    },
  }
</script>

<style>
  .pagination .btn {
    margin: 0 0.5em;
  }
</style>