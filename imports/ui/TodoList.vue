<template lang="pug">
div
  todo-insert(@insert="insertTodo")
  todo-item(v-if="todos.length > 0" ,v-for="todo in todos", :todo="todo", key="todo.id", @del="deleteTodo")
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoInsert from "./TodoInsert.vue";
const test = {
  meteor: {
    subscribe: {
      todos: []
    },
    todos() {
      return Todos.find({});
    }
  }
};
export default {
  //mixins: [test],
  created() {
    console.log("client");
    Meteor.subscribe("todos");
    //var todos = Meteor.call("todos.get");
    console.log(Todos.find({}).fetch());
  },
  data() {
    return {
      todos: []
    };
  },
  meteor: {
    todos() {
      return Todos.find({}, { sort: { createAt: -1 } });
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
    }
  }
};
</script>

