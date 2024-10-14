import { defineStore } from 'pinia'
import type { Offer } from '~/types/offer'

export const useOffersStore = defineStore('offers', {
  state: () => ({
    offers: [] as Offer[],
    loading: false,
    error: null as Error | null,
  }),
  actions: {
    async fetchOffers() {
      this.loading = true
      this.error = null

      try {
        const response = await $fetch<{ offers: Offer[] }>('/api/offers')
        this.offers = response.offers
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
  },
  getters: {
    getOfferById: (state) => (id: number) => {
      return state.offers.find((offer) => offer.id === id)
    },
  },
})
