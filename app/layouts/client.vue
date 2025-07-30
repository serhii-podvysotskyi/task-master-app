<script setup lang="ts">
import NavigationComponent from '~/components/layouts/client/NavigationComponent.vue'
import { useAuthStore } from '~/stores/authStore'
import AdminBannerComponent from '~/components/layouts/AdminBannerComponent.vue'
import { UserAbility } from '~/types/auth/UserAbility'

const auth = useAuthStore()

useHead({
  bodyAttrs: {
    class: ['h-full'],
  },
  htmlAttrs: {
    class: ['h-full', 'bg-gray-100'],
  },
})
</script>

<template>
  <div class="min-h-full">
    <admin-banner-component v-if="auth.can(UserAbility.ACCESS_ADMIN_PANEL)" />
    <navigation-component />
    <slot />
  </div>
</template>
