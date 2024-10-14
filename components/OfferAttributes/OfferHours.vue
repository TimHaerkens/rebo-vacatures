<script setup lang="ts">
import OfferItem from './AttributeWrapper.vue'

interface Props {
  min: number,
  max: number
}
const props = defineProps<Props>()

</script>

<template>
   <OfferItem icon="window">
    <template #value>
      Aantal uur: {{ props.min }} - {{ props.max }}
    </template>
  </OfferItem>
</template>
