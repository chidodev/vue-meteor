<template lang="pug">
.col-sm-12
  todo-insert(@insert="insertTodo")
  .row.radio-options: b-form-radio-group(buttons button-variant="outline-primary" v-model="filter" :options="filterOptions")
  .col-sm-12(v-if="todos.length > 0")
    todo-item(v-for="todo in todos" :todo="todo" key="todo.id" @del="deleteTodo" @check="setChecked", @togglePrivacy="togglePrivacy")
  .col-sm-12(v-else): h2#todo-status(v-html="filterOptions.find(ele => ele.value === filter).no")
</template>

<script>
import { Meteor } from 'meteor/meteor'
import TodoItem from "./todo-item.vue";
import TodoInsert from "./todo-insert.vue";
import { Todos } from "../api/todos/todos.js";

export default {
  // created() {
  //   let subHandle = this.$subscribe('todos');
  //   Meteor.autorun(() => {
  //     this.ready = subHandle.ready()
  //   })
  // },
  data() {
    return {
      // ready: null,
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
      "todos": []
    },
    todos: {
      params() {
        return { selector: this.selector }
      },
      deep: true,
      update({ selector }) {
        return Todos.find(selector, { sort: { createAt: - 1 } })
      }
    }
  },
  computed: {
    selector() {
      switch (this.filter) {
        case "all":
          return {};
        case "todo":
          return { completed: { $ne: true } };
        case "completed":
          return { completed: true };
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

