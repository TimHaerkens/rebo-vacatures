import { ref } from 'vue'
import { type Offer } from '~/types/offer'

export function useOffers() {
  const offers = ref<Offer[]>([])
  const offer = ref<Offer | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchOffers() {
    loading.value = true
    error.value = null

    try {
      const response = await $fetch<{ offers: Offer[] }>('/api/offers')
      offers.value = response.offers
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  async function fetchOffer(id: string) {
    loading.value = true
    error.value = null

    try {
      const response = await $fetch<Offer>(`/api/offers/${id}`)
      offer.value = response
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  return {
    offers,
    loading,
    error,
    offer,
    fetchOffer,
    fetchOffers,
  }
}
