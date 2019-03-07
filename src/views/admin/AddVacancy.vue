<template>
  <div>
    <!--<Breadcrumbs :items="breadcrumbs"/>-->
    <Tabs :dataTabs="dataTabs"
          @tabClick="onTabClick"
    />
    <component :is="`AddVacancy${dataTabs.currentTab}`"
               class="mt-2"
               @onInput="onInputUpdate"
               @next="next()"
               @prev="prev()"
               @send="send()"
               :profile="dataTabs.tabs[3].disabled"
               :education="dataTabs.tabs[4].disabled"
               v-if="getData"
    />
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
        getData: false,
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
            name: 'Новая вакансия'
          }
        ],
        dataTabs: {
          currentTab: '',
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
      }
    },
    computed: {
      ...mapGetters({
        getAddVacancyData: 'vacancy/getAddVacancyData'
      })
    },
    methods: {
      ...mapActions({
        ADD_VACANCY: 'vacancy/ADD_VACANCY',
        UPDATE_VACANCY: 'vacancy/UPDATE_VACANCY',
        VACANCY: 'vacancy/VACANCY'
      }),
      ...mapMutations({
        VACANCY_ERROR: 'vacancy/VACANCY_ERROR',
        ADD_DATA_VACANCY: 'vacancy/ADD_DATA_VACANCY',
        CLEAR_DATA_VACANCY: 'vacancy/CLEAR_DATA_VACANCY'
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
        let dataSend = {};
        if (this.$route.meta.action === 'UPDATE') {
          dataSend = {
            id: this.$route.params.id,
            data: this.getAddVacancyData
          }
        }
        else {
          dataSend = this.getAddVacancyData;
        }
        this[`${this.$route.meta.action}_VACANCY`](dataSend)
          .then(res => {
            if (res.ok) {
              this.$router.push({name: 'vacancies'});
            }
            else {
              this.VACANCY_ERROR(res.body.error);
            }
          });
      },
    },
    created() {
      if (this.$route.meta.action === 'UPDATE') {
        this.VACANCY({id: this.$route.params.id})
          .then(res => {
            this.ADD_DATA_VACANCY(res.body);
            if (this.getAddVacancyData.hasOwnProperty('questions')) {
              this.ADD_DATA_VACANCY({need_questions: 1});
            }
            this.getData = true;
          });
      }
      else {
        this.getData = true;
      }
    },
    beforeDestroy() {
      this.CLEAR_DATA_VACANCY({});
    },
    mixins: [tabsMixin]
  }
</script>

<style scoped>

</style>