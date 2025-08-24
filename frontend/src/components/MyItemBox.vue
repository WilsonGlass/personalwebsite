<template>
  <div
    class="cursor-pointer rounded bg-gray-800 hover:bg-slate-600"
    :item="item"
  >
    <img :src="item.image" :alt="alt" class="w-full h-auto object-cover" />

    <div class="mt-1">
      <div class="h-10">
        <!-- show only when wearText is non-empty -->
        <div v-if="wearText" class="text-white text-sm text-center">
          {{ wearText }}
        </div>
      </div>

      <div class="flex w-full h-10">
        <button
          class="w-full flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white rounded"
        >
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
  },
  computed: {
    // Always returns a string, never undefined
    wearText() {
      const w = this.item?.wear;
      return w ? String(w).toUpperCase() : "";
    },
  },
};
</script>