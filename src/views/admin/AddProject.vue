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
            <label class="d-inline-block mr-2">Изображение</label>
            <div class="fileuploader">Upload</div>
          </div>
          <div class="form-group">
            <label class="d-inline-block mr-2">Видео</label>
            <div class="fileuploader">Upload</div>
          </div>
          <div class="form-group">
            <label class="d-inline-block mr-2">Презентация</label>
            <div class="fileuploader">Upload</div>
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
    name: "AddProject",
    created() {
      $(document).ready(function() {
        if ($(".fileuploader").length) {
          $(".fileuploader").each(function(index, value) {
            $(value).uploadFile({
              url: "YOUR_FILE_UPLOAD_URL",
              fileName: "myfile"
            });
          });
        }
      });
    }
  }
</script>

<style>
  .ajax-upload-dragdrop {
    border-color: #f3f3f3;
    border-style: dotted;
    max-width: 100%;
  }
  .ajax-upload-dragdrop .ajax-file-upload {
    background: #4d7cff;
    box-shadow: none;
    height: auto;
  }
  .ajax-upload-dragdrop span b {
    font-size: .8125rem;
    color: #222222;
    font-weight: initial;
  }
  .ajax-file-upload-statusbar {
    margin: 0;
  }
  .ajax-file-upload-statusbar,
  .ajax-file-upload-statusbar * {
    max-width: 100%;
  }
</style>