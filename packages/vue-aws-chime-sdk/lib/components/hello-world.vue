<template>
  <div>
    <h1>{{ `${hello}: ${msg} (${required})` }}</h1>
    <p>This is a simple Vue component.</p>
  </div>
</template>

<script setup lang="ts">
const hello = "Hello, World!";

defineProps<{
  msg: string;
  required?: boolean;
}>();
</script>
