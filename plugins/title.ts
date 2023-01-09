export default defineNuxtPlugin(() => {
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | Gerben Veenhof` : "Gerben Veenhof";
    },
  });
});
