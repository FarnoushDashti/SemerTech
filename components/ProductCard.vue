<template>
  <div class="w-48 border border-gray-200 rounded-lg p-4 bg-white text-center transition hover:shadow-md">
    <NuxtLink :to="`/products/${product.id}`">
      <img :src="product.image" :alt="product.title" class="w-24 h-24 object-contain mx-auto mb-2" />
      <h3 class="text-lg font-semibold mb-1">{{ product.title }}</h3>
      <p class="text-gray-600">{{ product.price }} $</p>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ product: Object })
</script> 