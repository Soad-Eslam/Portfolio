<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

useHead({
  htmlAttrs: {
    class: () => colorMode.value === 'dark' ? 'dark' : ''
  }
})
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
