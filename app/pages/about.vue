<template>
  <article class="prose dark:prose-invert">
    <ContentDoc v-if="data" :value="data" />
    <div v-else-if="pending">Loading...</div>
  </article>
</template>

<script setup>
const { data, pending } = await useAsyncData('about', () => 
  queryContent('about').findOne()
);

useHead({
  title:'About'
})
</script>

<style lang="scss" scoped></style>
