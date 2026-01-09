<script setup lang="ts">
import { Octagon } from "lucide-vue-next";

const props = defineProps({
  eyebrow: { type: String, default: "m4cx hub" },
  subtitle: { type: String, default: "Projects | Blog | Talks" },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  topics: { type: String, default: "" },
});

const topicItems = computed(() =>
  props.topics
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
);
</script>

<template>
  <section
    class="relative overflow-hidden rounded-3xl border border-subtle/70 bg-panel/90 shadow-2xl backdrop-blur-lg"
  >
    <div
      class="pointer-events-none absolute inset-0 mix-blend-lighten opacity-60"
    >
      <div class="oct-grid"></div>
      <div class="oct-glow top-[-4rem] left-[-4rem]"></div>
      <div class="oct-glow bottom-[-4rem] right-[-4rem]"></div>
    </div>

    <div
      class="relative grid gap-10 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-14"
    >
      <div class="space-y-4">
        <p
          v-if="eyebrow"
          class="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent"
        >
          {{ eyebrow }}
          <Octagon class="h-3 w-3 text-accent/60" aria-hidden="true" />
        </p>
        <p v-if="subtitle" class="text-sm font-semibold text-muted">
          {{ subtitle }}
        </p>
        <h1
          class="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          {{ title }}
        </h1>
        <p v-if="description" class="text-lg text-muted">
          {{ description }}
        </p>

        <div
          v-if="topicItems.length"
          class="flex flex-wrap items-center gap-2 pt-2"
        >
          <span
            v-for="topic in topicItems"
            :key="topic"
            class="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
          >
            {{ topic }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
