<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout">
    <slot />
    <div class="two-columns w-full h-full grid grid-cols-2">
      <div class="col-left" :class="props.class">
        <slot name="left"/>
      </div>
      <div class="col-right" :class="props.class">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
