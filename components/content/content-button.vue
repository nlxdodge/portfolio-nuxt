<template>
  <NuxtLink
    v-if="props.href != '#' && internalLink"
    :to="props.href"
    class="button"
  >
    <i v-if="!iconFlip" aria-hidden="true" :class="icon" />
    <p>
      <slot />
    </p>
    <i v-if="iconFlip" aria-hidden="true" :class="icon" />
  </NuxtLink>
  <a
    v-else-if="props.href != '#' && !internalLink"
    class="button"
    :href="props.href"
    :aria-label="props.text"
  >
    <i v-if="!iconFlip" aria-hidden="true" :class="icon" />
    <p>
      <slot />
    </p>
    <i v-if="iconFlip" aria-hidden="true" :class="icon" />
  </a>
  <div v-else class="button">
    <i v-if="!iconFlip" aria-hidden="true" :class="icon" />
    <p>
      <slot />
    </p>
    <i v-if="iconFlip" aria-hidden="true" :class="icon" />
  </div>
</template>

<script setup>
const props = defineProps({
  href: {
    default: "#",
  },
  internalLink: {
    default: false,
  },
  icon: {
    default: "fas fa-chevron-circle-left",
  },
  iconFlip: {
    default: false,
  },
});
</script>

<style lang="scss">
.button {
  display: inline-block;
  background-color: $template-color-accent;
  font-family: $template-header-font;
  color: $template-color;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border-radius: 7px;
  width: 100%;
  padding: 12px 0;
  margin-bottom: 10px;
  text-align: center;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  i {
    font-size: 1.2em;
    vertical-align: text-bottom;
  }

  p {
    margin: 0 10px;
    display: inline;
  }

  &:hover {
    cursor: pointer;
    color: $template-color;
    filter: brightness(0.85);
  }

  @include media(">=tablet") {
    display: inline-flexbox;
    padding: 12px 24px;
    width: auto;

    margin-right: 25px;
  }
}
</style>
