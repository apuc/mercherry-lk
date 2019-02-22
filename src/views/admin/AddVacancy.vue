<template>
  <div class="admin-content">
    <div class="card container p-0">
      <div class="card-body">
        <Breadcrumbs :items="breadcrumbs"/>
        <Tabs :dataTabs="dataTabs"
              @tabClick="onTabClick"
        />
        <component :is="`AddVacancy${dataTabs.currentTab}`"
                   class="mt-4"
                   @inputUpdate="onInputUpdate"
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
  import {mapGetters} from 'vuex';

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
            name: 'Новая вакансия'
          }
        ],
        dataTabs: {
          currentTab: '',
          click: false,
          tabs: [
            {
              name: 'First',
              label: 'Шаг 1',
            },
            {
              name: 'Second',
              label: 'Шаг 2'
            },
            {
              name: 'Third',
              label: 'Шаг 3'
            },
            {
              name: 'Fourth',
              label: 'Шаг 4 (Анкета)',
              disabled: true
            },
            {
              name: 'Fifth',
              label: 'Шаг 5 (Обучение)',
              disabled: true
            }
          ]
        },
        tabDisabled: {
          profile: {
            value: 1,
            item: 3
          },
          education: {
            value: 1,
            item: 4
          }
        }
      }
    },
    computed: {
      ...mapGetters({
        getAddVacancyData: 'addVacancy/getAddVacancyData'
      })
    },
    methods: {
      onInputUpdate() {
        for (let key in this.tabDisabled) {
          let item = this.tabDisabled[key];
          if (this.getAddVacancyData[key] == item.value) {
            this.dataTabs.tabs[item.item].disabled = false;
          }
          else {
            this.dataTabs.tabs[item.item].disabled = true;
          }
        }
      }
    },
    mixins: [tabsMixin]
  }
</script>

<style scoped>

</style>