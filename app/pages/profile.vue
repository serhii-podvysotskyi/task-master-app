<template>
  <div>
    <h1>
      Welcome to the Profile Page
    </h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'client',
  middleware: ['sanctum:auth'],
})

useHead({
  title: 'Task Master - Profile',
})
</script>
