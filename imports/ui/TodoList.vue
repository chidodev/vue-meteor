<template lang="pug">
div
  todo-insert(@insert="insertTodo")
  todo-item(v-if="todos.length > 0" ,v-for="todo in todos", :todo="todo", :key="todo.id", @del="deleteTodo")
</template>

<script>
import { Meteor } from "meteor/meteor";
import TodoItem from "./TodoItem.vue";
import TodoInsert from "./TodoInsert.vue";
import { Todos } from "../api/todos.js";

export default {
  created() {
    console.log("client");
    Meteor.subscribe("todos");
    //var todos = Meteor.call("todos.get");
    console.log(Todos.find({}).fetch());
  },
  components: {
    TodoItem,
    TodoInsert
  },
  computed: {
    todos() {
      return Todos.find({});
    }
  },
  methods: {
    insertTodo(text) {
      Meteor.call("todos.insert", text);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>

