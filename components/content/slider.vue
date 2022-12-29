<template>
  <div class="glide">
    <div data-glide-el="track" class="glide__track">
      <ul class="glide__slides">
        <li class="glide__slide">
          <a
            href="/work/korfbal_trainer/"
            aria-label="Check the Korfbal Trainer project"
          >
            <picture>
              <source
                srcset="/images/works/korfbal_trainer.png"
                type="image/webp"
                loading="lazy"
              />
              <img
                src="/images/works/korfbal_trainer.png"
                alt="Korfbal Trainer"
                loading="lazy"
                width="1024"
                height="450"
              />
            </picture>
            <p>Korfbal Trainer <span>(Javascript)</span></p>
          </a>
        </li>
        <li class="glide__slide">
          <a href="/work/keydungeon/" aria-label="Check the Keydungeon project">
            <picture>
              <source
                srcset="/images/works/keydungeon.png"
                type="image/webp"
                loading="lazy"
              />
              <img
                src="/images/works/keydungeon.png"
                alt="Keydungeon"
                loading="lazy"
                width="1024"
                height="450"
              />
            </picture>
            <p>Keydungeon <span>(PHP)</span></p>
          </a>
        </li>
        <li class="glide__slide">
          <a href="/work/aq3d_bot/" aria-label="Check the AQ3D Bot project">
            <picture>
              <source
                srcset="/images/works/aq3d_bot.png"
                type="image/webp"
                loading="lazy"
              />
              <img
                src="/images/works/aq3d_bot.png"
                alt="AQ3D Bot"
                loading="lazy"
                width="1024"
                height="450"
              />
            </picture>
            <p>AQ3D Bot <span>(Java)</span></p>
          </a>
        </li>
        <li class="glide__slide">
          <a
            href="/work/scrapyard/"
            aria-label="Check the Scrapyard Mod project"
          >
            <picture>
              <source
                srcset="/images/works/scrapyard.png"
                type="image/webp"
                loading="lazy"
              />
              <img
                src="/images/works/scrapyard.png"
                alt="Scrapyard Mod"
                loading="lazy"
                width="1024"
                height="450"
              />
            </picture>
            <p>Scrapyard Mod <span>(Java)</span></p>
          </a>
        </li>
      </ul>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
      <div class="glide__bullet" data-glide-dir="=0"></div>
      <div class="glide__bullet" data-glide-dir="=1"></div>
      <div class="glide__bullet" data-glide-dir="=2"></div>
      <div class="glide__bullet" data-glide-dir="=3"></div>
    </div>
  </div>
</template>

<script setup>
import Glide from "@glidejs/glide";
import { onMounted } from "vue";

onMounted(() => {
  new Glide(".glide", {
    type: "carousel",
    perView: 1,
    autoplay: 5000,
    hoverpause: true,
  }).mount();
});
</script>

<style lang="scss">
.glide {
  .glide__bullets {
    display: flex;
    justify-content: center;
    padding: 20px;

    .glide__bullet {
      background-color: $template-color-accent-opposing;
      @include transition('all 0.3s ease-in-out');
      margin: 0 6px;
      width: 20px;
      height: 20px;
      border-radius: 100%;

      &:hover, &:focus {
        cursor: pointer;
        @include transition('all 0.3s ease-in-out');
        border: 3px solid $template-color-accent;
      }

      &.glide__bullet--active {
        @include transition('all 0.3s ease-in-out');
        background-color: $template-color-accent;
      }
    }
  }

  .glide__slides {
    .glide__slide {
      position: relative;
      height: 450px;

      img {
        border-radius: 10px;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

        @include media(">tablet") {
          width: 100%;
          height: auto;
        }
      }

      a {
        text-decoration: none;
      }

      p {
        @include media(">tablet") {
          font-size: 1.75em;
          width: auto;
        }

        width: 240px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -20%);
        color: #fff;
        font-size: 1.2em;
        text-align: center;
        font-family: $template-header-font;

        background-color: rgba(0, 0, 0, 0.6);
        padding: 10px 35px;

        span {
          font-family: $template-default-font;
          font-size: 1.25rem;
        }
      }
    }
  }
}
</style>
