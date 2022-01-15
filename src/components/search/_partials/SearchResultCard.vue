<template>
  <q-card
    class="card--search-result cursor-pointer"
    v-ripple
    @click="handleCardClicked"
  >
    <q-card-section class="full-height" horizontal>
      <q-img class="col-4" :src="searchResult.avatar_url" />

      <div class="col q-px-md q-py-sm">
        <div class="row">
          <div class="col">
            <h5 class="q-my-none text-weight-bold">{{ githubUser?.name }}</h5>
            <p class="text-weight-light q-mb-md">
              <a
                :href="getGithubProfileUrl(searchResult.login)"
                target="_blank"
              >
                @{{ searchResult.login }}
              </a>
            </p>
          </div>
          <q-space></q-space>
        </div>

        <!-- Follower related -->
        <div class="row q-mb-xs q-col-gutter-x-md">
          <!-- Followers -->
          <div class="col-12 col-sm-auto">
            <q-icon
              class="q-mr-xs"
              name="las la-user-friends"
              size="1rem"
            ></q-icon>
            <a :href="getGithubFollowersUrl(searchResult.login)" target="_blank"
              >{{ githubUser?.followers?.toLocaleString() }} followers
            </a>
          </div>
          <!-- Following -->
          <div class="col-12 col-sm-auto">
            <q-icon
              class="q-mr-xs"
              name="las la-user-friends"
              size="1rem"
            ></q-icon>
            <a :href="getGithubFollowingUrl(searchResult.login)" target="_blank"
              >{{ githubUser?.following?.toLocaleString() }} following
            </a>
          </div>
        </div>

        <!-- Repository related -->
        <div class="row q-mb-md q-col-gutter-x-md q-col-gutter-y-xs">
          <!-- Repositories -->
          <div class="col-12 col-sm-auto">
            <q-icon
              class="q-mr-xs"
              name="las la-code-branch"
              size="1rem"
            ></q-icon>
            <a
              :href="getGithubRepositoriesUrl(searchResult.login)"
              target="_blank"
              >{{ githubUser?.public_repos?.toLocaleString() }} repositories
            </a>
          </div>
          <!-- Gists -->
          <div class="col-12 col-sm-auto">
            <q-icon
              class="q-mr-xs"
              name="las la-code-branch"
              size="1rem"
            ></q-icon>
            <a :href="getGithubGistsUrl(searchResult.login)"
              >{{ githubUser?.public_gists?.toLocaleString() }} gists
            </a>
          </div>

          <!-- Stars -->
          <div class="col-12">
            <q-icon
              class="q-mr-xs text-warning"
              name="las la-star"
              size="1rem"
            ></q-icon>
            <a :href="getGithubStarsUrl"> View starred projects </a>
            <q-icon class="text-dark" name="las la-question-circle" size="sm">
              <q-tooltip
                >Couldn't get the number of stars from a single API request & an
                additional request just to get stars felt wasteful</q-tooltip
              >
            </q-icon>
          </div>
        </div>

        <!-- Bio -->
        <article>{{ githubUser?.bio }}</article>

        <!-- Links (Twitter, website, email) -->
        <div class="q-mt-sm">
          <q-btn-group unelevated>
            <q-btn
              v-if="githubUser?.blog"
              icon="las la-globe"
              color="dark"
              flat
              :href="githubUser?.blog"
              target="_blank"
            >
              <q-tooltip>Website</q-tooltip>
            </q-btn>

            <!-- !Potentially don't hardcode twitter url here incase twitter changes it -->
            <q-btn
              v-if="githubUser?.twitter_username"
              icon="lab la-twitter"
              color="primary"
              flat
              :href="`https://twitter.com/${githubUser?.twitter_username}`"
              target="_blank"
            >
              <q-tooltip>Twitter</q-tooltip>
            </q-btn>
            <q-btn
              v-if="githubUser?.email"
              icon="las la-envelope"
              color="dark"
              flat
              :href="`mailto:${githubUser?.email}`"
            >
              <q-tooltip>Email</q-tooltip>
            </q-btn>
          </q-btn-group>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

//* Types
import { GithubUserResponse, GithubUserDetailResponse } from 'src/types';

//* Composables
import { useGithub } from 'src/composables';

export default defineComponent({
  props: {
    searchResult: {
      type: Object as () => GithubUserResponse,
      required: true,
    },
  },
  setup(props) {
    const githubUserLoading = ref(true);
    const githubUser = ref<GithubUserDetailResponse>();

    const {
      getGithubUserDetails,
      getGithubProfileUrl,
      getGithubFollowersUrl,
      getGithubFollowingUrl,
      getGithubGistsUrl,
      getGithubRepositoriesUrl,
      getGithubStarsUrl,
    } = useGithub(props.searchResult.login);

    const loadUserDetails = async () => {
      githubUserLoading.value = true;

      githubUser.value = await getGithubUserDetails(props.searchResult.login);

      githubUserLoading.value = false;
    };

    watchEffect(() => {
      void loadUserDetails();
    });

    const handleCardClicked = () => {
      window.location.href = getGithubProfileUrl();
    };

    return {
      githubUserLoading,
      githubUser,

      handleCardClicked,
      //* GitHub URL related
      getGithubProfileUrl,
      getGithubFollowersUrl,
      getGithubFollowingUrl,
      getGithubGistsUrl,
      getGithubRepositoriesUrl,
      getGithubStarsUrl,
    };
  },
});
</script>

<style lang="scss" scoped>
.card--search-result {
  height: 16rem;
}

a:not(.q-btn) {
  // This 👇🏾 comes from quasar-variables
  color: $dark;
  text-decoration: none;

  &:hover {
    $color: $primary;
    text-decoration: underline;
    transition: 0.5s;
  }
}
</style>
