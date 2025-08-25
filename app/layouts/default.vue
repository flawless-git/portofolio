<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navigation -->
    <NavigationMenu
      class="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20 transition-all duration-300" />

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
/* Additional custom styles for enhanced blur effect */
.nav-blur {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Smooth transition for blur changes */
.backdrop-blur-transition {
  transition: backdrop-filter 0.3s ease-in-out;
}
</style>