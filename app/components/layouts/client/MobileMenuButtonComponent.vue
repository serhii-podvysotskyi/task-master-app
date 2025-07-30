<script setup lang="ts">
import { DisclosureButton } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useStyleStore } from '~/stores/styleStore'

const style = useStyleStore()

defineProps({
  open: Boolean,
})
</script>

<template>
  <DisclosureButton
    class="items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-hidden focus:ring-inset"
    :class="{
      'text-gray-400': style.isLightMode || style.isDarkMode,
      'hover:bg-gray-100 hover:text-gray-500 focus:ring-indigo-500': style.isLightMode,
      'hover:bg-gray-700 hover:text-white focus:ring-white': style.isDarkMode,
    }"
  >
    <span class="absolute -inset-0.5" />
    <span class="sr-only">Open menu</span>
    <XMarkIcon
      v-if="open"
      class="block size-6"
      aria-hidden="true"
    />
    <Bars3Icon
      v-else
      class="block size-6"
      aria-hidden="true"
    />
  </DisclosureButton>
</template>
