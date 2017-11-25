<template lang="pug">
div
  todo-insert(@insert="insertTodo")
  todo-item(v-if="todos.length > 0" ,v-for="todo in todos", :todo="todo", key="todo.id", @del="deleteTodo", @check="setChecked")
  .row
    label.custom-control.custom-radio
      input.custom-control-input(type="radio", name="all", value="all", v-model="filter")
      span.custom-control-description(for="all") All
    label.custom-control.custom-radio
      input.custom-control-input(type="radio", name="todo", value="todo", v-model="filter")
      span.custom-control-description(for="todo") Todo
    label.custom-control.custom-radio
      input.custom-control-input(type="radio", name="completed", value="completed", v-model="filter")
      span.custom-control-description(for="completed") Completed
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoInsert from "./TodoInsert.vue";

export default {
  data() {
    return {
      filter: "all"
    };
  },
  meteor: {
    $subscribe: {
      todos: []
    },
    todos: {
      params() {
        return { filter: this.filter };
      },
      deep: true,
      update({ filter }) {
        let selector = {};
        if (filter === "todo") {
          selector = { completed: { $ne: true } };
        }
        if (filter === "completed") {
          selector = { completed: true };
        }
        return Todos.find(selector, { sort: { createAt: -1 } });
      }
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

