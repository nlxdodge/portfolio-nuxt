<template>
  <a class="button" :href="props.link" :aria-label="props.text">
    <i aria-hidden="true" class="fas fa-chevron-circle-left"></i>
    {{ props.text }}
  </a>
</template>

<script setup>
const props = defineProps({
  text: {
    default: "Back",
  },
  link: {
    default: "#",
  },
});
</script>

<style lang="scss">
.button {
  display: inline-block;
  background-color: $template-color-accent;
  font-family: $template-header-font;
  font-size: 1em;
  color: $template-color;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border-radius: 7px;
  width: 100%;
  padding: 12px 0;
  margin-bottom: 10px;

  i {
    font-size: 1.2em;
    vertical-align: text-bottom;
  }

  &:hover {
    color: $template-color;
    background-color: $template-color-accent-opposing;
  }

  @include media(">=tablet") {
    padding: 14px 24px;
    width: auto;
    margin: auto;
  }
}
</style>
