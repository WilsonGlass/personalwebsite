<template>
  <div
    class="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4"
  >
    <div class="inventory-item" v-for="(item, index) in inventory" :key="index">
      <MyItemBox :item="item"></MyItemBox>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useUserStore } from "@/stores/userStore";
import MyItemBox from "@/components/MyItemBox.vue";

export default defineComponent({
  components: { MyItemBox },
  setup() {
    const userStore = useUserStore();
    const inventory = computed(() => userStore.inventory);
    return {
      inventory,
    };
  },
});
</script>