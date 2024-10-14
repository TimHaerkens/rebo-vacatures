<script setup lang="ts">
import { type Offer } from '~/types/offer'
import OfferSalary from '~/components/OfferAttributes/OfferSalary.vue'
import OfferHours from '~/components/OfferAttributes/OfferHours.vue'
import OfferLocation from '~/components/OfferAttributes/OfferLocation.vue'

interface Props {
  offer: Offer
}

const props = defineProps<Props>()
</script>

<template>
    <div class="bg-[#E5F0F7] p-6 rounded-lg">
      <div class="flex flex-col justify-between gap-5">
        <div class="flex flex-col gap-2">
          <OfferLocation :location="props.offer.location" />
          <OfferHours :min="props.offer.min_hours" :max="props.offer.max_hours" />
          <OfferSalary :salary="props.offer.salary" v-if="props.offer.salary.min" />
        </div>
      </div>
    </div>
</template>
