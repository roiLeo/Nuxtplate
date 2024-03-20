<template>
  <header
    class="border-b border-gray-200 dark:border-gray-800 bg-background/75">
    <UContainer class="h-14 flex items-center justify-between">
      <NuxtLink to="/">Starter Nuxt</NuxtLink>
      <div class="flex">
        <ColorPicker />
        <ColorModeButton />
      </div>
    </UContainer>
  </header>
</template>
