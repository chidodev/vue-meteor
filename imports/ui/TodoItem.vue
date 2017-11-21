<template lang="pug">
.row
  label.col-sm-offset-2.col-sm-6.custom-control.custom-checkbox(:class="{completed: todo.completed}")
    input.custom-control-input(type="checkbox", @change="setChecked($event)")
    span.custom-control-indicator
    span.custom-control-description {{ todo.text }}
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
    setChecked(event) {
      this.$emit("check", this.todo._id, event.target.checked);
    },
    togglePrivacy() {}
  }
};
</script>

<style lang="less" scoped>
.row {
  margin-top: 20px;
}
input {
  margin-right: 5px;
}
label.completed {
  text-decoration: line-through;
}
</style>



