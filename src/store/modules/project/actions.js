import Vue from 'vue';

export default {
  'ADD_PROJECT': async (context, params) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/projects/create`, params)
      .then(
        (res) => {
          return res;
        },
        (err) => {
          console.log(err);
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  },

};