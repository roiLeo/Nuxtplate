<template>
  <UTooltip :text="color.value" class="capitalize" :open-delay="500">
    <UButton
      color="neutral"
      square
      :variant="color.value === selected.value ? 'solid' : 'ghost'"
      @click.stop.prevent="$emit('select')"
    >
      <span class="inline-block w-3 h-3 rounded-full" :style="{ backgroundColor: color.hex }" />
    </UButton>
  </UTooltip>
</template>

<script setup lang="ts">
defineProps<{
  color: { value: string; hex: string }
  selected: { value: string }
}>()
defineEmits(['select'])
</script>
