<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useAuthStore } from '~/stores/authStore'
import { useStyleStore } from '~/stores/styleStore'

const auth = useAuthStore()
const style = useStyleStore()

defineProps({
  userImageUrl: String,
  navigation: Array,
})
</script>

<template>
  <Menu
    as="div"
    class="relative ml-4 shrink-0"
  >
    <MenuButton
      class="relative flex rounded-full focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2"
      :class="{
        'bg-white focus-visible:ring-indigo-500': style.isLightMode,
        'bg-gray-800 text-sm text-white focus-visible:ring-white focus-visible:ring-offset-gray-800': style.isDarkMode,
      }"
    >
      <span class="absolute -inset-1.5" />
      <span class="sr-only">Open user menu</span>
      <img
        class="size-8 rounded-full"
        :src="userImageUrl"
        alt=""
      >
    </MenuButton>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 focus:outline-hidden"
        :class="{
          'bg-white ring-black/5': style.isLightMode || style.isDarkMode,
        }"
      >
        <MenuItem
          v-for="item in navigation"
          :key="item.text"
        >
          <NuxtLink
            :to="item.link"
            class="block px-4 py-2 text-sm cursor-pointer"
            :class="{
              'text-gray-700': style.isLightMode || style.isDarkMode,
            }"
            :active-class="style.isLightMode || style.isDarkMode ? 'bg-gray-100 outline-hidden' : ''"
          >
            {{ item.text }}
          </NuxtLink>
        </MenuItem>
        <MenuItem>
          <div
            class="block px-4 py-2 text-sm cursor-pointer"
            :class="{
              'text-gray-700': style.isLightMode || style.isDarkMode,
            }"
            @click.stop="auth.logout()"
          >
            Logout
          </div>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
