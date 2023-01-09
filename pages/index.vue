<template>
    <ContentDoc v-slot="{ doc }">
    <Head>
      <Title>>{{ doc.title }}</Title>
      <Meta name="description" :content="doc.description" />
    </Head>
    <ContentRenderer :value="doc" />
  </ContentDoc>
</template>
