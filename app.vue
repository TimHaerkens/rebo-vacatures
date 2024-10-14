<script setup lang="ts">
import { appName } from './constants'

useHead({
  title: appName,
  bodyAttrs: {
    class: 'bg-stone-50 text-stone-800 dark:bg-stone-900 dark:text-stone-50',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
