<template>
  <article class="rounded-2xl bg-gray-800/70 border border-gray-700 p-5 shadow">
    <h3 class="text-lg font-semibold">{{ project.title }}</h3>
    <p class="mt-2 text-sm text-gray-300">{{ project.description }}</p>

    <ul class="mt-3 space-y-1 text-sm text-gray-300 list-disc list-inside">
      <li v-for="(b, i) in project.bullets" :key="i">{{ b }}</li>
    </ul>

    <ToolsUsed class="mt-4" :tools="project.tech" />

    <div class="mt-5 flex flex-wrap gap-3">
      <a
        v-for="(lnk, i) in project.links"
        :key="i"
        :href="lnk.href"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center rounded-xl border border-gray-600 px-3 py-2 text-sm hover:bg-gray-700"
        >{{ lnk.label }}</a
      >
    </div>
  </article>
</template>

<script setup lang="ts">
import ToolsUsed from '@/components/shared/ToolsUsed.vue';
import type { Project } from '@/types';

defineProps<{ project: Project }>();
</script>