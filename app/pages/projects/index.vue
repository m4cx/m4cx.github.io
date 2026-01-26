<script setup lang="ts">
const route = useRoute();
const { data: projects } = await useAsyncData(route.path, () => {
  return queryCollection("projects").order("date", "DESC").limit(10).all();
});

if (!projects.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <h1>Projects</h1>

  <section class="mx-auto max-w-6xl px-4 pb-20 lg:px-6">
    <div
      class="rounded-3xl border border-subtle/70 bg-panel/90 shadow-xl backdrop-blur-lg"
    >
      <div class="relative px-6 py-8 lg:px-12 lg:py-12">
        <div class="relative">
          <article
            class="prose prose-lg mx-auto max-w-4xl text-foreground dark:prose-invert"
          >
            <div v-for="project in projects" :key="project.title">
              <h2 class="mb-2">{{ project.title }}</h2>
              <small>{{ new Date(project.date).toLocaleDateString() }}</small>
              <p>
                {{ project.description }}
              </p>
              <p v-if="project.githubUrl">
                <a :href="project.githubUrl" target="_blank" rel="noopener"
                  >GitHub Repository</a
                >
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
