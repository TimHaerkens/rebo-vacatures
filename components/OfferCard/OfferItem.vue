<script setup lang="ts">

interface Props {
  icon: string
}

defineProps<Props>()

</script>
<template>
    <div class="flex flex-row items-center">
     <Icon :name="`proicons:${icon}`" class="w-5 h-5 mr-2 text-brand_light" />
     <slot name="value"></slot>
   </div>
 </template>