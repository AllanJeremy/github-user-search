<template>
  <q-page class="row items-center justify-evenly"> </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const searchText = ref('');

    return { searchText };
  },
});
</script>
