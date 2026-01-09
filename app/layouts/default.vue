<script setup lang="ts">
import { Sun, Moon, Octagon } from "lucide-vue-next";

const route = useRoute();

type Theme = "light" | "dark";

const theme = useState<Theme>("theme", () => "light");

const applyTheme = (value: Theme) => {
  if (!import.meta.client) return;
  const root = document.documentElement;
  root.classList.toggle("dark", value === "dark");
  localStorage.setItem("theme", value);
};

onMounted(() => {
  if (!import.meta.client) return;

  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const nextTheme: Theme =
    stored === "dark" || stored === "light"
      ? stored
      : prefersDark
      ? "dark"
      : "light";

  theme.value = nextTheme;
  applyTheme(nextTheme);
});

watch(theme, (value) => applyTheme(value));

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
};

const isHome = computed(() => route.path === "/");
</script>

<template>
  <header
    class="sticky top-0 z-30 border-b border-subtle/60 bg-panel/85 backdrop-blur-md"
  >
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 lg:px-6"
    >
      <NuxtLink to="/" class="group flex items-center gap-3 text-left">
        <div class="oct-badge bg-accent/15 text-accent ring-1 ring-accent/50">
          <span class="font-semibold">M4</span>
        </div>
        <div>
          <p class="text-sm text-muted">m4cx.github.io</p>
          <p
            class="font-semibold leading-tight tracking-tight group-hover:text-accent transition-colors"
          >
            Projects · Blog · Talks
          </p>
        </div>
      </NuxtLink>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="btn-ghost flex items-center gap-2"
          aria-label="Toggle theme"
          @click="toggleTheme"
        >
          <span
            class="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-subtle/70 bg-panel shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Sun v-if="theme === 'light'" class="h-5 w-5 text-accent" />
            <Moon v-else class="h-5 w-5 text-accent" />
          </span>
          <span
            class="hidden text-sm font-medium text-foreground md:inline"
            >{{ theme === "dark" ? "Dark" : "Light" }}</span
          >
        </button>
      </div>
    </div>
  </header>

  <main class="relative z-10">
    <section
      class="mx-auto max-w-6xl px-4 pb-10 pt-10 lg:px-6 lg:pt-16"
      :class="{ 'pb-6': !isHome }"
    >
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
            <slot />
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer
    class="relative z-10 border-t border-subtle/60 bg-panel/85 px-4 py-6 text-sm text-muted backdrop-blur"
  >
    <div
      class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3"
    >
      <div class="flex items-center gap-2">
        <span
          class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent"
        >
          <Octagon class="h-4 w-4" aria-hidden="true" />
        </span>
        <span>Crafted with Tailwind & Nuxt Content</span>
      </div>
    </div>
  </footer>
</template>
