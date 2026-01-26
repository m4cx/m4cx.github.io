<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, async () => {
  return await queryCollection("pagesContent").path("/pages-content").first();
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
  <section class="mx-auto max-w-6xl px-4 pb-10 pt-10 lg:px-6 lg:pt-16">
    <Hero
      eyebrow="m4cx.github.io"
      subtitle="Projects | Blog | Talks"
      title="One place for projects, writing, and talks"
      description="Software development, architecture, .NET, web, and AI — with links to code, slides, videos, and demos."
      topics="Software development, Software architecture, .NET, Web, AI"
    />
  </section>
  <section class="mx-auto max-w-6xl px-4 pb-20 lg:px-6">
    <div
      class="rounded-3xl border border-subtle/70 bg-panel/90 shadow-xl backdrop-blur-lg"
    >
      <div class="relative px-6 py-8 lg:px-12 lg:py-12">
        <div class="relative">
          <article
            class="prose prose-lg mx-auto max-w-4xl text-foreground dark:prose-invert"
          >
            <ContentRenderer v-if="page" :value="page" />
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
