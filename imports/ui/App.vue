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
  text-align: right;
  padding: 1em;
}
</style>
