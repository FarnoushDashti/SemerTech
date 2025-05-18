<template>
  <div class="container mx-auto px-4 py-8">
    <Header />
    <div class="flex flex-wrap gap-4 justify-center">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProductCard from '~/components/ProductCard.vue'
import Header from '~/components/Header.vue'

const products = ref([])

onMounted(async () => {
  const res = await axios.get('https://fakestoreapi.com/products')
  products.value = res.data
})
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style> 