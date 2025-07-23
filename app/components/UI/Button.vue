<template>
  <div
    :class="classes"
    @click.stop="onClick"
  >
    <template v-if="loading">
      Loading...
    </template>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
const {
  size = 'md',
  color = 'primary',
  rounded = false,
  disabled = false,
  loading = false,
} = defineProps<{
  disabled?: boolean
  loading?: boolean
  rounded?: boolean
  color?: string
  size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'x-lg'
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const classes = computed(() => {
  const list = [
    rounded ? 'rounded-full' : 'rounded-sm',
    'font-semibold',
    'shadow-xs',
  ]

  switch (color) {
    case 'secondary':
      list.concat([
        'bg-white',
        'text-gray-900',
        'ring-1',
        'ring-gray-300',
        'ring-inset',
        'hover:bg-gray-50',
      ])
      break
    case 'primary':
      list.concat([
        `bg-indigo-600`,
        `hover:bg-indigo-500`,
        'focus-visible:outline-2',
        'focus-visible:outline-offset-2',
        `focus-visible:outline-indigo-600`,
      ])
      break
    default:
      list.concat([
        `bg-${color}-600`,
        `hover:bg-${color}-500`,
        'focus-visible:outline-2',
        'focus-visible:outline-offset-2',
        `focus-visible:outline-${color}-600`,
      ])
  }

  switch (size) {
    case 'x-sm':
      list.concat([
        rounded ? 'px-2.5' : 'px-2',
        'py-1',
        'text-xs',
      ])
      break
    case 'sm':
      list.concat([
        rounded ? 'px-2.5' : 'px-2',
        'py-1',
        'text-sm',
      ])
      break
    case 'md':
      list.concat([
        rounded ? 'px-3' : 'px-2.5',
        'py-1.5',
        'text-sm',
      ])
      break
    case 'lg':
      list.concat([
        rounded ? 'px-3.5' : 'px-3',
        'py-2',
        'text-sm',
      ])
      break
    case 'x-lg':
      list.concat([
        rounded ? 'px-4' : 'px-3.5',
        'py-2.5',
        'text-sm',
      ])
      break
  }

  return list
})

function onClick(event: MouseEvent) {
  if (disabled || loading) {
    return
  }
  emit('click', event)
}
</script>
