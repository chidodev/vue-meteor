export default {
  namespaced: true,

  supply: {
    use: ['TodosSupplier'],
    inject: ({ TodosSupplier }) => ({
      getters: {
        'all-todos': () => {
          console.log('todo: ', TodosSupplier);
          return TodosSupplier.allTodos;
        },
      },
    }),
  },

  getters: {
    'count': (state, getters) => getters['all-todos'].length,
  },
}
