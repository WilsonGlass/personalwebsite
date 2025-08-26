<template>
  <section id="education" class="container mx-auto px-4 py-14 scroll-mt-24">
    <h2 class="text-xl font-mono text-green-400 mb-2">$ education</h2>
    <p class="text-sm text-gray-400 mb-6">
      Northeastern University — B.S. Computer Science & Mathematics · May 2025
    </p>

    <div class="rounded-xl border border-white/10 bg-white/5">
      <button
        @click="toggle()"
        class="w-full flex items-center justify-between p-4 text-left"
        :aria-expanded="open ? 'true' : 'false'"
      >
        <span class="text-xs uppercase tracking-wide text-gray-400">Relevant Courses</span>
        <svg class="h-4 w-4 text-gray-400 transition-transform duration-200" :class="open ? 'rotate-180' : ''" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>

      <div class="border-t border-white/10 overflow-hidden transition-all duration-300" :class="open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'">
        <ul class="divide-y divide-white/10">
          <li v-for="c in courses" :key="c.code">
            <component
              :is="c.url ? 'a' : 'div'"
              :href="c.url || undefined"
              v-bind="c.url ? { target: '_blank', rel: 'noopener noreferrer' } : {}"
              class="block p-4 transition-colors"
              :class="c.url ? 'hover:bg-white/5' : 'opacity-90 cursor-default'"
            >
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <div class="text-xs text-gray-400">{{ c.code }}</div>
                  <div class="font-semibold text-gray-100 truncate">{{ c.title }}</div>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <span v-for="t in c.tags" :key="t" class="px-2 py-0.5 rounded-md text-[11px] bg-white/10 text-gray-200">{{ t }}</span>
                  </div>
                  <p v-if="c.note" class="mt-2 text-xs text-gray-400">{{ c.note }}</p>
                </div>
                <svg v-if="c.url" class="shrink-0 h-4 w-4 text-gray-400 mt-1" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17l10-10M17 7h-6m6 0v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </component>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Course } from '@/types';

const props = defineProps<{ courses: Course[] }>();

const open = ref(false);
const toggle = () => (open.value = !open.value);
</script>