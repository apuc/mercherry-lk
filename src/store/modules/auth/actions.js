import Vue from 'vue';

export default {
  'LOGIN': async (context, userInfo) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/auth/login`, userInfo)
      .then(
        (res) => {
          localStorage.setItem('token', res.body.token);
          localStorage.removeItem('hash');
          return res;
        },
        (err) => {
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  }

};
