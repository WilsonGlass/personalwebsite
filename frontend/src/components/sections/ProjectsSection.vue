<template>
  <section id="projects" class="container mx-auto px-4 py-14 scroll-mt-24">
    <h2 class="text-xl font-mono text-green-400 mb-2">$ projects</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <ProjectCard v-for="proj in projects" :key="proj.title" :project="proj" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/cards/ProjectCard.vue';
import type { Project } from '@/types';

defineProps<{ projects: Project[] }>();
</script>