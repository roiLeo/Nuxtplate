<template>
  <UPopover mode="hover">
    <template #default="{ open }">
      <UButton color="neutral" variant="ghost" square :class="[open && 'bg-neutral-50 dark:bg-neutral-800']" aria-label="Color picker">
        <UIcon name="i-heroicons-swatch-20-solid" class="text-primary-500 dark:text-primary-400 h-5 w-5" />
      </UButton>
    </template>

    <template #content>
      <div class="p-4">
        <div class="grid grid-cols-5 gap-px">
          <!-- <ColorPickerPill v-for="color in primaryColors" :key="color.value" :color="color" :selected="primary!" @select="primary = color" /> -->
        </div>

        <hr class="my-2 border-neutral-200 dark:border-neutral-800" />

        <div class="grid grid-cols-5 gap-px">
          <!-- <ColorPickerPill v-for="color in neutralColors" :key="color.value" :color="color" :selected="neutral!" @select="neutral = color" /> -->
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
// import colors from '#tailwind-config/theme/colors'

const appConfig = useAppConfig()
const colorMode = useColorMode()

const colors = ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']
const neutrals = ['slate', 'gray', 'zinc', 'neutral', 'stone']

// const primaryColors = computed(() =>
//   appConfig.ui.colors
//     .filter((color) => color !== 'primary')
//     .map((color) => ({
//       value: color,
//       text: color,
//       hex: colors[color][colorMode.value === 'dark' ? 400 : 500]
//     }))
// )
// const neutralColors = computed(() =>
//   neutrals.map((color) => ({
//     value: color,
//     text: color,
//     hex: colors[color][colorMode.value === 'dark' ? 400 : 500]
//   }))
// )

// const primary = computed({
//   get: () => primaryColors.value.find((option) => option.value === appConfig.ui.primary),
//   set: (option) => {
//     appConfig.ui.primary = option!.value
//     window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.primary)
//   }
// })

// const neutral = computed({
//   get: () => neutralColors.value.find((option) => option.value === appConfig.ui.neutral),
//   set: (option) => {
//     appConfig.ui.neutral = option!.value
//     window.localStorage.setItem('nuxt-ui-neutral', appConfig.ui.neutral)
//   }
// })
</script>
