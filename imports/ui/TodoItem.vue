<template lang="pug">
.row
  h4.col-sm-offset-2.col-sm-6 {{ todo.text }}
  button.btn.btn-sm.btn-danger.col-sm-2(@click="delete") delete
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    delete() {
      this.$emit("delete", this.todo.id);
    }
  }
};
</script>

<style lang="less">
.row {
  margin-top: 20px;
}
</style>



