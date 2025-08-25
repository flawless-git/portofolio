<template>
  <div class="flex flex-col items-center justify-center gap-2">
  <USeparator/>
    <div class="flex justify-center items-center pb-2">
      <span>© {{ year }} xFlawless.dev</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<style>

</style>