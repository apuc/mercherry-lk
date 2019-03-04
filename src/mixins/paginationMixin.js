const paginationMixin = {
  data() {
    return {
      pages: [],
      maxPages: 10,
      totalPages: 1,
      currentPage: 1,
    }
  },
  methods: {
    currentPages() {
      this.pages = [];
      if (this.totalPages <= this.maxPages) {
        for (let i = 1; i <= this.totalPages; i++) {
          this.pages.push(i);
        }
      }
      else {
        let firstPage;
        let lastPage ;
        if (this.currentPage <= this.maxPages / 2) {
          firstPage = 1;
          lastPage = 10;
        }
        else if (this.currentPage >= this.totalPages - this.maxPages / 2) {
          firstPage = this.totalPages - 9;
          lastPage = this.totalPages;
        }
        else {
          firstPage = this.currentPage - 4;
          lastPage = this.currentPage + 5;
        }
        for (let i = firstPage; i <= lastPage; i++) {
          this.pages.push(i);
        }
      }
    },
  },
  beforeUpdate() {
    this.currentPages();
  },
  created() {
    this.currentPages();
  },
};

export default paginationMixin;