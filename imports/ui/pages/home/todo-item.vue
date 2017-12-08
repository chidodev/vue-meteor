<template lang="pug">
.row
  b-form-checkbox.col-sm-8(v-model="todo.completed"
                          :class="{completed: todo.completed}"
                          @change="setChecked($event)")
    span {{todo.text}}
    b-badge.badge-username(v-if="todo.username"
                          variant="secondary") {{todo.username}} 
  .col-sm-4.text-right
    b-button(v-if="me && todo.owner===me" 
            variant="outline-secondary" 
            :pressed.sync="todo.private" 
            @click="togglePrivacy") private
    b-button(variant="danger" 
            @click="del") delete
</template>

<script>
import { mapState } from 'vuex-alt';

export default {
  computed: {
    ...mapState({
      me: state => state.accounts.userId,
    })
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

<style scoped>
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



