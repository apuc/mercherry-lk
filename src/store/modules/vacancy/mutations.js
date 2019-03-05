export default {
  'ADD_DATA_VACANCY': (state, obj) => state.data = Object.assign(state.data, obj),
  'CLEAR_DATA_VACANCY': (state) => state.data = {},
  'VACANCY_ERROR': (state, errors) => state.errors = errors
};
