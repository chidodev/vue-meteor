import Todos from '/imports/api/todos/shared/collections/todos';
import base from './base';

// subscribe meteor's publications into supply
export default {
  extends: base,

  data() {
    return {
      allTodos: [],
    };
  },

  meteor: {
    $subscribe: {
      todos: [],
    },

    allTodos() {
      console.log('alltodos: ', Todos.find({}, { sort: { createAt: -1 } }).fetch())
      return Todos.find({}, { sort: { createAt: -1 } });
    },
  },
};
