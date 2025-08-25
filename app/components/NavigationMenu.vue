<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  class?: string
}>()

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'xFlawless',
      icon: 'i-simple-icons-github',
      badge: '.dev',
      to: 'https://github.com/flawless-git',
      target: '_blank'
    }
  ],
  [
    {
      label: 'Home',
      icon: 'i-lucide-house',
      to: '#home'
    },
    {
      label: 'Projects',
      icon: 'i-lucide-code',
      to: '#projects'
    },
    {
      label: 'Contact',
      icon: 'i-lucide-mail',
      to: '#contact'
    }
  ],
  [
    {
    }
  ]
])
</script>

<template>
  <div :class="$props.class">
    <div class="flex w-full">
      <div class="flex items-center justify-between w-full">
        <UNavigationMenu color="neutral" variant="link" :items="items" class="flex-1" />
        <div class="px-4">
          <ColorModeButton />
        </div>
      </div>
    </div>
    <USeparator />
  </div>
</template>
