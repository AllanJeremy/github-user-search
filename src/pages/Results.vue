<template>
  <!-- Under normal circumstances, this would be in the layout component -->
  <q-header reveal>
    <q-toolbar class="row bg-white shadow-4">
      <Logo url="/" />
      <q-space></q-space>
      <SearchInput
        class="q-ml-sm"
        dense
        max-width="20rem"
        :default-value="searchText"
        @search="updateSearchText"
      />
      <q-space></q-space>
    </q-toolbar>
  </q-header>

  <q-page class="q-mx-auto q-my-lg q-pa-lg" style="max-width: 80rem">
    <h5 class="text-weight-light q-my-none">
      Search
      <span class="text-weight-bold">{{
        searchText ? `: ${searchText}` : ''
      }}</span>
    </h5>

    <SearchResultList :search-text="searchText" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

//* Components
import Logo from 'src/components/Logo.vue';
import SearchInput from 'src/components/inputs/SearchInput.vue';
import SearchResultList from 'src/components/search/SearchResultList.vue';

export default defineComponent({
  components: { Logo, SearchInput, SearchResultList },
  setup() {
    const $route = useRoute();
    const searchText = ref($route.params?.searchText?.toString());

    const updateSearchText = (newSearchText?: string) => {
      searchText.value = newSearchText || $route.params?.searchText?.toString();
    };

    return { searchText, updateSearchText };
  },
});
</script>

<style scoped></style>
