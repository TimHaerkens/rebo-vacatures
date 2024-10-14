<script setup lang="ts">

const {
  loading,
  offers,
  fetchOffers,
} = useOffers()

onMounted(() => {
  fetchOffers()
})


</script>

<template>
  <div class="py-8">
    <UContainer>
      <header class="mb-8 py-8">
        <h1 class="text-center text-3xl">
          Voeg waarde toe aan jouw carrière
        </h1>
      </header>
    </UContainer>

    <UContainer v-if="!loading">

      <h3 class="font-bold mb-4 text-brand">
        We hebben momenteel 
        <span class="text-white rounded-full inline-flex bg-brand_light w-8 h-8 justify-center items-center align-middle">{{ offers.length }}</span> 
        vacatures
      </h3>

      <div class="m-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <OfferCard
          v-for="offer in offers"
          :key="offer.id"
          :offer="offer"
        />
      </div>
    </UContainer>
  </div>
</template>
