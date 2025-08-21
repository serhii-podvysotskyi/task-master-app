<script setup lang="ts">
import { UserAbility } from '~/types/auth/UserAbility'
import AdminBannerComponent from '~/components/layouts/AdminBannerComponent.vue'

import { useAuthStore } from '~/stores/authStore'

const auth = useAuthStore()
</script>

<template>
  <div class="min-h-full">
    <admin-banner-component v-if="auth.can(UserAbility.ACCESS_ADMIN_PANEL)" />
    <slot />
  </div>
</template>
