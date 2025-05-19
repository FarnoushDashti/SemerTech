<template>
  <div class="w-full sm:w-64 sm:h-64 lg:w-84 lg:h-84  md:w-84 md:h-84 border border-gray-200 rounded-2xl p-2 bg-white text-center transition hover:shadow-lg flex flex-col justify-between h-full">
    <NuxtLink :to="`/products/${product.id}`">
      <img :src="product.image" :alt="product.title" class="w-full h-40 object-contain mx-auto mb-4 rounded-xl bg-gray-50" />
      <h3 class="text-base font-semibold mb-2 truncate">{{ product.title }}</h3>
    </NuxtLink>
    <div class="mt-auto">
      <NuxtLink :to="`/products/${product.id}`" class="inline-flex items-center justify-center gap-2 w-full text-rose-600 border border-gray-200 bg-white py-2 rounded-xl font-bold hover:bg-pink-600 hover:text-white transition">
        مشاهده جزئیات
        <IconChevronLeft class="h-5 w-5" stroke="2" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { IconChevronLeft } from '@tabler/icons-vue'
defineProps({ product: Object })
</script> 