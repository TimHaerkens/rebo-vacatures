import { setup, url } from '@nuxt/test-utils/e2e'
import { expect } from '@playwright/test'
import { chromium } from 'playwright'
import { describe, it } from 'vitest'

describe('e2E test for navigating from index to character page', async () => {
  await setup({
    browser: true,
    host: 'http://localhost:3000',
  })

  it('should see offers and be able to navigate to an offer page', async () => {

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(url('/'))

    await page.waitForSelector('.offer-card')

    const offers = await page.$$('.offer-card')
    expect(offers.length).toBeGreaterThan(0)

    await page.click('text=Property manager')
    
    await expect(page).toHaveURL(/\/vacatures\/1873855$/)

    await browser.close()
  })
})
