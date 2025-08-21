<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: ['h-full'],
  },
  htmlAttrs: {
    class: ['h-full', 'bg-white'],
  },
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
