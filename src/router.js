import Vue from 'vue'
import Router from 'vue-router'
import AdminProjects from "./views/admin/AdminProjects";
import AdminVacancies from "./views/admin/AdminVacancies";
import AdminResume from "./views/admin/AdminResume";
import Login from "./views/Login";
import Password from "./views/Password";
import AddProject from "./views/admin/AddProject";
import AddVacancy from "./views/admin/AddVacancy";

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
      name: 'home',
      redirect: '/projects',
    },
    {
      path: '/projects',
      name: 'adminProjects',
      component: AdminProjects
    },
    {
      path: '/vacancies',
      name: 'adminVacancies',
      component: AdminVacancies
    },
    {
      path: '/resume',
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
    {
      path: '/project/add',
      name: 'add-project',
      component: AddProject
    },
    {
      path: '/vacancy/add',
      name: 'add-vacancy',
      component: AddVacancy
    }
  ]
})
