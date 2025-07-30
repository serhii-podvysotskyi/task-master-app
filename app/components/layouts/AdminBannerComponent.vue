<script setup lang="ts">
import { useStyleStore } from '~/stores/styleStore'

const style = useStyleStore()
</script>

<template>
  <div
    class="flex gap-x-6 px-6 py-2"
    :class="{
      'bg-gray-900': style.isLightMode || style.isDarkMode,
    }"
  >
    <a
      href="#"
      class="text-sm/6 text-white"
    >
      Horizon
    </a>
    <a
      href="#"
      class="text-sm/6 text-white"
    >
      Pulse
    </a>
    <a
      href="#"
      class="text-sm/6 text-white"
    >
      Telescope
    </a>
  </div>
</template>
