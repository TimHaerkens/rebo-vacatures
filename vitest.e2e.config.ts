import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    include: ['tests/e2e/**'],
    exclude: ['tests/unit/**'],
    testTimeout: 20000,
  },
})
