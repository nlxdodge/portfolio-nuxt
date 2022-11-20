<template>
  <header>
    <nav>
      <a class="icon" href="/" aria-label="Home"
        ><i aria-hidden="true" class="fas fa-code"></i
      ></a>
      <a
        class="{{ $page->selected('works') }}"
        href="{{ $page->baseUrl }}/works"
        >works</a
      >
      <a
        class="{{ $page->selected('posts') }}"
        href="{{ $page->baseUrl }}/posts"
        >posts</a
      >
      <div class="icon toggle-colors">
        <i aria-hidden="true" class="fas fa-adjust"></i>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  nav {
    margin: 0 auto 25px auto;
    max-width: 720px;
    display: flex;
    justify-content: space-evenly;

    // @include media(">tablet") {
    //   margin-bottom: 75px;
    // }

    a,
    div {
      color: $template-color-opposing;
      padding: 6px 9px;
      font-size: 1.25em;
      font-family: $template-header-font;
      text-decoration: none;
      border-bottom: 5px solid transparent;
      transition: all 0.2s ease-in-out;

      // @include media(">=tablet") {
      //   padding: 6px 12px;
      //   font-size: 1.75em;
      // }

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
