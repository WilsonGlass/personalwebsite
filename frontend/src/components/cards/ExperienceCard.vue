<template>
  <article class="rounded-2xl border border-white/10 p-5 bg-white/5">
    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
      <div>
        <h3 class="font-semibold text-gray-100">
          {{ job.role }}<span class="text-gray-400"> · {{ job.company }}</span>
        </h3>
        <div class="text-xs text-gray-400">
          {{ job.location }} · {{ job.dates }}
          <span v-if="job.type" class="ml-2 inline-block rounded bg-white/10 px-2 py-0.5">
            {{ job.type }}
          </span>
        </div>
      </div>
    </div>

    <ul class="mt-3 text-sm text-gray-300 space-y-1 list-disc list-inside">
      <li v-for="(b, j) in job.bullets" :key="j">{{ b }}</li>
    </ul>

    <ToolsUsed class="mt-4" :tools="job.tech" />
  </article>
</template>

<script setup lang="ts">
import ToolsUsed from '@/components/shared/ToolsUsed.vue';
import type { Job } from '@/types';

defineProps<{ job: Job }>();
</script>