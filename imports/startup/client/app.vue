<template lang="pug">
body
  sheader
  router-view
  sfooter
</template>

<script>
import sheader from '/imports/ui/includes/header';
import sfooter from '/imports/ui/includes/footer';

export default {
  name: 'App',
  components: {
    sheader,
    sfooter,
  }
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
