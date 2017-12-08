import base from './base'
import Todos from '/imports/api/todos/shared/collections/todos.js'

export default {
  extends: base,

  data() {
    return {
      todos: [],
    }
  },

  meteor: {
    $subscribe: {
      'todos': [],
    },

    todos() {
      return Todos.find({}, { sort: { createAt: -1 } })
    },
  },
}
