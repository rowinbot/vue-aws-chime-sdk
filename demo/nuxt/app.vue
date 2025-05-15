<template>
  <div>
    <HelloWorld msg="" required />
    <MyOtherComponent />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@rowinbot/vue-aws-chime-sdk/components/hello-world.vue";
import MyOtherComponent from "@rowinbot/vue-aws-chime-sdk/components/my-other-component.vue";
</script>
