<template>
  <div>
    <TableDetail :name="'project'"
                 :dataNames="dataNames"
    />
  </div>
</template>

<script>
  import TableDetail from "../../components/TableDetail";
  export default {
    name: "ProjectView",
    components: {TableDetail},
    data() {
      return {
        dataNames: {
          id: 'ID',
          label: 'Название проекта',
          text: 'Описание',
          image: 'Изображение',
          video: 'Видео',
          presentation: 'Презентация',
          url: 'Ссылка на сайт'
        }
      }
    }
  }
</script>

<style scoped>

</style>