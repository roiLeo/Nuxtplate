<template>
  <footer class="mt-auto border-t border-neutral-200 dark:border-neutral-800">
    <UContainer class="space-between flex h-14 items-center">
      <span class="text-sm text-neutral-500"> © {{ new Date().getFullYear() }} roiLeo.</span>
      <UButton class="ml-auto" color="neutral" variant="ghost" size="md" label="View on GitHub" icon="i-simple-icons-github" to="https://github.com/roiLeo/Nuxtplate" target="_blank" />
    </UContainer>
  </footer>
</template>
