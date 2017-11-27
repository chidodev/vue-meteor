<template lang="pug">
body
  include ../includes/header
  .container
    .panel#app
      .panel-heading
        h1.panel-title.text-center {{title}}
      .panel-body
        .row: .col-sm-2(v-blaze="'loginButtons'")
        todo-list
  include ../includes/footer
</template>

<script>
import TodoList from "./TodoList.vue";

export default {
  components: { TodoList },
  data() {
    return {
      title: "Meteor Vue Todo App"
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  margin-top: 30px;
}
</style>
