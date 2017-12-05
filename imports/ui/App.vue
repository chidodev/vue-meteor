<template lang="pug">
body
  include ./includes/header
  .container
    .panel#app
      .panel-heading
        h1.panel-title.text-center {{title}}
      .panel-body
        .row: .col-sm-2(v-blaze="'loginButtons'")
        todo-list
  include ./includes/footer
</template>

<script>
import TodoList from "./todo-list.vue";

export default {
  components: { TodoList },
  data() {
    return {
      title: "Meteor Vue Todo App"
    };
  }
};
</script>

<style scoped>
.container {
  margin-top: 30px;
}
footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: right;
  padding: 1em;
}
</style>
