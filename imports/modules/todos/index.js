export default {
  namespaced: true,

  supply: {
    use: ['TodosSupplier'],
    inject: ({ TodosSupplier }) => ({
      getters: {
        'all-todos': () => TodosSupplier.allTodos,
      },
    }),
  },

  state: {
    filter: 'todo',
  },

  mutations: {
    changeState(state, newState) {
      state.filter = newState;
    }
  },

  getters: {
    'count': (state, getters) => getters['todos'].length,
    'todos': (state, getters) => {
      switch (state.filter) {
        case 'completed':
          return getters['all-todos'].filter(todo => todo.completed === true);
        case 'todo':
          return getters['all-todos'].filter(todo => todo.completed !== true);
      }
      return getters['all-todos'];
    },
  },
}
