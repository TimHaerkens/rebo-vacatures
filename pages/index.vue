<script setup lang="ts">
import { useOffersStore } from '~/stores/offers'
import OfferCard from '~/components/OfferOverview/OfferCard.vue'

const offersStore = useOffersStore()

const possibleLocations = computed(() => offersStore.possibleLocations)
const possibleLevels = computed(() => offersStore.possibleLevels)
const possibleDepartments = computed(() => offersStore.possibleDepartments)

watch(
  () => offersStore.filters,
  () => {
    offersStore.applyFilters()
  },
  { deep: true }
)

</script>

<template>
  <header class="mb-8 pt-32 pb-12 px-6 rounded-b-3xl bg-brand_light flex flex-col gap-6">
    <h1 class="text-center text-4xl font-extrabold text-white">
      Voeg waarde toe aan jouw carrière
    </h1>
    <UInput 
      v-model="offersStore.filters.searchQuery" 
      size="lg" 
      class="w-60 m-auto" 
      placeholder="Zoek op functietitel" 
      icon="i-heroicons-magnifying-glass-20-solid"
    />

    <div class="flex flex-col md:flex-row md:justify-between gap-4">
      <USelectMenu 
        v-model="offersStore.filters.levels" 
        :options="possibleLevels" 
        multiple 
        class="w-full"
        placeholder="Kies niveau(s)" />

      <USelectMenu 
        v-model="offersStore.filters.locations" 
        :options="possibleLocations" 
        class="w-full"
        multiple 
        placeholder="Kies locatie(s)" />

      <USelectMenu 
        v-model="offersStore.filters.departments" 
        :options="possibleDepartments" 
        class="w-full"
        multiple 
        placeholder="Kies afdeling(en)" />

      <UInput 
        v-model="offersStore.filters.minSalary" 
        size="sm" 
        type="number"
        class="w-full"
        icon="i-heroicons-currency-euro-20-solid"
        placeholder="Min. salaris" />
        
    </div>
    
  </header>
    
  <div class="py-8">

    <UContainer>

      <h3 class="font-bold mb-4 text-brand">
        We hebben momenteel 
        <span class="text-white rounded-full inline-flex bg-brand_light w-8 h-8 justify-center items-center align-middle">{{ offersStore.offers.length }}</span> 
        vacatures
      </h3>

      <div class="m-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <OfferCard
          v-for="offer in offersStore.filteredOffers"
          :key="offer.id"
          :offer="offer"
        />
      </div>
    </UContainer>
  </div>
</template>
