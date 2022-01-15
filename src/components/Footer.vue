<template>
  <q-footer class="frost-light q-pa-md">
    <div class="row q-col-gutter-md text-dark">
      <div class="col-12 col-sm-6 col-md-4 text-center">
        Built by
        <a
          class="text-weight-bold"
          href="https://allanjeremy.com"
          target="_blank"
        >
          Allan Jeremy
        </a>
        using
        <a
          class="text-weight-bold"
          href="https://v3.vuejs.org/"
          target="_blank"
        >
          Vue 3.x </a
        >,
        <a class="text-weight-bold" href="https://quasar.dev" target="_blank">
          Quasar
        </a>
        &
        <a
          class="text-weight-bold"
          href="https://www.typescriptlang.org/"
          target="_blank"
        >
          Typescript
        </a>
      </div>
      <div class="col-6 col-md-4 text-center">
        <q-icon class="q-mr-xs" name="lab la-github-alt" size="sm"></q-icon>
        <a
          class="text-weight-bold"
          href="https://github.com/AllanJeremy"
          target="_blank"
        >
          My GitHub
        </a>
      </div>
      <div class="col-6 col-md-4 text-center">
        <q-icon class="q-mr-xs" name="las la-code" size="sm"></q-icon>
        <a
          class="text-weight-bold"
          href="https://github.com/AllanJeremy/github-user-search"
          target="_blank"
        >
          This project's code
        </a>
      </div>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>
