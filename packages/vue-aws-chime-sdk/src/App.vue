<template>
  <HelloWorld msg="Vite + Vue" />
  <MyOtherComponent />
</template>

<script setup lang="ts">
import HelloWorld from "@lib/components/hello-world.vue";
import MyOtherComponent from "@lib/components/my-other-component.vue";
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
