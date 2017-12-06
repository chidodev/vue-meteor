<template lang="pug">
.row
  .input-group
    input.form-control(v-model="text"
                      placeholder="add a new task..."
                      @keyup.enter="submit")
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
