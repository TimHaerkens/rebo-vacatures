<script setup lang="ts">
import OfferItem from '../OfferItem.vue'

interface Props {
  salary: { currency: string, min: number, max: number , period: string }
}
const props = defineProps<Props>()

const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
} 
 
const currencySymbol = currencySymbols[props.salary.currency] || props.salary.currency

//format number with thousand separator (.)
const formatNumber = (value: number) => {
  if (!value) return '0'
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const hasSalary = props.salary.min && props.salary.max
</script>

<template>
  <OfferItem icon="window">
    <template #value>
        Salaris: {{ currencySymbol }} {{ formatNumber(props.salary.min) }} - {{ formatNumber(props.salary.max) }} 
    </template>
  </OfferItem>
</template>

