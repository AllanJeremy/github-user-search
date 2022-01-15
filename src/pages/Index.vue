<template>
  <q-page
    class="window-height full-width flex column items-center justify-center"
  >
    <BackgroundImage
      src="/backgrounds/octocat-14.png"
      overlay
      overlay-opacity="0.65"
    >
      <section class="z-top text-center q-mb-lg">
        <h4 class="text-weight-bold text-white q-my-none">
          Find GitHub users with ease
        </h4>
      </section>

      <SearchInput
        class="frost-light"
        autofocus
        max-width="40rem"
        square
        input-style="font-weight:bold"
      />

      <section class="z-top text-center q-mt-lg">
        <p class="text-weight-light text-white">
          Hint: You can press enter to search
        </p>
      </section>
    </BackgroundImage>
    <!-- Just got an idea!! 
    Add the most popular accounts at the bottom
   -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//* Components
import BackgroundImage from 'src/components/BackgroundImage.vue';
import SearchInput from 'src/components/inputs/SearchInput.vue';

export default defineComponent({
  name: 'HomePage',
  components: { BackgroundImage, SearchInput },
  setup() {
    return {};
  },
});
</script>
