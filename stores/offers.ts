import { defineStore } from 'pinia'
import type { Offer } from '~/types/offer'
const { experienceLevels } = useExperienceLevels()

export const useOffersStore = defineStore('offers', {
  state: () => ({
    offers: [] as Offer[],
    filteredOffers: [] as Offer[],
    loading: false,
    error: null as Error | null,
    filters: {
        searchQuery: '' as string,
        locations: [] as string[],
        levels: [] as string[],
        minSalary: 0 as number,
        departments: [] as string[],
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

        // Filter by location
        if (this.filters.locations.length > 0) {
            offers = offers.filter((offer) =>
            this.filters.locations.includes(offer.city)
            )
        }

        // Filter by level
        if (this.filters.levels.length > 0) {
            offers = offers.filter((offer) =>
            this.filters.levels.includes(experienceLevels[offer.experience_code])
            )
        }

        // Filter by salary
        if (this.filters.minSalary > 0) {
            offers = offers.filter((offer) => offer.salary.min >= this.filters.minSalary)
        }

        // Filter by department
        if (this.filters.departments.length > 0) {
            offers = offers.filter((offer) =>
            this.filters.departments.includes(offer.department)
            )
        }

        this.filteredOffers = offers
      },
  },
  getters: {
    getOfferById: (state) => (id: number) => {
      return state.offers.find((offer) => offer.id === id)
    },
    possibleLocations: (state) => {
        const cities = state.offers
          .map((offer) => offer.city)
          .filter((city) => city && city.trim() !== '')
  
        return Array.from(new Set(cities)).sort()
    },
    possibleLevels: (state) => {
        const levels = state.offers
          .map((offer) => offer.experience_code)
          .filter((level) => level && level.trim() !== '').map((level) => experienceLevels[level])
  
        return Array.from(new Set(levels)).sort()
    },
    possibleDepartments: (state) => {
        const departments = state.offers
          .map((offer) => offer.department)
          .filter((department) => department && department.trim() !== '')
  
        return Array.from(new Set(departments)).sort()
    }
  },
})
