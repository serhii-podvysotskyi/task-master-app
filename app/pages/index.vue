<script setup lang="ts">
import NavigationComponent from '~/components/pages/index/NavigationComponent.vue'

useHead({
  title: 'Task Master - Welcome',
})
</script>

<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <navigation-component />
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Connect every team, task and project together
          </h1>
          <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            The only platform that can support your company at any scale.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              class="text-sm/6 font-semibold text-gray-900"
            >
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
