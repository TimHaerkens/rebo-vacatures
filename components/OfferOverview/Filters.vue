<script setup lang="ts">
import { useOffersStore } from '~/stores/offersStore'

const route = useRoute()
const offersStore = useOffersStore()

const possibleLocations = computed(() => offersStore.possibleLocations)
const possibleLevels = computed(() => offersStore.possibleLevels)
const possibleDepartments = computed(() => offersStore.possibleDepartments)

const { initializeFiltersFromURL, updateURLWithFilters } = useFilterSync()


onMounted(() => {
  if (Object.keys(route.query).length > 0) {
    initializeFiltersFromURL()
  } else {
    updateURLWithFilters()
    offersStore.fetchOffers()
  }
})

</script>

<template>
    <UInput 
      v-model="offersStore.filters.searchQuery" 
      size="lg" 
      class="w-full md:w-60 m-auto" 
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
</template>