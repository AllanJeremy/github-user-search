<template>
  <div>
    <router-link :to="url"><img src="/logo.png" height="50" /></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Logo',
  props: {
    url: { type: String, default: '/' },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
