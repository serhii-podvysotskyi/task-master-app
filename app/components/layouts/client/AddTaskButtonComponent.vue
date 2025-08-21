<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/20/solid'

import { useStyleStore } from '~/stores/styleStore'

const style = useStyleStore()
</script>

<template>
  <button
    type="button"
    class="items-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"
    :class="{
      'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500': style.isLightMode || style.isDarkMode,
    }"
  >
    <PlusIcon
      class="-ml-0.5 size-5"
      aria-hidden="true"
    />
    Add Task
  </button>
</template>
