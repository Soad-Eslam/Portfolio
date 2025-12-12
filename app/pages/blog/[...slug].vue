<template>
  <article
    class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <template>
      <ContentDoc :path="contentPath" />
    </template>
  </article>
</template>

<script setup>
const route = useRoute();

// Handle catch-all route: slug is an array, e.g., ['first'] for /blog/first
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join("/")
  : route.params.slug;

// Content path - matches your content directory structure (content/blog/first.md)
const contentPath = `blog/${slug}`;
</script>

<style lang="scss" scoped></style>
