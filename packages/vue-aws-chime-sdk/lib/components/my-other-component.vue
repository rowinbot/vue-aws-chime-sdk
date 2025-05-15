<template>
  <div>
    <h1 class="container">{{ hello }}</h1>
    <p>This is NOT a simple Vue component.</p>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "MyOtherComponent",
});

const hello = "OTHER!";
</script>

<style lang="css" scoped module>
.container {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 30px;
  text-align: center;
  padding: 30px;
  margin-top: 20px;
}
</style>
