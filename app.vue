<script setup lang="ts">
import { appName } from './constants'

useHead({
  title: appName,
  bodyAttrs: {
    class: 'bg-[#e5f1f3] text-stone-800 dark:bg-stone-900 dark:text-stone-50',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
