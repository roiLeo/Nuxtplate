<template>
  <NuxtLink class="group flex flex-col rounded-xl border bg-white text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-offset-gray-800" :to="link">
    <div class="p-4 md:p-5">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-left font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-white">
            {{ label }}
          </h3>
          <p class="text-sm text-gray-500">
            {{ subtitle }}
          </p>
        </div>
        <div class="pl-3">
          <svg class="h-3.5 w-3.5 text-gray-500 dark:group-hover:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  link: { type: String, default: '' },
  label: { type: String, default: '' },
  subtitle: { type: String, default: '' }
})
</script>
