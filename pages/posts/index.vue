<template>
  <div>
    <h1 class="center-text">
      Posts ({{ ((state.page - 1) * perPage) + 1 }} / {{ totalPosts }})
    </h1>
    <div class="post-buttons">
      <ContentButton v-if="canMoveTo(-1)" @click="moveTo(-1)"
        >Newer Posts</ContentButton
      >
      <ContentButton
        v-if="canMoveTo(1)"
        @click="moveTo(1)"
        icon="fas fa-chevron-circle-right"
        icon-flip="true"
      >
        Older Posts
      </ContentButton>
    </div>
    <ContentList :query="query" v-slot="{ list }">
      <div class="post" v-for="post in list" :key="post._path">
        <hr />
        <NuxtLink :to="post._path"
          ><h2>{{ post.title }}</h2></NuxtLink
        >
        <ContentRenderer :value="post" />
      </div>
    </ContentList>
    <hr />
    <div class="post-buttons">
      <ContentButton v-if="canMoveTo(-1)" @click="moveTo(-1)"
        >Newer Posts</ContentButton
      >
      <ContentButton
        v-if="canMoveTo(1)"
        @click="moveTo(1)"
        icon="fas fa-chevron-circle-right"
        icon-flip="true"
      >
        Older Posts
      </ContentButton>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import ContentButton from "../../components/content/content-button.vue";

const perPage = 5;
var currentPage = 1;
const route = useRoute();
const router = useRouter();
const routePage = route.query["page"];

var state = reactive({
  page: 1,
});
var totalPosts = (await queryContent("/posts").find()).length;

if (Number(routePage) == "NaN" || routePage > totalPosts / perPage) {
  router.push("/404");
}

if (routePage != null) {
  currentPage = Number(routePage);
}
state.page = currentPage;

var query = computed(() => {
  return {
    path: "/posts",
    skip: (state.page - 1) * perPage,
    limit: perPage,
    sort: { date: -1 },
  };
});

function canMoveTo(moveTo) {
  var newPage = state.page + moveTo;
  return !(newPage < 1 || newPage > Math.ceil(totalPosts / perPage));
}

function moveTo(moveTo) {
  var newPage = state.page + moveTo;
  if (!canMoveTo(moveTo)) {
    return;
  }
  state.page = Number(newPage);
  router.replace({
    query: {
      page: state.page,
    },
  });
}
</script>

<style lang="scss">
hr {
  border-top: 2px solid $template-color-accent;
  border-radius: 5px;
  margin: 50px 0;
}

.post-buttons {
  display: flex;
  justify-content: center;
  gap: 25px;

  .button {
    margin: 0;
  }
}
</style>
