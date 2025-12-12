<template>
  <article class="prose dark:prose-invert">
    <ContentDoc path="/" />
  </article>
</template>

<script setup>

useSeoMeta({
  title: "Main Page",
  description: "This is the main page",
  ogTitle: "Main Page",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/Portfolio/favicon.png",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
