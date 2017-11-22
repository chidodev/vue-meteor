<template lang="pug">
div
  todo-insert(@insert="insertTodo")
  todo-item(v-if="todos.length > 0" ,v-for="todo in todos", :todo="todo", key="todo.id", @del="deleteTodo", @check="setChecked")
  .row
    label.custom-control.custom-checkbox
      input.custom-control-input(type="checkbox", v-model="hideCompleted")
      span.custom-control-indicator
      span.custom-control-description Hide completed Tasks
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoInsert from "./TodoInsert.vue";

export default {
  data() {
    return {
      todos: [],
      hideCompleted: false
    };
  },
  meteor: {
    $subscribe: {
      todos: []
    },
    todos() {
      // TODO: UPDATE todos when hideCompleted updates
      const selector = {};
      if (this.hideCompleted) {
        selector.completed = { $ne: true };
      }
      return Todos.find(selector, { sort: { createAt: -1 } });
    }
  },
  components: {
    TodoItem,
    TodoInsert
  },
  methods: {
    insertTodo(text) {
      Meteor.call("addTodo", text);
    },
    deleteTodo(id) {
      Meteor.call("removeTodo", id);
    },
    setChecked(id, completed) {
      Meteor.call("checkTodo", id, completed);
    }
  }
};
</script>

