<template>
  <main>
    <Head>
      <Title>404</Title>
      <Meta name="description" content="Page has not been found." />
    </Head>
    <div class="error center-text">
      <h1>Page has not been found</h1>
      <p>But have a quote instead:</p>
      <p class="error-quote italic">{{ errorText }}</p>
      <div class="center-text margin-top-50">
        <LinkButton href="/" icon="fas fa-chevron-circle-left">
          Homepage
        </LinkButton>
      </div>
    </div>
  </main>
</template>

<script setup>
import LinkButton from "../components/content/content-button.vue";
import { randomFromArray } from "/public/js/mixins.js";

const quotes = [
  '"You\'ve got to have a sense of humor to keep your sanity." - Lance Bass',
  '"Stand on the shoulders of giants." - Bernard of Chartres',
  '"Dream small or don\'t dream at all" - Lightning McQueen',
  '"All models are wrong, some are useful." - George Box',
  '"Never forget you are someone\'s reason to smile, because you are a joke." - Rimuru Tempest',
  '"Planning for failure is the worst type of planning" - Rick Sanchez',
  '"Words are about communicating" - Linus Sebastian',
  '"How can you move forward if you keep regretting the past?" - Edward Elric ',
  '"The worst battle is between what you know, and what you feel" - Voilet Evergarden',
  '"I know we said goodbye, but I didn\'t know. It was forever." - Voilet Evergarden',
  "\"If you always do what you've always done, you'll always get what you've always got.\" - Henry Ford",
];

var errorText = randomFromArray(quotes);
</script>

<style lang="scss">
.error-quote {
  margin-top: 50px;
  font-size: 2rem;
}
</style>
