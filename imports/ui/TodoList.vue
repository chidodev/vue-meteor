<template lang="pug">
todo-insert(@insert="insertTodo")
todo-item(v-for="todo in todos", :todo="todo", :key="todo.id", @delete="deleteTodo")
</template>

<script>
import TodoItem from "./TodoItem";
import TodoInsert from "./TodoInsert";

export default {
  components: {
    TodoItem,
    TodoInsert
  },
  data() {
    return {
      todos: [
        {
          id: "2",
          text: "hello2"
        },
        {
          id: "1",
          text: "hello"
        }
      ]
    };
  },
  methods: {
    insertTodo(text) {
      this.todos.unshift({
        id: this.todos.length + 1,
        text: text
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>

