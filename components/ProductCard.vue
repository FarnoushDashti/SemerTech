<template>
  <div class="w-full sm:w-64 border border-gray-200 rounded-2xl p-5 bg-white text-center transition hover:shadow-lg flex flex-col justify-between h-full">
    <NuxtLink :to="`/products/${product.id}`">
      <img :src="product.image" :alt="product.title" class="w-full h-40 object-contain mx-auto mb-4 rounded-xl bg-gray-50" />
      <h3 class="text-base font-semibold mb-2 truncate">{{ product.title }}</h3>
      <p class="text-gray-500 text-sm mb-3">{{ product.category }}</p>
    </NuxtLink>
    <div class="mt-auto">
      <p class="text-lg font-bold text-gray-800 mb-3">{{ product.price }} $</p>
      <NuxtLink :to="`/products/${product.id}`" class="inline-block w-full bg-pink-500 text-white py-2 rounded-xl font-bold hover:bg-pink-600 transition">مشاهده جزئیات</NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({ product: Object })
</script> 