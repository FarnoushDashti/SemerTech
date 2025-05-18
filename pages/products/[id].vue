<template>
  <div class="container mx-auto px-4 py-8">
    <Header />
    <div v-if="product" class="max-w-2xl mx-auto bg-white rounded-lg p-6 text-center">
      <img :src="product.image" :alt="product.title" class="w-48 h-48 object-contain mx-auto mb-4" />
      <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
      <p class="text-gray-600 mb-4">{{ product.description }}</p>
      <span class="text-2xl font-bold text-orange-500">{{ product.price }} $</span>
    </div>
    <div v-else class="text-center">در حال بارگذاری...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from '~/components/Header.vue'

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  const res = await fetch(`https://fakestoreapi.com/products/${route.params.id}`)
  product.value = await res.json()
})
</script>

<style scoped>
.product-page {
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
}
.product-page img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.price {
  font-size: 1.5rem;
  color: #e67e22;
  font-weight: bold;
}
</style> 