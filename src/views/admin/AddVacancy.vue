<template>
  <div class="admin-content">
    <div class="card container p-0">
      <div class="card-body">
        <Breadcrumbs :items="breadcrumbs"/>
        <h4 class="card-title">{{mainTitle}}</h4>
        <Tabs :dataTabs="dataTabs"
              @tabClick="onTabClick"
        />
        <component :is="`AddVacancy${dataTabs.currentTab}`"
                   class="mt-4"
                   @onInput="onInputUpdate"
                   @next="next()"
                   @prev="prev()"
                   @send="send()"
                   :profile="dataTabs.tabs[3].disabled"
                   :education="dataTabs.tabs[4].disabled"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumbs from "../../components/Breadcrumbs";
  import Tabs from "../../components/Tabs";
  import tabsMixin from "../../mixins/tabsMixin";
  import AddVacancyFirst from "../../components/addVacancy/AddVacancyFirst";
  import AddVacancySecond from "../../components/addVacancy/AddVacancySecond";
  import AddVacancyThird from "../../components/addVacancy/AddVacancyThird";
  import AddVacancyFourth from "../../components/addVacancy/AddVacancyFourth";
  import AddVacancyFifth from "../../components/addVacancy/AddVacancyFifth";
  import {mapGetters, mapActions, mapMutations} from 'vuex';

  export default {
    name: "AddVacancy",
    components: {
      AddVacancyFirst,
      AddVacancyFourth, AddVacancyThird, AddVacancySecond, AddVacancyFifth, Tabs, Breadcrumbs},
    data() {
      return {
        breadcrumbs: [
          {
            name: 'Главная',
            href: ''
          },
          {
            name: 'Вакансии',
            href: 'vacancy'
          },
          {
            name: ''
          }
        ],
        dataTabs: {
          currentTab: '',
          click: false,
          tabs: [
            {
              name: 'First',
              label: 'Шаг 1',
              done: false
            },
            {
              name: 'Second',
              label: 'Шаг 2',
              done: false
            },
            {
              name: 'Third',
              label: 'Шаг 3',
              done: false
            },
            {
              name: 'Fourth',
              label: 'Шаг 4 (Анкета)',
              disabled: true,
              done: false
            },
            {
              name: 'Fifth',
              label: 'Шаг 5 (Обучение)',
              disabled: true,
              done: false
            }
          ]
        },
        tabDisabled: {
          profile: {
            value: 1,
            item: 3
          },
          several: {
            interview_training: {
              value: 1,
              item: 4
            },
            internship_training: {
              value: 1,
              item: 4
            }
          }
        },
        mainTitle: ''
      }
    },
    computed: {
      ...mapGetters({
        getAddVacancyData: 'vacancy/getAddVacancyData'
      })
    },
    methods: {
      ...mapActions({
        ADD_VACANCY: 'vacancy/ADD_VACANCY'
      }),
      ...mapMutations({
        VACANCY_ERROR: 'vacancy/VACANCY_ERROR'
      }),
      onInputUpdate() {
        if (this.getAddVacancyData.need_questions == 1) {
          this.dataTabs.tabs[3].disabled = false;
        }
        else {
          this.dataTabs.tabs[3].disabled = true;
        }
        if (this.getAddVacancyData.interview_training == 1 || this.getAddVacancyData.internship_training == 1) {
          this.dataTabs.tabs[4].disabled = false
        }
        else {
          this.dataTabs.tabs[4].disabled = true;
        }
      },
      title() {
        switch(this.dataTabs.currentTab) {
          case 'First':
            this.breadcrumbs[this.breadcrumbs.length - 1].name = 'Новая вакансия';
            this.mainTitle = 'Новая вакансия';
            break;
          case 'Second':
            this.breadcrumbs[this.breadcrumbs.length - 1].name = 'Редактирование';
            this.mainTitle = 'Редактирование вакансии';
            break;
          case 'Third':
            this.breadcrumbs[this.breadcrumbs.length - 1].name = 'Редактирование';
            this.mainTitle = 'Редактирование вакансии';
            break;
          case 'Fourth':
            this.breadcrumbs[this.breadcrumbs.length - 1].name = 'Редактирование';
            this.mainTitle = 'Редактирование вакансии';
            break;
          case 'Fifth':
            this.breadcrumbs[this.breadcrumbs.length - 1].name = 'Редактирование';
            this.mainTitle = 'Редактирование вакансии';
            break;
        }
      },
      next() {
        for (let i = 0; i < this.dataTabs.tabs.length; i++) {
          if (this.dataTabs.tabs[i].name === this.dataTabs.currentTab) {
            this.dataTabs.tabs[i].done = true;
            this.dataTabs.currentTab = this.dataTabs.tabs[i + 1].name;
            break;
          }
        }
        window.scrollTo(0, 0);
      },
      prev() {
        for (let i = 0; i < this.dataTabs.tabs.length; i++) {
          if (this.dataTabs.tabs[i].name === this.dataTabs.currentTab) {
            this.dataTabs.tabs[i].done = false;
            this.dataTabs.currentTab = this.dataTabs.tabs[i - 1].name;
            break;
          }
        }
        window.scrollTo(0, 0);
      },
      send() {
        this.ADD_VACANCY(this.getAddVacancyData)
          .then(res => {
            if (res.ok) {
              this.$router.push({name: 'vacancies'});
            }
            else {
              this.VACANCY_ERROR(res.body.error);
            }
          });
      }
    },
    beforeUpdate() {
      this.title();
    },
    created() {
      this.title();
    },
    mixins: [tabsMixin]
  }
</script>

<style scoped>

</style>