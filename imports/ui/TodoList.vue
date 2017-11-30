<template lang="pug">
.col-sm-12
  todo-insert(@insert="insertTodo")
  .row.radio-options: b-form-radio-group(buttons button-variant="outline-primary" v-model="filter" :options="filterOptions")
  .col-sm-12(v-if="todos.length > 0")
    todo-item(v-for="todo in todos" :todo="todo" key="todo.id" @del="deleteTodo" @check="setChecked", @togglePrivacy="togglePrivacy")
  .col-sm-12(v-else): h2#todo-status(v-html="filterOptions.find(ele => ele.value === filter).no")
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoInsert from "./TodoInsert.vue";
import { Todos } from "../../lib/collections.js";

export default {
  data() {
    return {
      filter: "all",
      filterOptions: [
        {
          text: "All",
          value: "all",
          no: "You have no todos &#x1F62A;"
        },
        {
          text: "Todo",
          value: "todo",
          no: "Yay! No todos left &#x1F60E;"
        },
        {
          text: "Completed",
          value: "completed",
          no: "No todos completed &#x2639;"
        }
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

<style scoped>
.radio-options * {
  margin: 0 auto;
}
#todo-status {
  text-align: center;
  color: grey;
  margin-top: 200px;
  font-weight: 100;
}
</style>

