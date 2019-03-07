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
import vSelect from 'vue-select'

Vue.use(VueResource);

Vue.component('v-select', vSelect);
Vue.component('main-layout', MainLayout);
Vue.component('auth-layout', AuthLayout);

Vue.config.productionTip = false;

Vue.use(VeeValidate, {
  validity: true,
  locale: 'ru',
  events: 'change'
});

const dictionary = {
  ru: {
    messages: {
      _default: () => "Необходимо заполнить поле."
    }
  },
};

Validator.localize('ru', dictionary.ru);

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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    Vue.http.headers.common['Authorization'] = `Bearer ${token}`;
    store.commit('profile/AUTH', true);
    next();
  }
  else {
    if (to.path === '/login' || to.path === '/password-reset' || to.meta.isPublic) {
      next();
    }
    else {
      next({path: '/login'});
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
