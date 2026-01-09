<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <article class="prose prose-lg mx-auto max-w-4xl text-foreground dark:prose-invert">
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>
