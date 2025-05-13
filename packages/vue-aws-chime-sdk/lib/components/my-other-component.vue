<template>
  <div>
    <h1>{{ hello }}</h1>
    <p>This is NOT a simple Vue component.</p>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "MyOtherComponent",
});

const hello = "OTHER!";
</script>
