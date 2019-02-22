import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';
import VeeValidate from "vee-validate";
import {Validator} from 'vee-validate';
import MainLayout from './views/layouts/MainLayout';
import AuthLayout from './views/layouts/AuthLayout';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.component('main-layout', MainLayout);
Vue.component('auth-layout', AuthLayout);

Vue.config.productionTip = false;

Vue.use(VeeValidate, {
  validity: true,
  locale: 'ru',
  events: 'change'
});

Validator.extend('verify_password', {
  getMessage: field => 'Минимум 6 символов.',
  validate: value => {
    var strongRegex = new RegExp("^(?=.{6,})");
    return strongRegex.test(value);
  }
});

Validator.extend('verify_email_phone', {
  // getMessage: field => `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number(E.g. , . _ & ? etc)`,
  validate: value => {
    var strongRegexEmail = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
    var strongRegexPhone = new RegExp("^(?=.*[0-9])(?=.{2,})");
    return strongRegexEmail.test(value) || strongRegexPhone.test(value);
  }
});

router.beforeEach( async (to, from, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    Vue.http.headers.common['Authorization'] = `Bearer ${token}`;
  }
  if(localStorage.getItem('token')) {
    await store.dispatch('profile/PROFILE');
  }
  else {
    store.commit('profile/AUTH', false);
  }
  if (to.meta.layout === 'auth' && store.getters['profile/auth']
    || to.path === '/profile' && !store.getters['profile/auth']) {
    next({name: 'home'})
  }
  else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
