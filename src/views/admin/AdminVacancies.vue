<template>
  <div class="admin-content">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Вакансии</h4>
        <router-link to="/add-vacancy" class="btn btn-sm btn-primary mb-2">
          <i class="fa fa-circle-o mr-1">
            <i class="fa fa-plus"></i>
          </i>
          <span>Добавить вакансию</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AdminVacancies"
  }
</script>

<style scoped>

</style>