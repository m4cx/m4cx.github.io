<script setup lang="ts">
</script>

<template>
  <div
    class="relative min-h-screen bg-surface text-foreground antialiased transition-colors"
  >
    <NuxtRouteAnnouncer />

    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="oct-grid opacity-60"></div>
      <div class="oct-glow top-[-6rem] left-[-6rem]"></div>
      <div class="oct-glow bottom-[-6rem] right-[-6rem]"></div>
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
