<script setup lang="ts">
import { BellIcon } from '@heroicons/vue/24/outline'
import { useStyleStore } from '~/stores/styleStore'

const style = useStyleStore()
</script>

<template>
  <button
    type="button"
    class="rounded-full p-1 focus:ring-2 focus:ring-offset-2 focus:outline-hidden"
    :class="{
      'text-gray-400': style.isLightMode || style.isDarkMode,
      'bg-white hover:text-gray-500 focus:ring-indigo-500': style.isLightMode,
      'bg-gray-800 hover:text-white focus:ring-white focus:ring-offset-gray-800': style.isDarkMode,
    }"
  >
    <span class="absolute -inset-1.5" />
    <span class="sr-only">View notifications</span>
    <BellIcon
      class="size-6"
      aria-hidden="true"
    />
  </button>
</template>
