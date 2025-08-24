<script setup>
const props = defineProps({
  buttonText: { type: String, default: '' },
  type: { type: String, default: 'button' },
})
</script>

<template>
  <button
    :type="type"
    class="inline-flex items-center gap-2 font-medium rounded transition-colors disabled:opacity-50"
    v-bind="$attrs"
  >
    <slot>{{ buttonText }}</slot>
  </button>
</template>