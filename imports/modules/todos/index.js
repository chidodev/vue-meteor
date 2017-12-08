export default {
  namespaced: true,

  supply: {
    use: ['Todos'],
    inject: ({ Todos }) => ({
      getters: {
        'all-todos': () => Todos.todos,
      },
    }),
  },

  getters: {
    'count': (state, getters) => getters['all-todos'].length,
  },
}
