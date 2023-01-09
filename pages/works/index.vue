<template>
  <div class="works">
    <Head>
      <Title>Works</Title>
      <Meta
        name="description"
        content="All the works that I have made over the past years of my career."
      />
      <Meta
        name="keywords"
        content="works, work, information, career, portfolio"
      />
    </Head>
    <ContentList :query="query" v-slot="{ list }">
      <NuxtLink
        :to="work._path"
        class="work"
        v-for="work in list"
        :key="work._path"
      >
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
      </NuxtLink>
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
      border: 2px solid transparent;
      transition: all 0.2s ease-in-out;
    }

    &:hover > picture > img {
      border: 2px solid $template-color-accent;
    }

    &:hover > .work-title {
      color: $template-color-accent;
      text-decoration: underline;
    }

    .work-title {
      text-align: center;
      font-size: 1.75rem;
      font-family: $template-header-font;
      color: $template-color-opposing;

      .sub {
        font-size: 1rem;
        font-family: $template-default-font;
      }
    }

    &:hover {
      transform: scale(1.05, 1.05);
    }
  }
}
</style>
