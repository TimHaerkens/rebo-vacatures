<script setup lang="ts">
import { type Offer } from '~/types/offer'
import OfferSalary from '~/components/OfferCard/Items/OfferSalary'
import OfferHours from '~/components/OfferCard/Items/OfferHours.vue'
import OfferExperience from './Items/OfferExperience.vue'
import OfferLocation from './Items/OfferLocation.vue'

const { experienceLevels } = useExperienceLevels()

interface Props {
  offer: Offer
}

const props = defineProps<Props>()
</script>

<template>
  <NuxtLink :to="`/vacatures/${offer.id}`">
    <div class="cursor-pointer bg-white p-6 h-[20rem] rounded-lg transition ease-in-out duration-500 hover:-translate-y-1">
      <div class="flex flex-col justify-between gap-5">
        <span class="text-[#2984FF] bg-[#C7DFFF] font-bold text-xs w-fit p-2">
          {{ experienceLevels[props.offer.experience_code] }}
        </span> 
        
        <h2 class="font-bold mb-2 text-brand">
          {{ props.offer.title }}
        </h2>

        <div class="flex flex-col gap-2">
          <OfferLocation :location="props.offer.location" />
          <OfferExperience :experience="props.offer.experience_code" />
          <OfferHours :min="props.offer.min_hours" :max="props.offer.max_hours" />
          <OfferSalary :salary="props.offer.salary" v-if="props.offer.salary.min" />
        </div>

        <span class="text-brand font-bold text-xs">
          Bekijk deze vacature <Icon name="proicons:arrow-right" class="text-brand text-xl align-middle" />
        </span>
       
      </div>
    </div>
  </NuxtLink>
</template>
