import Vue from "vue";

export default {
  'PRODUCT_TYPE': async (context, params) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/product-types`)
      .then(
        res => {
          return res;
        },
        err => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
  },

  'PRODUCT_TYPE_ADD': async (context, params) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/product-types/create`, params)
      .then(
        res => {
          return res;
        },
        err => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
  }
};
