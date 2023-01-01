<template>
  <ContentDoc v-slot="{ doc }">
    <h1>{{ doc.title }}</h1>
    <ContentRenderer :value="doc" />
  </ContentDoc>
  <div class="flex-center">
    <ContentButton href="/posts" internal-link="true">Read More Posts</ContentButton>
  </div>
</template>

<script setup>
import ContentButton from "../../components/content/content-button.vue";
</script>

<style lang="scss">
div a.button {
  margin-top: 50px;
}
</style>
