import Vue from 'vue';

export default {
  'ADD_VACANCY': async (context, params) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/jobs/create`, params)
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

  'UPDATE_VACANCY': async (context, params) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/jobs/create/${params.id}`, params.data)
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

  'DELETE_VACANCY': async (context, params) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/jobs/delete/${params.id}`)
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

  'VACANCY_LIST': async (context, params) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/jobs`, {params: params})
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

  'VACANCY': async (context, id) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/jobs/${id}`)
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