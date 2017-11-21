<template lang="pug">
.row
  h4.col-sm-offset-2.col-sm-6 {{ todo.text }}
  button.btn.btn-sm.btn-danger.col-sm-2(@click="del") delete
</template>

<script>
export default {
  props: {
    todo: {
      type: Object
    }
  },
  methods: {
    del() {
      this.$emit("del", this.todo._id);
    }
  }
};
</script>

<style lang="less">
.row {
  margin-top: 20px;
}
</style>



