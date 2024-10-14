import { useOffersStore } from '~/stores/offers'

export default defineNuxtPlugin(async (nuxtApp) => {
  const offersStore = useOffersStore()

  if (!offersStore.offers.length) {
    await offersStore.fetchOffers()
  }
})