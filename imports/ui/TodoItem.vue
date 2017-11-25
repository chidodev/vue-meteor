<template lang="pug">
.row
  b-form-checkbox.col-sm-9(:class="{completed: todo.completed}", v-model="todo.completed", @change="setChecked($event)")
    span {{todo.text}}
  button.btn.btn-sm.btn-secondary.col-sm-1(@click="togglePrivacy") private
  button.btn.btn-sm.btn-danger.col-sm-1(@click="del") delete
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
    },
    setChecked(value) {
      this.$emit("check", this.todo._id, value);
    },
    togglePrivacy() {}
  }
};
</script>

<style lang="less" scoped>
.row {
  margin-left: 10px;
}
input {
  margin-right: 5px;
}
.completed {
  text-decoration: line-through;
}
</style>



