<template lang="pug">
.col-sm-12
  todo-insert(@insert="insertTodo")
  .row
    b-form-radio-group.offset-sm-4.col-sm-4(buttons, button-variant="outline-primary", v-model="filter", :options="filterOptions")
  todo-item(v-if="todos.length > 0" ,v-for="todo in todos", :todo="todo", key="todo.id", @del="deleteTodo", @check="setChecked", @togglePrivacy="togglePrivacy")
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoInsert from "./TodoInsert.vue";

export default {
  data() {
    return {
      filter: "all",
      filterOptions: [
        { text: "All", value: "all" },
        { text: "Todo", value: "todo" },
        { text: "Completed", value: "completed" }
      ]
    };
  },
  meteor: {
    $subscribe: {
      todos: []
    },
    todos: {
      // todos will update when params value change
      params() {
        return { filter: this.filter };
      },
      deep: true,
      // update todos when receive change events
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
    },
    togglePrivacy(id, private) {
      Meteor.call("togglePrivacy", id, private);
    }
  }
};
</script>

