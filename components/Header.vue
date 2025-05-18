<script setup>
import { PhoneIcon, BookOpenIcon, Squares2X2Icon } from '@heroicons/vue/24/outline'
</script>

<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="container mx-auto flex items-center justify-between py-2 px-2 md:px-4">

      <!-- منو -->
      <nav class="flex-1 flex items-center justify-center gap-6 text-gray-700 text-base font-medium">
        <NuxtLink to="/products" class="flex items-center gap-1 hover:text-pink-600 transition">
          <Squares2X2Icon class="h-5 w-5" />
          لیست محصولات
        </NuxtLink>
        <NuxtLink to="#" class="flex items-center gap-1 hover:text-pink-600 transition">
          <BookOpenIcon class="h-5 w-5" />
          دریافت مشاوره
        </NuxtLink>
        <NuxtLink to="#" class="flex items-center gap-1 hover:text-pink-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h8M8 13h6m-7 4h8m-8-8h8m-8-4h8"/></svg>
          سوالات متداول
        </NuxtLink>
        <NuxtLink to="#" class="flex items-center gap-1 text-pink-600 relative">
          <PhoneIcon class="h-5 w-5" />
          تماس با ما
          <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-500 rounded-full"></span>
        </NuxtLink>
      </nav>
            <!-- دکمه تماس -->
            <button class="flex items-center gap-2 bg-pink-600 text-white rounded-xl px-6 py-2 font-bold hover:bg-pink-700 transition text-base">
        <PhoneIcon class="h-5 w-5" />
        تماس
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 12px 0;
  margin-bottom: 24px;
}
.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
}
</style> 