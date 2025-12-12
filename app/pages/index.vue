<template>
  <div class="prose mx-auto p-6 dark:text-gray-100">
    <h1 class="link">Hello</h1>
    <h2 class="link">I'm Soad</h2>

    <p>
      Read More <NuxtLink class="link" to="/about">about me</NuxtLink>,
      or see my latest <NuxtLink class="link" to="/projects">projects</NuxtLink>.
    </p>
  </div>
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

<style scoped>
.link{
  @apply dark:text-gray-100;
}
</style>
