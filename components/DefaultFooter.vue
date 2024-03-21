<template>
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800">
    <UContainer class="space-between flex h-14 items-center">
      <span class="text-sm text-gray-500"> © {{ new Date().getFullYear() }} roiLeo.</span>
      <UButton class="ml-auto" color="gray" size="md" label="View on GitHub" icon="i-simple-icons-github" to="https://github.com/roiLeo/Nuxtplate" target="_blank" />
    </UContainer>
  </footer>
</template>
