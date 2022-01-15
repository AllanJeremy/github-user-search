<template>
  <q-input
    v-model="searchText"
    class="full-width"
    type="search"
    filled
    color="dark"
    placeholder="Search GitHub users"
    aria-placeholder="Search GitHub users"
    :style="{ maxWidth }"
    @keypress.enter="handleSearch"
  >
    <template #prepend>
      <q-icon name="las la-search"></q-icon>
    </template>
    <template v-if="hasBtn" #append>
      <!-- Hardcoded but the assumption is that no one can have a single character name -->
      <q-btn
        flat
        color="dark"
        :disable="searchText.length < 2"
        @click="handleSearch"
        >Search</q-btn
      >
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    defaultValue: {
      type: String,
      default: '',
    },
    hasBtn: {
      type: Boolean,
      default: true,
    },
    maxWidth: {
      type: String,
      default: '35rem',
    },
  },
  emits: ['search'],
  setup(props, { emit }) {
    const searchText = ref(props.defaultValue);

    const $router = useRouter();

    const handleSearch = () => {
      // No point proceeding if there is nothing being searched for
      if (!searchText.value) return;

      emit('search', searchText.value);
      void $router.push(`/results/${searchText.value}`);
    };

    return { searchText, handleSearch };
  },
});
</script>

<style scoped></style>
