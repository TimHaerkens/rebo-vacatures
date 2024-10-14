export default defineEventHandler(async () => {
    try {
      const response = await $fetch('https://rebogroep.recruitee.com/api/offers/')
      return response
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch offers',
      })
    }
  })
  