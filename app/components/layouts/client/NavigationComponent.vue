<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

import { useAuthStore } from '~/stores/authStore'
import { useStyleStore } from '~/stores/styleStore'

import ProfileDropdownComponent from '~/components/layouts/client/ProfileDropdownComponent.vue'
import MobileMenuButtonComponent from '~/components/layouts/client/MobileMenuButtonComponent.vue'
import NotificationButtonComponent from '~/components/layouts/client/NotificationButtonComponent.vue'
import AddTaskButtonComponent from '~/components/layouts/client/AddTaskButtonComponent.vue'
import { UserAbility } from '~/types/auth/UserAbility'

const auth = useAuthStore()
const style = useStyleStore()

const userImageUrl = ref('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80')

const navigation = [
  { text: 'Dashboard', link: '/dashboard' },
  { text: 'Projects', link: '/projects' },
]

const userNavigation = computed(() => {
  let list = [
    { text: 'Profile', link: '/profile' },
    { text: 'Settings', link: '/settings' },
  ]

  if (auth.can(UserAbility.ACCESS_ADMIN_PANEL)) {
    list = [
      ...[{ text: 'Admin Panel', link: '/admin' }],
      ...list,
    ]
  }

  return list
})
</script>

<template>
  <Disclosure
    v-slot="{ open }"
    as="header"
    :class="{
      'bg-white shadow-sm': style.isLightMode,
      'bg-gray-800': style.isDarkMode,
    }"
  >
    <div
      class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:px-8"
      :class="{
        'lg:divide-gray-200': style.isLightMode,
        'lg:divide-gray-700': style.isDarkMode,
      }"
    >
      <div class="relative flex h-16 justify-between">
        <company-logo-component />
        <div class="relative z-0 flex flex-1 items-center justify-center px-2 md:absolute md:inset-0">
          <div class="grid w-full grid-cols-1 md:max-w-xs">
            <input
              type="search"
              name="search"
              class="col-start-1 row-start-1 block w-full rounded-md py-1.5 pr-3 pl-10 text-base sm:text-sm/6"
              :class="{
                'placeholder:text-gray-400': style.isLightMode || style.isDarkMode,
                'bg-white text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600': style.isLightMode,
                'bg-gray-700 text-white outline-hidden focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400': style.isDarkMode,
              }"
              placeholder="Search"
            >
            <MagnifyingGlassIcon
              class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center"
              :class="{
                'text-gray-400': style.isDarkMode || style.isLightMode,
              }"
              aria-hidden="true"
            />
          </div>
        </div>
        <div class="relative z-10 flex items-center lg:hidden">
          <add-task-button-component class="hidden md:relative md:mr-2 md:inline-flex" />
          <mobile-menu-button-component
            class="relative inline-flex"
            :open="open"
          />
        </div>
        <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <add-task-button-component class="relative inline-flex mr-2" />
          <notification-button-component class="relative shrink-0" />
          <profile-dropdown-component
            :user-image-url="userImageUrl"
            :navigation="userNavigation"
          />
        </div>
      </div>
      <nav
        class="hidden lg:flex lg:space-x-8 lg:py-2"
        aria-label="Global"
      >
        <template
          v-for="item in navigation"
          :key="item.text"
        >
          <NuxtLink
            :to="item.link"
            class="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"
            :class="{
              'text-gray-900 hover:bg-gray-50 hover:text-gray-900': style.isLightMode,
              'text-gray-300 hover:bg-gray-700 hover:text-white': style.isDarkMode,
            }"
            :active-class="style.isLightMode ? 'bg-gray-100 text-gray-900' : style.isDarkMode ? 'bg-gray-900 text-white' : ''"
          >
            {{ item.text }}
          </NuxtLink>
        </template>
      </nav>
    </div>
    <DisclosurePanel
      as="nav"
      class="lg:hidden"
      aria-label="Global"
    >
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.text"
        >
          <NuxtLink
            :to="item.link"
            class="block rounded-md px-3 py-2 text-base font-medium"
            :class="{
              'text-gray-900 hover:bg-gray-50 hover:text-gray-900': style.isLightMode,
              'text-gray-300 hover:bg-gray-700 hover:text-white': style.isDarkMode,
            }"
            :active-class="style.isLightMode ? 'bg-gray-100 text-gray-900' : style.isDarkMode ? 'bg-gray-900 text-white' : ''"
          >
            {{ item.text }}
          </NuxtLink>
        </DisclosureButton>
      </div>
      <div
        class="border-t pt-4 pb-3"
        :class="{
          'border-gray-200': style.isLightMode,
          'border-gray-700': style.isDarkMode,
        }"
      >
        <div class="flex items-center px-4">
          <div class="shrink-0">
            <img
              class="size-10 rounded-full"
              :src="userImageUrl"
              alt=""
            >
          </div>
          <div class="ml-3">
            <div
              class="text-base font-medium"
              :class="{
                'text-gray-800': style.isLightMode,
                'text-white': style.isDarkMode,
              }"
            >
              {{ auth.user?.name }}
            </div>
            <div
              class="text-sm font-medium"
              :class="{
                'text-gray-500': style.isLightMode,
                'text-gray-400': style.isDarkMode,
              }"
            >
              {{ auth.user?.email }}
            </div>
          </div>
          <notification-button-component class="relative shrink-0 ml-auto" />
        </div>
        <div class="mt-3 space-y-1 px-2">
          <DisclosureButton
            v-for="item in userNavigation"
            :key="item.text"
            class="block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
            :class="{
              'text-gray-500 hover:bg-gray-50 hover:text-gray-900': style.isLightMode,
              'text-gray-400 hover:bg-gray-700 hover:text-white': style.isDarkMode,
            }"
          >
            <NuxtLink :to="item.link">
              {{ item.text }}
            </NuxtLink>
          </DisclosureButton>
          <DisclosureButton
            class="block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
            :class="{
              'text-gray-500 hover:bg-gray-50 hover:text-gray-900': style.isLightMode,
              'text-gray-400 hover:bg-gray-700 hover:text-white': style.isDarkMode,
            }"
            @click.stop="auth.logout()"
          >
            Logout
          </DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
