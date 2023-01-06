<template>
  <Header />
  <main>
    <NuxtPage />
  </main>
  <Footer />
</template>

<script setup>
import Footer from "./components/footer.vue";
import Header from "./components/header.vue";
import { getRandomColor, setRootStyleVariable } from "/public/js/mixins.js";

setRootStyleVariable("--template-color-accent", getRandomColor());
setRootStyleVariable("--template-color-accent-opposing", getRandomColor());
</script>
