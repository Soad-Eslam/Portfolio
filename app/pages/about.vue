<script setup>

  useHead({
  title: "about",
});
</script>

<template>
  <div class="prose mx-auto p-6">
    <h1 class="link">Hello There, I'm Soad</h1>

    <h2 class="link">About me</h2>
    <p>
      I'm Soad, I'm a frontend developer. I'm 23, living in Egypt.
    </p>

    <h2 class="link">What are my skills</h2>
    <ul>
      <li>Nuxt.js</li>
      <li>Vue.js</li>
      <li>Tailwind CSS</li>
      <li>Bootstrap CSS</li>
      <li>JavaScript, HTML, CSS</li>
    </ul>

    <h2 class="link">What software/hardware do I use?</h2>
    <p>Here's a list of everyday used software and hardware:</p>
    <ul>
      <li>HP laptop</li>
      <li>VSCode</li>
      <li>Chrome</li>
      <li>Cursor</li>
    </ul>
  </div>
</template>

<style scoped>
.link{
  @apply dark:text-gray-100;
}
</style>
