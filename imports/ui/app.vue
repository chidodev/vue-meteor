<template lang="pug">
body
  include ./includes/header
  router-view
  include ./includes/footer
</template>

<script>

export default {
  name: 'App'
};
</script>

<style scoped>
.container {
  margin-top: 30px;
  height: 80%;
}
footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: right;
  padding: 0.5em 1em;
}
</style>
