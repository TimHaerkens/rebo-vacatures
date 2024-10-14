<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useOffersStore } from '~/stores/offersStore'
import OfferDetails from '~/components/OfferPage/OfferDetails.vue';

const route = useRoute()
const id = route.params.vacature

const offersStore = useOffersStore()

const offer = computed(() => offersStore.getOfferById(parseInt(id)))

function removeTags(str: string) {
  if ((str===null) || (str===''))
      return false;
  else
  str = str.toString();
  return str.replace( /(<([^>]+)>)/ig, '');
}
</script>

<template>
  <div class=" bg-white">
    <header class="mb-8 pt-28 pb-8 px-6 rounded-b-3xl bg-brand_light">
      <NuxtLink to="/" class="text-white">
        <Icon name="proicons:arrow-left" class="text-white text-xl align-middle" />
        <span class="text-white">Terug naar overzicht</span>
      </NuxtLink>
      <h1 class=" text-2xl font-bold text-white w-80">
        {{ offer?.title }}
      </h1>
    </header>

    <UContainer>
        <div class="grid md:grid-cols-2  gap-6">
            <OfferDetails v-if="offer" :offer="offer" />
            <span class="font-bold text-md">
                {{ removeTags(offer.description) }}
            </span>
        </div>
    </UContainer>

    <div class="py-4"/>
   
    <UContainer v-if="offer && offer.translations.nl.requirements">
        <span v-html="offer.translations.nl.requirements" />
    </UContainer>
  </div>
</template>
