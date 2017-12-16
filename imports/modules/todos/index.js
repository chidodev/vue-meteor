export default {
  namespaced: true,

  supply: {
    use: ['TodosSupplier'],
    inject: ({ TodosSupplier }) => ({
      // has to put all-todos inside the injection to access TodosSupplier
      getters: {
        'all-todos': () => TodosSupplier.allTodos,
      },
    }),
  },

  state: {
    filter: 'todo',
  },

  getters: {
    //'count': (state, getters) => getters['todos'].length,
    'count': (state, getters) => {
      return {
        all: getters['all-todos'].length,
        todo: getters['all-todos'].filter(todo => todo.completed !== true).length,
        completed: getters['all-todos'].filter(todo => todo.completed === true).length,
      }
    },

    // todos based on the chosen status of users
    'todos': (state, getters) => {
      switch (state.filter) {
        case 'completed':
          return getters['all-todos'].filter(todo => todo.completed === true);
        case 'todo':
          return getters['all-todos'].filter(todo => todo.completed !== true);
      }
      // otherwise returns all todos
      return getters['all-todos'];
    },
  },
}
