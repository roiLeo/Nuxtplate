<template>
  <div class="flex min-h-screen flex-col">
    <DefaultNavbar />

    <UContainer class="w-full">
      <NuxtPage />
    </UContainer>

    <DefaultFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-900'
  }
})
</script>
