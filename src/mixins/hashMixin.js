const hashMixin = {
  data() {
    return {
      hash: ''
    }
  },
  methods: {
    checkHash() {
      if (localStorage.getItem('hash')) {
        this.hash = localStorage.getItem('hash');
      }
      else {
        this.hash = '';
      }
    }
  }
};

export default hashMixin;