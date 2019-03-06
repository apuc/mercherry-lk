const timeMixin = {
  methods: {
    parseTime(obj) {
      if (obj.hasOwnProperty('created')) {
        let date = new Date(obj.created * 1000)
        obj.created = date.toLocaleDateString();
      }
    }
  }
};

export default timeMixin;