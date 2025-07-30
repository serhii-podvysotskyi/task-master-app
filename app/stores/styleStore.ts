import { defineStore } from 'pinia'

export const useStyleStore = defineStore('style', () => {
  const _mode = ref<string>('dark')

  const isDarkMode = computed<boolean>(() => _mode.value === 'dark')
  const isLightMode = computed<boolean>(() => _mode.value === 'light')

  function changeMode(mode: 'dark' | 'light') {
    _mode.value = mode
  }

  return {
    isDarkMode,
    isLightMode,
    changeMode,
  }
})
