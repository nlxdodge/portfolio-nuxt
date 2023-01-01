<template>
  <header>
    <nav>
      <NuxtLink class="icon" to="/" aria-label="Home">
        <i aria-hidden="true" class="fas fa-code" />
      </NuxtLink>
      <NuxtLink :class="selected('/works')" to="/works">works</NuxtLink>
      <NuxtLink :class="selected('/posts')" to="/posts">posts</NuxtLink>
      <div @click="toggle()" class="icon toggle-colors">
        <i aria-hidden="true" class="fas fa-adjust" />
      </div>
    </nav>
  </header>
</template>

<script setup>
const route = useRoute();

setTheme(localStorage.getItem("theme"));

function selected(basePath) {
  return route.path == basePath ? "selected" : "";
}

function toggle() {
  if (localStorage.getItem("theme") === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function setTheme(theme) {
  if (theme == "light") {
    localStorage.setItem("theme", "light");
    document.body.classList.add("light");
  } else {
    localStorage.setItem("theme", "dark");
    document.body.classList.remove("light");
  }
}
</script>

<style lang="scss">
header {
  nav {
    margin: 0 auto 25px auto;
    max-width: 720px;
    display: flex;
    justify-content: space-evenly;

    @include media(">tablet") {
      margin-bottom: 75px;
    }

    a,
    div {
      color: $template-color-opposing;
      padding: 6px 9px;
      font-size: 2rem;
      font-family: $template-header-font;
      text-decoration: none;
      border-bottom: 5px solid transparent;
      transition: all 0.2s ease-in-out;

      @include media(">=tablet") {
        padding: 6px 12px;
        font-size: 2.5rem;
      }

      &.selected {
        border-bottom: 5px solid $template-color-opposing;
      }

      &:hover {
        cursor: pointer;
        color: $template-color-accent;
      }

      &:hover:not(.icon) {
        border-bottom: 5px solid $template-color-accent;
      }
    }
  }
}
</style>
