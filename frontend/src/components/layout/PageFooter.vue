<template>
  <footer class="container mx-auto px-4 pb-8 text-xs text-gray-500">
    © {{ year }} Wilson Glass
  </footer>
</template>

<script setup lang="ts">
defineProps<{ year: number }>();
</script>