<script setup lang="ts">
import { useOffersStore } from '~/stores/offersStore'
import OfferCard from '~/components/OfferOverview/OfferCard.vue'
import Filters from '~/components/OfferOverview/Filters.vue'

const offersStore = useOffersStore()
</script>

<template>
  <header class="mb-8 pt-12 md:pt-32 pb-12 px-6 rounded-b-3xl bg-brand_light flex flex-col gap-6">
    <h1 class="text-center text-4xl font-extrabold text-white">
      Voeg waarde toe aan jouw carrière
    </h1>

    <Filters />
    
  </header>
    
  <div class="py-8">

    <UContainer>

      <h3 class="font-bold mb-4 text-brand text-center md:text-left">
        We hebben momenteel 
        <span class="text-white rounded-full inline-flex bg-brand_light w-8 h-8 justify-center items-center align-middle">{{ offersStore.offers.length }}</span> 
        vacatures
      </h3>

      <div class="m-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-if="offersStore.filteredOffers.length === 0" class="text-center col-span-2 text-brand">
          Er zijn geen vacatures gevonden
        </div>
        <OfferCard
          class="offer-card"
          v-for="offer in offersStore.filteredOffers"
          :key="offer.id"
          :offer="offer"
        />
      </div>
    </UContainer>
  </div>
</template>
