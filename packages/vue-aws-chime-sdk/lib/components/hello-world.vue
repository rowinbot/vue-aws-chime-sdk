<template>
  <div>
    <MyOtherComponent />
    <h1>{{ `${hello}: ${msg} (${required})` }}</h1>
    <p>This is a simple Vue component.</p>
  </div>
</template>

<script setup lang="ts">
import MyOtherComponent from "./my-other-component.vue";

const hello = "Hello, World!";

defineOptions({
  name: "HelloWorld",
});

defineProps<{
  msg: string;
  required?: boolean;
}>();
</script>
