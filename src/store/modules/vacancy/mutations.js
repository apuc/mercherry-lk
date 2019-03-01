export default {
  'ADD_DATA_VACANCY': (state, obj) => state.data = Object.assign(state.data, obj),
  'VACANCY_ERROR': (state, errors) => state.errors = errors
};
