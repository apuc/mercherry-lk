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

  'UPDATE_PROJECT': async (context, params) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/projects/create/${params.id}`, params.data)
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

  'DELETE_PROJECT': async (context, params) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/projects/delete/${params.id}`)
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

  'PROJECT_LIST': async (context, params) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/projects`, {params: params})
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

  'PROJECT': async (context, params) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/projects/${params.id}`)
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