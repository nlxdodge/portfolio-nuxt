<template>
  <footer>
    <div class="center-text">
      <p class="header">You can find me on these platforms:</p>
      <div class="social-media">
        <a
          href="https://github.com/nlxdodge"
          target="_blank"
          aria-label="Github link"
        >
          <i aria-hidden="true" class="fab fa-github-square" />
        </a>
        <a
          href="https://www.linkedin.com/in/gerbenveenhof/"
          target="_blank"
          aria-label="Linkedin link"
        >
          <i aria-hidden="true" class="fab fa-linkedin" />
        </a>
        <a
          href="https://twitter.com/gerbenveenhof"
          target="_blank"
          aria-label="Twitter link"
        >
          <i aria-hidden="true" class="fab fa-twitter-square" />
        </a>
      </div>
      <div class="flex-box">
        <div>
          <i
            aria-hidden="true"
            aria-label="Copyright"
            class="fas fa-copyright accent"
          />
          Gerben Veenhof
        </div>
        <div>
          <i aria-hidden="true" class="accent fas fa-slash" />
          <span class="split-span">{{ currentYear }}</span>
          <i aria-hidden="true" class="accent fas fa-slash" />
        </div>
        <div>
          Made with <i aria-hidden="true" class="fas fa-heart accent" /> in
          <a class="nuxt-link" href="https://nuxt.com" target="_blank">Nuxt</a>
        </div>
      </div>
      <div id="wcb" class="carbonbadge wcb-d" />
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style lang="scss">
footer {
  margin-top: 50px;

  .header {
    font-size: 20px;
  }

  .nuxt-link {
    font-family: $template-header-font;
    svg {
      font-size: 1.5rem;
      vertical-align: middle;
    }
  }

  .social-media {
    display: flex;
    justify-content: center;
    padding: 20px 0;

    a {
      i {
        font-size: 4rem;
        color: $template-color-accent;
        margin: 0 20px;
        transition: all 0.2s ease-in-out;

        @include media(">tablet") {
          padding: 20px;
        }

        &:hover {
          transform: scale(1.15, 1.15);
          filter: brightness(0.85);
        }
      }
    }
  }

  .flex-box {
    margin-top: 15px;

    .split-span {
      margin: 0 25px;
    }

    div {
      padding: 5px 0;
    }
  }

  .carbonbadge {
    margin-bottom: 25px;
  }
}
</style>
