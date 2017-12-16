<template lang="pug">
.col-sm-12
  todo-insert(@insert="insertTodo")
  .row.radio-options: b-form-radio-group(buttons 
                                        button-variant="outline-primary" 
                                        v-model="filter" 
                                        :options="filterOptions")
  .col-sm-12.todo-list(v-if="todos.length > 0")
    todo-item(v-for="todo in todos" 
              key="todo.id" 
              :todo="todo" 
              @del="deleteTodo" 
              @check="setChecked"
              @togglePrivacy="togglePrivacy")
  .col-sm-12.todo-list(v-else)
    h2#todo-status(v-html="filterOptions.find(ele => ele.value === filter).no")
</template>

<script>
import { Meteor } from 'meteor/meteor'
import TodoItem from "./todo-item.vue";
import TodoInsert from "./todo-insert.vue";
import { use } from 'vue-supply';
import { mapGetters } from 'vuex';

export default {
  mixins: [
    use('TodosSupplier'),
  ],
  computed: {
    ...mapGetters({
      count: 'todos/count',
      todos: 'todos/todos',
    }),
    // filter gets data from $store's state,
    // also change data of state
    filter: {
      get() {
        return this.$store.state.todos.filter;
      },
      set(event) {
        this.$store.state.todos.filter = event;
      }
    },
    filterOptions() {
      return [
        {
          text: "All (" + this.count.all + ")",
          value: "all",
          no: "You have no todos &#x1F62A;"
        },
        {
          text: "Todo (" + this.count.todo + ")",
          value: "todo",
          no: "Yay! No todos left &#x1F60E;"
        },
        {
          text: "Completed (" + this.count.completed + ")",
          value: "completed",
          no: "No todos completed &#x2639;"
        }
      ]
    },
    // we can also get data from supply by using this.$supply

    // todos() {
    //   let allTodos = this.$supply.TodosSupplier.allTodos;
    //   switch (this.filter) {
    //     case "all":
    //       return allTodos;
    //     case "todo":
    //       return allTodos.filter(todo => todo.completed !== true);
    //     case "completed":
    //       return allTodos.filter(todo => todo.completed === true);
    //   }
    // },
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
    },
  }
};
</script>

<style scoped>
.radio-options * {
  margin: 0 auto;
}
.todo-list {
  min-height: 400px;
}
.todo-list #todo-status {
  text-align: center;
  color: grey;
  padding: 200px;
  font-weight: 100;
}
</style>

