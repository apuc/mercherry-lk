import Vue from 'vue'
import Router from 'vue-router'
import AdminProjects from "./views/admin/AdminProjects";
import AdminVacancies from "./views/admin/AdminVacancies";
import AdminResume from "./views/admin/AdminResume";
import Login from "./views/Login";
import Password from "./views/Password";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'admin',
      component: AdminProjects
    },
    {
      path: '/admin/vacancies',
      name: 'adminVacancies',
      component: AdminVacancies
    },
    {
      path: '/admin/resume',
      name: 'adminResume',
      component: AdminResume
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'auth'},
      component: Login
    },
    {
      path: '/password-reset',
      name: 'password-reset',
      meta: {layout: 'auth'},
      component: Password
    },
  ]
})
