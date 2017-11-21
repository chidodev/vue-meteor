<template lang="pug">
.panel#app
  .panel-heading
    h1.panel-title.text-center {{title}}
  .panel-body
    div.col-sm-offset-9(v-blaze="'loginButtons'")
    todo-list
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

</style>
