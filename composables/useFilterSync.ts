import { watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useOffersStore } from '~/stores/offers'

export function useFilterSync() {
  const offersStore = useOffersStore()
  const route = useRoute()
  const router = useRouter()

  function initializeFiltersFromURL() {
    const query = route.query

    offersStore.filters.searchQuery = (query.q as string) || ''

    offersStore.filters.locations = query.locatie
        ? (query.locatie as string).split(',') : []

    offersStore.filters.levels = query.niveau
        ? (query.niveau as string).split(',') : []

    offersStore.filters.minSalary = query.salaris
        ? parseInt(query.salaris as string, 10) : 0

    offersStore.filters.departments = query.afdeling
        ? (query.afdeling as string).split(',') : []

  }

  function updateURLWithFilters() {
    const query: Record<string, string> = {}

    if (offersStore.filters.searchQuery) {
        query.q = offersStore.filters.searchQuery
    }

    if (offersStore.filters.locations.length > 0) {
      query.locatie = offersStore.filters.locations.join(',')
    }

    if (offersStore.filters.levels.length > 0) {
      query.niveau = offersStore.filters.levels.join(',')
    }

    if (offersStore.filters.minSalary > 0) {
      query.salaris = offersStore.filters.minSalary.toString()
    }

    if (offersStore.filters.departments.length > 0) {
      query.afdeling = offersStore.filters.departments.join(',')
    }
  
    router.replace({ path: route.path, query })
  }

  watch(
    () => offersStore.filters,
    () => {
        console.log('test')
      offersStore.applyFilters()
      updateURLWithFilters()
    },
    { deep: true }
  )

  onMounted(() => {
    initializeFiltersFromURL()
  })

  return {
    initializeFiltersFromURL,
  }
}
