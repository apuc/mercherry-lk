import Vue from 'vue'
import Router from 'vue-router'
import Projects from "./views/admin/Projects";
import Vacancies from "./views/admin/Vacancies";
import Resume from "./views/admin/Resume";
import Login from "./views/Login";
import Password from "./views/Password";
import AddProject from "./views/admin/AddProject";
import AddVacancy from "./views/admin/AddVacancy";
import Responses from "./views/admin/Responses";
import Vacancy from "./views/admin/Vacancy";
import ResponseView from "./views/admin/ResponseView";
import ProjectView from "./views/admin/ProjectView";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
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
      component: Projects,
      children: [
        {
          path: 'page/:page',
          meta: {title: 'Проекты'},
        }
      ]
    },
    {
      path: '/project/add',
      name: 'add-project',
      meta: {title: 'Добавить проект', action: 'ADD'},
      component: AddProject
    },
    {
      path: '/vacancies',
      name: 'vacancies',
      meta: {title: 'Вакансии'},
      component: Vacancies,
      children: [
        {
          path: 'page/:page',
          meta: {title: 'Вакансии'}
        }
      ]
    },
    {
      path: '/project/:id',
      name: 'project',
      meta: {title: 'Просмотр проекта: ', id: true},
      component: ProjectView
    },
    {
      path: '/project/update/:id',
      name: 'update-project',
      meta: {title: 'Редактирование проекта: ', action: 'UPDATE', id: true},
      component: AddProject
    },
    {
      path: '/vacancy/add',
      name: 'add-vacancy',
      meta: {title: 'Добавить вакансию', action: 'ADD'},
      component: AddVacancy
    },
    {
      path: '/vacancy/update/:id',
      name: 'update-vacancy',
      meta: {title: 'Редактирование вакансии: ', action: 'UPDATE', id: true},
      component: AddVacancy
    },
    {
      path: '/vacancy/:id',
      name: 'vacancy',
      meta: {title: 'Просмотр вакансии: ', id: true},
      component: Vacancy
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
      path: '/responses/:id',
      name: 'responses',
      meta: {title: 'Отклики', isPublic: true},
      component: Responses,
      children: [
        {
          path: 'page/:page',
          meta: {title: 'Отклики'}
        }
      ]
    },
    {
      path: '/response/:id',
      name: 'response',
      meta: {title: 'Отклик', id: true, isPublic: true},
      component: ResponseView
    }
  ]
})
