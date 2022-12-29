<template>
  <div class="works">
    <ContentList :query="query" v-slot="{ list }">
      <a :href="work._path" class="work" v-for="work in list" :key="work._path">
        <picture>
          <source
            :srcset="work.header_image + '.png'"
            type="image/webp"
            loading="lazy"
          />
          <img
            :src="work.header_image + '.png'"
            :alt="work.title"
            loading="lazy"
          />
        </picture>
        <div class="work-title">
          {{ work.title }}
          <span class="sub" v-if="work.category">({{ work.category }})</span>
        </div>
      </a>
    </ContentList>
  </div>
</template>

<script setup>
const query = {
  path: "/works",
  limit: 10,
};
</script>

<style lang="scss">
.works {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;

  .work {
    text-decoration: none;
    flex: 1 1 calc(100% - 60px);
    margin: 30px 15px;
    transition: all 0.2s ease-in-out;

    @include media(">tablet") {
      flex: 0 0 calc(50% - 60px);
    }

    img {
      border-radius: 10px;
      width: 100%;
      height: 245px;
      object-fit: cover;
      border: 3px solid transparent;
      transition: all 0.2s ease-in-out;
    }

    &:hover > picture > img {
      border: 3px solid rgba($template-color-accent-rgb, .25);
    }

    .work-title {
      text-align: center;
      font-size: 24px;
      font-family: $template-header-font;
      color: $template-color-opposing;

      .sub {
        font-size: 12px;
        font-family: $template-default-font;
      }
    }

    &:hover {
      transform: scale(1.05, 1.05);
    }
  }
}
</style>
