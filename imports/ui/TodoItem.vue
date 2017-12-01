<template lang="pug">
.row
  b-form-checkbox.col-sm-8(:class="{completed: todo.completed}", v-model="todo.completed", @change="setChecked($event)")
    span {{todo.text}}
    b-badge.badge-username(v-if="todo.username", variant="secondary") {{todo.username}} 
  .col-sm-4.text-right
    b-button(v-if="mex && todo.username===mex" :pressed.sync="todo.private" variant="outline-secondary" @click="togglePrivacy") private
    b-button(variant="danger" @click="del") delete
</template>

<script>
export default {
  data() {
    return {
      me: ""
    };
  },
  computed: {
    mex() {
      console.log("me: ", this.me);
      return this.me;
    }
  },
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
    togglePrivacy() {
      this.$emit("togglePrivacy", this.todo._id, this.todo.private || false);
    }
  }
};
</script>

<style lang="less" scoped>
label {
  margin-right: 0;
}
.badge-username {
  position: absolute;
  margin-top: 10px;
  right: -50px;
}
.completed {
  text-decoration: line-through;
}
</style>



