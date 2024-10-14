<script setup lang="ts">
import OfferItem from '../OfferItem.vue'

interface Props {
  location: string,
}
const props = defineProps<Props>()

</script>

<template>
   <OfferItem icon="location">
    <template #value>
      {{ props.location }}
    </template>
  </OfferItem>
</template>
