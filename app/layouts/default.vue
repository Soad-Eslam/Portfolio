<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt-5">
      <div class="flex items-center space-x-12">
        <div>
          <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:text-gray-800 hidden md:block"
            >Soad Eslam</NuxtLink
          >
        </div>
        <Menu />
      </div>
      <ColorModeSelector/>
    </header>
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s - Soad Eslam",
});

</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
