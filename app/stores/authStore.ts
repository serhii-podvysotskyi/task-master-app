import { defineStore } from 'pinia'

import type { UserAbility } from '~/types/auth/UserAbility'

export const useAuthStore = defineStore('auth', () => {
  const _user = useSanctumUser<IAuthUser>()
  const _sanctumAuth = useSanctumAuth()

  const user = computed<IUser>(() => _user.value as IUser)
  const isAuthenticated = computed<boolean>(() => !!_user.value)

  async function login(credentials: Record<string, string>) {
    return await _sanctumAuth.login(credentials)
  }

  async function logout() {
    return await _sanctumAuth.logout()
  }

  function can(ability: UserAbility): boolean {
    return !!_user.value?.abilities.includes(ability.toString())
  }

  function canAny(abilities: UserAbility[]): boolean {
    for (const ability of abilities) {
      if (_user.value?.abilities.includes(ability.toString())) {
        return true
      }
    }
    return false
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    can,
    canAny,
  }
})
