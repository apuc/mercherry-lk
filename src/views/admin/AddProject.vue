<template>
  <div class="admin-content">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Новый проект</h4>
        <div class="alert alert-success">
          Используйте в названии и описании проекта только понятные обозначения, так как оно будет отображаться для всех пользователей.
        </div>
        <form  class="forms-sample">
          <div class="form-group">
            <label for="title">Название</label>
            <input type="text" class="form-control" id="title">
          </div>
          <div class="form-group">
            <label for="description">Описание</label>
            <textarea class="form-control" id="description" rows="4"></textarea>
          </div>
          <div class="form-group">
            <label>
              <span class="d-inline-block mr-2">Изображение</span>
              <input type="file">
            </label>
          </div>
          <div class="form-group">
            <label>
              <span class="d-inline-block mr-2">Видео</span>
              <input type="file">
            </label>
          </div>
          <div class="form-group">
            <label>
              <span class="d-inline-block mr-2">Презентация</span>
              <input type="file">
            </label>
          </div>
          <div class="form-group">
            <label for="link">Сслыка на сайт</label>
            <input type="text" class="form-control" id="link">
          </div>
          <button class="btn btn-success">Сохранить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddProject"
  }
</script>

<style scoped>

</style>