<template>
  <a class="button" :href="props.url" :aria-label="props.text">
    <i aria-hidden="true" :class="icon"></i>
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
  url: {
    default: "#",
  },
  icon: {
    default: "fas fa-chevron-circle-left",
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

  i {
    font-size: 1.2em;
    vertical-align: text-bottom;
  }

  p {
    margin-left: 10px;
    display: inline;
  }

  &:hover {
    color: $template-color;
    background-color: $template-color-accent-opposing;
  }

  @include media(">=tablet") {
    display: inline-flexbox;
    padding: 12px 24px;
    width: auto;

    margin-right: 25px;
  }
}
</style>
