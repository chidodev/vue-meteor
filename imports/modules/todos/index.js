export default {
  namespaced: true,

  supply: {
    use: ['TodosSupplier'],
    inject: ({ TodosSupplier }) => ({
      getters: {
        'all-todos': () => TodosSupplier.allTodos,
        //'completed-todos': () => TodosSupplier.allTodos.filter(todo => todo.completed = false),
      },
    }),
  },

  getters: {
    'count': (state, getters) => getters['all-todos'].length,
  },
}
