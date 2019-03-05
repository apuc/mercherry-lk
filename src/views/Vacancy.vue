<template>
  <div>
    <TableDetail :name="'vacancy'"
                 :dataNames="dataNames"
    />
  </div>
</template>

<script>
  import TableDetail from "../components/TableDetail";
  export default {
    name: "Vacancy",
    components: {TableDetail},
    data() {
      return {
        dataNames: {
          id: 'ID',
          project_id: 'Проект',
          label: 'Название вакансии',
          status: 'Статус',
          interviewing: 'Проводит собеседование',
          interviewing_data: 'Данные проводящего собесеодование',
          interviewing_repeat: 'Повторное собеседование',
          interviewing_repeat_data: 'Данные повторно проводящего собесеодование',
          product_type: 'Тип продукта',
          employment: 'Занятость',
          type: 'Тип вакансии',
          point_count: 'Количество точек',
          point_count_day: 'Количество точек в день',
          interview_training: 'Обучение перед собеседованием',
          internship_training: 'Обучение перед стажировкой',
          duration_internship: 'Длительность стажировки (дней)',
          city: 'Город',
          district: 'Район',
          metro: 'Метро',
          network: 'Сеть',
          address: 'Адрес магазина',
          schedule: 'График работы',
          total_salary: 'Заработная плата',
          salary: 'Оклад',
          prize: 'Премия',
          weekend: 'Выходные',
          m_book: 'Медицинская книжка',
          mobile: 'КПК (мобильный телефон)',
          mobile_req: 'КПК требования',
          experience: 'Опыт работы',
          experience_ext: 'Опыт работы (в месяцах)',
          auto: 'Наличие автомобиля',
          audio_record: 'Аудиозапись',
          description: 'Описание вакансии',
          notify_freq: 'Частота оповещений',
          internship_coord: 'Кто координирует выход на стажировку?',
          internship_coord_data: 'Данные координатора',
          internship_coord_comment: 'Комментарий координатора для выхода на стажировку',
          interview_video: 'Видео перед собеседованием',
          interview_presentation: 'Презентация перед собеседованием',
          interview_text: 'Описание перед собеседованием',
          internship_video: 'Видео перед стажировкой',
          internship_presentation: 'Презентация перед стажировкой',
          internship_text: 'Описание перед стажировкой',
          fields: 'Доп. поля',
          questions: 'Вопросы к анкете'
        }
      }
    }
  }
</script>

<style scoped>

</style>