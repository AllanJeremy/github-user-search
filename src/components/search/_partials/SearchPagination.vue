<template>
  <q-pagination
    v-if="numOfPages > 1"
    v-model="currentPage"
    :max="numOfPages"
    :max-pages="10"
    :to-fn="generatePageLink"
  />
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect } from 'vue';

export default defineComponent({
  name: 'SearchPagination',
  props: {
    activePage: {
      type: Number,
      default: 1,
    },
    itemCount: {
      type: Number,
      default: 1,
    },
    maxPerPage: {
      type: Number,
      default: 10,
    },
  },
  setup(props) {
    const currentPage = ref(1);

    const numOfPages = computed(() => {
      //? Only the first 1000 records are returned by github
      const itemCount = props.itemCount <= 1000 ? props.itemCount : 1000;

      return Math.ceil(itemCount / props.maxPerPage);
    });

    const generatePageLink = (currentPage: number) => {
      return `?page=${currentPage}`;
    };

    watchEffect(() => {
      currentPage.value = props.activePage;
    });

    return { currentPage, numOfPages, generatePageLink };
  },
});
</script>

<style scoped></style>
