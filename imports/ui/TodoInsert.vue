<template lang="pug">
.row
  .input-group.col-sm-12
    input.form-control(@keyup.enter="submit", v-model="text", placeholder="add new task...")
    span.input-group-btn
      button.btn.btn-primary(@click="submit") add
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    submit() {
      this.$emit("insert", this.text);
      this.text = "";
    }
  }
};
</script>