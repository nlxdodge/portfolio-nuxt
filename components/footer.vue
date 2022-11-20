<template>
    <footer>
        <div class="center-text">
            <p class="header">You can find me on these platforms:</p>
            <div class="social-media">
                <a href="https://github.com/nlxdodge" target="_blank" aria-label="Github link"><i aria-hidden="true" class="fab fa-github-square"></i></i></a>
                <a href="https://www.linkedin.com/in/gerbenveenhof/" target="_blank" aria-label="Linkedin link"><i aria-hidden="true" class="fab fa-linkedin"></i></a>
                <a href="https://twitter.com/gerbenveenhof" target="_blank" aria-label="Twitter link"><i aria-hidden="true" class="fab fa-twitter-square"></i></a>
            </div>
            <p>
                <i aria-hidden="true" aria-label="Copyright" class="fas fa-copyright"></i> Gerben Veenhof | {{ date("Y") }} | Made with <a class="jigsaw-link" href="https://jigsaw.tighten.co/" target="_blank" aria-label="Heart">Jigsaw <i aria-hidden="true" class="fas fa-heart"></i></a>
            </p>
            <div id="wcb" class="carbonbadge wcb-d"></div>
        </div>
    </footer>
</template>

<style lang="scss">
footer {
  margin-top: 25px;

  .header {
    font-size: 20px;
  }

  .jigsaw-link {
    font-family: $template-header-font;
    i {
      font-size: 1.5rem;
      vertical-align: middle;
    }
  }

  p {
    margin: 0 10px;
    padding: 20px 0;

    // @include media(">tablet") {
    //   margin: 0;
    // }
  }

  .social-media {
    display: flex;
    justify-content: center;

    a {
      .fab {
        font-size: 2.5em;
        color: $template-color-accent;
        margin: 0 20px;
        transition: all 0.2s ease-in-out;

        // @include media(">tablet") {
        //   padding: 20px;
        // }

        &:hover {
          transform: scale(1.15, 1.15);
          color: $template-color-accent-opposing;
        }
      }
    }
  }

  .carbonbadge {
    margin-bottom: 25px;
  }
}

</style>