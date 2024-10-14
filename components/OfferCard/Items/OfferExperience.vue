<script setup lang="ts">
import OfferItem from '../OfferItem.vue'

interface Props {
  experience: string
}
const props = defineProps<Props>()

const { experienceLevels } = useExperienceLevels()

</script>

<template>
  <OfferItem icon="window">
    <template #value>
        Werkervaring: {{ experienceLevels[props.experience] }} 
    </template>
  </OfferItem>
</template>

