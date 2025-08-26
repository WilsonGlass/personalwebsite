<template>
  <section id="experience" class="container mx-auto px-4 py-14 scroll-mt-24">
    <h2 class="text-xl font-mono text-green-400 mb-6">$ experience</h2>
    <div class="space-y-6">
      <ExperienceCard v-for="(job, i) in experience" :key="i" :job="job" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceCard from '@/components/cards/ExperienceCard.vue';
import type { Job } from '@/types';

defineProps<{ experience: Job[] }>();
</script>