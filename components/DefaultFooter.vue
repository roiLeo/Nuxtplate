<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 mt-auto">
    <UContainer class="h-14 flex items-center space-between">
      <span class="text-gray-500 text-sm">
        © {{ new Date().getFullYear() }} roiLeo.</span
      >
      <UButton
        class="ml-auto"
        color="gray"
        size="md"
        label="View on GitHub"
        icon="i-simple-icons-github"
        to="https://github.com/roiLeo/Nuxtplate"
        target="_blank" />
    </UContainer>
  </footer>
</template>
