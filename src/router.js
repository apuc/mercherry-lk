import Vue from 'vue'
import Router from 'vue-router'
import Projects from "./views/admin/Projects";
import Vacancies from "./views/admin/Vacancies";
import Resume from "./views/admin/Resume";
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
      name: 'projects',
      meta: {title: 'Проекты'},
      component: Projects
    },
    {
      path: '/vacancies',
      name: 'vacancies',
      meta: {title: 'Вакансии'},
      component: Vacancies
    },
    {
      path: '/resume',
      name: 'resume',
      meta: {title: 'Список резюме'},
      component: Resume
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
      meta: {title: 'Добавить проект'},
      component: AddProject
    },
    {
      path: '/vacancy/add',
      name: 'add-vacancy',
      meta: {title: 'Добавить вакансию'},
      component: AddVacancy
    }
  ]
})
