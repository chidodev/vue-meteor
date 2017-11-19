<template lang="pug">
div#app
  h1 {{msg}}
  todo-list
</template>

<script>
import TodoList from "./TodoList.vue";

export default {
  components: { TodoList },
  data() {
    return {
      msg: "Hello world from Vue.js!"
    };
  }
};
</script>

<style lang="less" scoped>

</style>
