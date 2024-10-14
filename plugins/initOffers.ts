import { useOffersStore } from '~/stores/offersStore'

export default defineNuxtPlugin(async (nuxtApp) => {
  const offersStore = useOffersStore()

  if (!offersStore.offers.length) {
    await offersStore.fetchOffers()
  }
})