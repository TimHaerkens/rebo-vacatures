// @vitest-environment nuxt
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import OfferCard from '~/components/OfferOverview/OfferCard.vue'

describe('OfferCard.vue', () => {
  it('renders the offer card with correct values', async () => {
    const wrapper = await mountSuspended(OfferCard, {
      props: {
        offer: {
          id: 1,
          title: 'Senior Developer',
          experience_code: 'senior',
          location: 'Amsterdam',
          min_hours: 32,
          max_hours: 40,
          salary: {
            min: 50000,
            max: 70000,
            currency: 'EUR',
          },
        }
      },
    })

    expect(wrapper.text()).toContain('Senior')
    expect(wrapper.find('h2').text()).toBe('Senior Developer')

    const link = wrapper.findComponent({ name: 'NuxtLink' })
    expect(link.exists()).toBe(true)
    expect(link.props('to')).toBe('/vacatures/1')

    const offerLocation = wrapper.findComponent({ name: 'OfferLocation' })
    expect(offerLocation.exists()).toBe(true)
    expect(offerLocation.props('location')).toBe('Amsterdam')
    
  })

  
})
