<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const props = defineProps<{
  class?: string
}>()

const isMobileMenuOpen = ref(false)

// Navigation items organized by sections
const mainNavItems: NavigationMenuItem[] = [
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '#home',
    click: () => closeMobileMenu()
  },
  {
    label: 'Projects',
    icon: 'i-lucide-code',
    to: '#projects',
    click: () => closeMobileMenu()
  },
  {
    label: 'Contact',
    icon: 'i-lucide-mail',
    to: '#contact',
    click: () => closeMobileMenu()
  }
]

const brandItem: NavigationMenuItem = {
  label: 'xFlawless',
  icon: 'i-simple-icons-github',
  badge: '.dev',
  to: 'https://github.com/flawless-git',
  target: '_blank'
}

const socialItems: NavigationMenuItem[] = [
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/flawless-git',
    target: '_blank'
  }
]

// Desktop navigation structure
const items = ref<NavigationMenuItem[][]>([
  [brandItem],
  mainNavItems,
  socialItems
])

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  closeMobileMenu()
})

</script>

<template>
  <div :class="props.class">
    <!-- Desktop Navigation -->
    <div class="hidden lg:block">
      <div class="flex w-full">
        <div class="flex items-center justify-between w-full">
          <UNavigationMenu 
            color="neutral" 
            variant="link" 
            :items="items" 
            class="flex-1"
          />
          <div class="px-4">
            <ColorModeButton />
          </div>
        </div>
      </div>
      <USeparator />
    </div>

    <!-- Mobile Navigation -->
    <div class="lg:hidden">
      <div class="flex items-center justify-between w-full px-4 py-3">
        <!-- Logo/Brand -->
        <NuxtLink 
          to="#home" 
          class="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white"
        >
          <UIcon name="i-simple-icons-github" class="w-6 h-6" />
          <span>xFlawless<span class="text-primary-500">.dev</span></span>
        </NuxtLink>

        <!-- Mobile Menu Toggle -->
        <div class="flex items-center space-x-2">
          <ColorModeButton class="mr-2" />
          <UButton
            color="primary"
            variant="ghost"
            :icon="isMobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            @click="toggleMobileMenu"
            class="p-2"
            aria-label="Toggle menu"
          />
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="lg:hidden">
          <div class="px-4 pb-4 space-y-1">
            <UButton
              v-for="item in mainNavItems"
              :key="item.label"
              :to="item.to"
              :icon="item.icon"
              color="primary"
              variant="ghost"
              class="w-full justify-start px-3 py-2 text-sm font-medium"
              @click="item.click?.()"
            >
              {{ item.label }}
            </UButton>
            
            <USeparator class="my-2" />
            
            <UButton
              v-for="item in socialItems"
              :key="item.label"
              :to="item.to"
              :icon="item.icon"
              color="primary"
              variant="ghost"
              class="w-full justify-start px-3 py-2 text-sm font-medium"
              :target="item.target"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </UButton>
            
            <UButton
              :to="brandItem.to"
              :icon="brandItem.icon"
              color="primary"
              variant="ghost"
              class="w-full justify-start px-3 py-2 text-sm font-medium"
              :target="brandItem.target"
              @click="closeMobileMenu"
            >
              {{ brandItem.label }}
            </UButton>
          </div>
        </div>
      </Transition>
      <USeparator />
    </div>
  </div>
</template>
