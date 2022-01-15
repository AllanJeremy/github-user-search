<template>
  <p v-if="!searchResultsLoading" class="text-weight-light text-dark">
    {{ searchResultCount?.toLocaleString() }}
    {{ searchResultCount > 1 ? 'results' : 'result' }} found
  </p>

  <q-linear-progress
    v-if="searchResultsLoading"
    class="q-mt-lg"
    indeterminate
    color="dark"
  ></q-linear-progress>

  <template v-else>
    <!-- Search results were found -->
    <template v-if="searchResultList.length">
      <div class="row q-col-gutter-lg">
        <div
          class="col-12 col-sm-6"
          v-for="result in searchResultList"
          :key="result.id"
        >
          <SearchResultCard class="full-width" :search-result="result" />
        </div>
      </div>

      <nav class="q-mt-lg">
        <SearchPagination
          class="justify-center"
          :active-page="activePaginationPage"
          :item-count="searchResultCount"
        />
      </nav>
    </template>

    <!-- No search results found -->
    <template v-else>
      <EmptyContainer>
        <h4 class="q-mt-none q-mb-sm text-weight-bold">No users found</h4>
        <p class="text-weight-light">
          No users matching that search query could be found, try searching
          something else please 😅
        </p>
      </EmptyContainer>
    </template>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

//* Types
import { GithubUserResponse } from 'src/types';

//* Composables
import { useGithub } from 'src/composables';

//* Components
import EmptyContainer from 'src/components/EmptyContainer.vue';
import SearchPagination from './_partials/SearchPagination.vue';
import SearchResultCard from './_partials/SearchResultCard.vue';

export default defineComponent({
  name: 'SearchResultList',
  components: { EmptyContainer, SearchPagination, SearchResultCard },
  props: {
    searchText: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { getGithubUsers } = useGithub();

    const searchResultsLoading = ref(false);
    const searchResultList = ref<GithubUserResponse[]>([]);
    const searchResultCount = ref(0);

    const $route = useRoute();
    const activePaginationPage = ref(1);

    const loadSearchResults = () => {
      searchResultsLoading.value = true;

      const resultsPageToLoad =
        parseInt($route.query?.page?.toString() || '') || 1;

      activePaginationPage.value = resultsPageToLoad;

      getGithubUsers(props.searchText, resultsPageToLoad)
        .then((apiResponse) => {
          searchResultCount.value = apiResponse.total_count;
          searchResultList.value = apiResponse.items;
        })
        .finally(() => {
          searchResultsLoading.value = false;
        });
    };

    watchEffect(() => {
      loadSearchResults();
    });

    return {
      activePaginationPage,
      searchResultCount,
      searchResultList,
      searchResultsLoading,
      loadSearchResults,
    };
  },
});
</script>

<style scoped></style>
