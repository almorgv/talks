<script setup lang="ts">
import { defineProps, computed } from "vue";
const props = defineProps({
  data: {
    type: Object,
  },
  options: {
    type: Object,
  },
});

const chartOptions = computed(() => ({

}));
const options = {
   scales: {
      y: {
         ticks: {
            display: false,
         }
      }
   }
}
</script>

<template>
  <line-chart
  :data=data
  :library=options
  />
</template>