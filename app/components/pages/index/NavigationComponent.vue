<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useAuthStore } from '~/stores/authStore'

const authStore = useAuthStore()

const navigation = [
  { name: 'Product', to: '/' },
  { name: 'Features', to: '/' },
  { name: 'About', to: '/' },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <nav
    class="flex items-center justify-between p-6 lg:px-8"
    aria-label="Global"
  >
    <company-logo-component />
    <div class="flex lg:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        @click="mobileMenuOpen = true"
      >
        <span class="sr-only">
          Open main menu
        </span>
        <Bars3Icon
          class="size-6"
          aria-hidden="true"
        />
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <template
        v-for="item in navigation"
        :key="item.name"
      >
        <NuxtLink
          :to="item.to"
          class="text-sm/6 font-semibold text-gray-900"
        >
          {{ item.name }}
        </NuxtLink>
      </template>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <NuxtLink
        v-if="authStore.isAuthenticated"
        to="/dashboard"
        class="text-sm/6 font-semibold text-gray-900"
      >
        Dashboard
        <span aria-hidden="true">&rarr;</span>
      </NuxtLink>
      <NuxtLink
        v-else
        to="/login"
        class="text-sm/6 font-semibold text-gray-900"
      >
        Log in
        <span aria-hidden="true">&rarr;</span>
      </NuxtLink>
    </div>
  </nav>
  <Dialog
    class="lg:hidden"
    :open="mobileMenuOpen"
    @close="mobileMenuOpen = false"
  >
    <div class="fixed inset-0 z-50" />
    <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <button
          type="button"
          class="-m-2.5 rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = false"
        >
          <span class="sr-only">
            Close menu
          </span>
          <XMarkIcon
            class="size-6"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <template
              v-for="item in navigation"
              :key="item.name"
            >
              <NuxtLink
                :to="item.to"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                {{ item.name }}
              </NuxtLink>
            </template>
          </div>
          <div class="py-6">
            <NuxtLink
              v-if="authStore.isAuthenticated"
              to="/dashboard"
              class="text-sm/6 font-semibold text-gray-900"
            >
              Dashboard
            </NuxtLink>
            <NuxtLink
              v-else
              to="/login"
              class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
            >
              Log in
            </NuxtLink>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>
