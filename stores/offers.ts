import { defineStore } from 'pinia'
import type { Offer } from '~/types/offer'

export const useOffersStore = defineStore('offers', {
  state: () => ({
    offers: [] as Offer[],
    filteredOffers: [] as Offer[],
    loading: false,
    error: null as Error | null,
    filters: {
        searchQuery: '' as string,
      },
  }),
  actions: {
    async fetchOffers() {
      this.loading = true
      this.error = null

      try {
        const response = await $fetch<{ offers: Offer[] }>('/api/offers')
        this.offers = response.offers
        this.applyFilters()
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
    applyFilters() {
        let offers = [...this.offers]
  
        if (this.filters.searchQuery) {
          const query = this.filters.searchQuery.toLowerCase()
          offers = offers.filter((offer) =>
            offer.title.toLowerCase().includes(query)
          )
        }
        this.filteredOffers = offers
      },
  },
  getters: {
    getOfferById: (state) => (id: number) => {
      return state.offers.find((offer) => offer.id === id)
    },
  },
})
