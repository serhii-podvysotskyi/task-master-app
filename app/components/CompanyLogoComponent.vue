<script setup lang="ts">
import { useStyleStore } from '~/stores/styleStore'

const style = useStyleStore()
</script>

<template>
  <div class="flex lg:flex-1 shrink-0 items-center">
    <img
      class="h-8 w-auto"
      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
      alt="Task Master"
    >
    <div
      class="hidden md:block m-1.5 p-1.5"
      :class="{
        'text-black': style.isLightMode,
        'text-gray-400': style.isDarkMode,
      }"
    >
      Task Master
    </div>
  </div>
</template>
