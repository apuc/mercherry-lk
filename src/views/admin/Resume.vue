<template>
  <div>
    <form class="forms-sample">
      <div class="row">
        <div class="col-sm-6">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="job">Ищет работу</label>
                <input type="text" class="form-control" id="job">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="gender">Пол</label>
                <select class="form-control" id="gender">
                  <option>Мужской</option>
                  <option>Женский</option>
                </select>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="age">Возраст</label>
                <div class="row gutter-1">
                  <div class="col-6">
                    <input type="number" class="form-control" id="age" placeholder="От">
                  </div>
                  <div class="col-6">
                    <input type="number" class="form-control" placeholder="До">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="drive">Водительские права</label>
                <select class="form-control" id="drive">
                  <option>Да</option>
                  <option>Нет</option>
                </select>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="move">Переезд</label>
                <select class="form-control" id="move">
                  <option>Да</option>
                  <option>Нет</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="d-block">Занятость</label>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    <i class="input-helper"></i>
                    <span>Полная занятость</span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    <i class="input-helper"></i>
                    <span>Частичная занятость</span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    <i class="input-helper"></i>
                    <span>Проектная работа</span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    <i class="input-helper"></i>
                    <span>Волонтёрство</span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    <i class="input-helper"></i>
                    <span>Стажировка</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="city">Город</label>
                <input type="text" class="form-control" id="city">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="experience">Опыт работы (в месяцах)</label>
                <div class="row gutter-1">
                  <div class="col-6">
                    <input type="number" class="form-control" id="experience" placeholder="От">
                  </div>
                  <div class="col-6">
                    <input type="number" class="form-control" placeholder="До">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="salary">Зарплата</label>
                <div class="row gutter-1">
                  <div class="col-6">
                    <input type="number" class="form-control" id="salary" placeholder="От">
                  </div>
                  <div class="col-6">
                    <input type="number" class="form-control" placeholder="До">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="trips">Командировки</label>
                <select class="form-control" id="trips">
                  <option>Да</option>
                  <option>Нет</option>
                </select>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="suitable">Подходит</label>
                <select class="form-control" id="suitable">
                  <option>Да</option>
                  <option>Нет</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="d-block">График работы</label>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    <i class="input-helper"></i>
                    <span>Полный день</span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    <i class="input-helper"></i>
                    <span>Вахтоый метод</span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    <i class="input-helper"></i>
                    <span>Удалённая работа</span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    <i class="input-helper"></i>
                    <span>Гибкий график</span>
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    <i class="input-helper"></i>
                    <span>Сменный график</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mb-4">
          <button class="btn btn-primary mr-1">Поиск</button>
          <button class="btn btn-success mr-1">Экспорт</button>
          <button class="btn btn-link">Сброс</button>
        </div>
      </div>
    </form>
    <div class="table-wrap">
      <table class="table">
        <thead>
        <tr>
          <th class="table-id">ID</th>
          <th>Ищет работу</th>
          <th>Имя</th>
          <th>Отвество</th>
          <th>Фамилия</th>
          <th>Пол</th>
          <th>Город</th>
          <th  class="table-buttons"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in data">
          <td v-for="label in item">
            {{label}}
          </td>
          <td>
            <div class="btn-icons justify-content-end">
              <button class="btn-ico">
                <i class="fa fa-eye"></i>
              </button>
              <button class="btn-ico">
                <i class="fa fa-pencil"></i>
              </button>
              <button class="btn-ico">
                <i class="fa fa-close"></i>
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <Pagination :currentPage="currentPage"
                :pages="pages"
    />
  </div>
</template>

<script>
  import Pagination from "../../components/Pagination";
  import paginationMixin from '../../mixins/paginationMixin';

  export default {
    name: "AdminResume",
    components: {Pagination},
    data() {
      return {
        data: [
          {
            id: 1,
            job: 'Мерчендайзер',
            name: 'Константин',
            patronymic: 'Васильевич',
            lastName: 'Адрианов',
            gender: 'Мужской',
            city: 'Ярославль'
          },
          {
            id: 2,
            job: 'Мерчендайзер',
            name: 'Константин',
            patronymic: 'Васильевич',
            lastName: 'Адрианов',
            gender: 'Мужской',
            city: 'Ярославль'
          },
          {
            id: 3,
            job: 'Мерчендайзер',
            name: 'Константин',
            patronymic: 'Васильевич',
            lastName: 'Адрианов',
            gender: 'Мужской',
            city: 'Ярославль'
          }
        ],
        totalPages: 4
      }
    },
    mixins: [paginationMixin]
  }
</script>

<style scoped>

</style>