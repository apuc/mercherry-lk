<template>
  <div class="admin-content">
    <h1>Проекты</h1>
    <button class="btn btn-green mb-2">Добавить проекты</button>
    <p class="c-black mb-1">Показаны записи <strong>1-4</strong> из <strong>4</strong>.</p>
    <table class="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Название</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in data">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-dark">
                <i class="fa fa-eye"></i>
              </button>
              <button class="btn btn-outline-dark">
                <i class="fa fa-pencil"></i>
              </button>
              <button class="btn btn-outline-dark">
                <i class="fa fa-close"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "AdminProjects",
    data() {
      return {
        data: [
          {
            id: 1,
            name: 'name1'
          },
          {
            id: 2,
            name: 'name2'
          },
          {
            id: 3,
            name: 'name3'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>