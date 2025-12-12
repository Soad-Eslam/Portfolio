<template>
  <p class="mb-10">Take a look at my GitHub projects</p>

  <section v-if="pending">Loading ...</section>
  <section v-else-if="error">Somthing went wrong...Try again!</section>
  <section v-else>
    <ul class="grid grid-col-1 gap-4">
      <li
        v-for="repository in data"
        :key="repository.id"
        class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 dark:hover:text-gray-700 font-mono"
      >
        <a :href="repository.html_url" target="_blank">
          <div class="flex items-center justify-between">
            <div class="font-semibold">{{ repository.name }}</div>
            <div>{{ repository.description }}</div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { error, pending, data } = await useFetch(
  "https://api.github.com/users/soad-eslam/repos"
);
</script>

<style lang="scss" scoped></style>
