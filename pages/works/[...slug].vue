<template>
  <ContentDoc v-slot="{ doc }">
    <Head>
      <Title>>{{ doc.title }}</Title>
      <Meta name="description" :content="doc.description" />
      <Meta name="keywords" :content="doc.keywords" />
      <Meta name="author" content="Gerben Veenhof" />

      <Meta name="og:url" :content="runtimeConfig.host + route.fullPath" />
      <Meta name="og:title" :content="doc.title" />
      <Meta name="og:description" :content="doc.description" />
      <Meta v-if="doc.header_image" name="og:image" :content="doc.header_image" />

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:url" :content="runtimeConfig.host + route.fullPath" />
      <Meta name="twitter:title" :content="doc.title" />
      <Meta name="twitter:description" :content="doc.description" />
      <Meta v-if="doc.header_image" name="twitter:image" :content="doc.header_image" />
    </Head>
    <h1>{{ doc.title }}</h1>
    <ContentRenderer :value="doc" />
  </ContentDoc>
</template>

<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
</script>
