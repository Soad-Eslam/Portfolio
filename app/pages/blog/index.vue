<template>
  <h1 class="fw-bolder">Blog Post List</h1>
  <section class="not-prose font-mono">
    <div class="column text-gray-400 text-sm">
      <div>date</div>
      <div>title</div>
    </div>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <nuxt-link :to="post._path" class="column hover:bg-gray-200 dark:hover:bg-gray-800"
          ><div>2025</div>
          <div>{{ post.title }}</div></nuxt-link
        >
      </li>
    </ul>
  </section>
</template>

<script setup>
const posts = await queryContent("/blog").find();
console.log(posts);

useHead({
  title: "blog",
});
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
