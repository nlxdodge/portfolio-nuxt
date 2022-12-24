<template>
  <div>
    <h1 class="center-text">Posts (1/15)</h1>
    <ContentList :query="query" v-slot="{ list }">
      <div class="post" v-for="post in list" :key="post._path">
        <hr />
        <h2>{{ post.title }}</h2>
        <ContentRenderer :value="post" />
      </div>
    </ContentList>
  </div>
</template>

<script setup>
const query = {
  path: "/posts",
  limit: 5,
  sort: { date: -1 },
};
</script>

<style lang="scss">
hr {
  border-top: 2px solid $template-color-accent;
  border-radius: 5px;
}
</style>
