<template>
  <div v-if="items.length" class="pt-4 border-t border-white/10">
    <div class="mb-3 text-xs uppercase tracking-wide text-gray-400 flex items-center gap-2">
      <span class="inline-block w-1.5 h-1.5 rounded-full bg-green-400"></span>
      {{ label || 'Tools used' }}
    </div>
    <div class="flex flex-wrap items-center gap-3">
      <img
        v-for="t in items"
        :key="t.name"
        :src="t.src"
        :alt="t.name"
        :title="t.name"
        class="h-6 md:h-7 w-auto opacity-90"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { logoSrc } from '@/data/logos';

const props = defineProps<{ tools?: string[]; label?: string }>();

const items = computed(() =>
  (props.tools ?? [])
    .map((n) => ({ name: n, src: logoSrc(n) }))
    .filter((i) => !!i.src)
);

const label = computed(() => props.label ?? 'Tools used');
</script>