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
      {{ offers }}
    </UContainer>
  </div>
</template>
