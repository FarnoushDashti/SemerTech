<script setup>
import { IconPhoneCall, IconPhone, IconMessageQuestion } from '@tabler/icons-vue'
import { BookOpenIcon, Squares2X2Icon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const route = useRoute()
const isMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="container mx-auto flex items-center justify-between py-4 md:py-8 px-2 md:px-4">

      <!-- Hamburger (mobile only) -->
      <button class="md:hidden flex items-center justify-center w-12 h-12 rounded-xl border border-pink-300 text-pink-600" @click="isMenuOpen = true">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>

      <!-- دکمه تماس موبایل -->
      <button class="md:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-rose-600 text-rose-600" style="order:3;">
        <IconPhoneCall class="h-6 w-6 text-rose-600" />
      </button>

      <!-- منو دسکتاپ -->
      <nav class="flex-1 flex items-center justify-center gap-6 text-gray-700 text-base font-medium hidden md:flex">
        <NuxtLink 
          to="/products" 
          class="relative flex items-center gap-1 hover:text-pink-600 transition"
          :class="{ 'text-pink-600': route.path === '/products' }"
        >
          <Squares2X2Icon class="h-6 w-6" />
          لیست محصولات
          <span v-if="route.path === '/products'" class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-rose-600 rounded-full"></span>
        </NuxtLink>
        <NuxtLink 
          to="/consultation" 
          class="relative flex items-center gap-1 hover:text-pink-600 transition"
          :class="{ 'text-pink-600': route.path === '/consultation' }"
        >
          <BookOpenIcon class="h-6 w-6" />
          دریافت مشاوره
          <span v-if="route.path === '/consultation'" class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-rose-600 rounded-full"></span>
        </NuxtLink>
        <NuxtLink 
          to="/faq" 
          class="relative flex items-center gap-1 hover:text-pink-600 transition"
          :class="{ 'text-pink-600': route.path === '/faq' }"
        >
          <IconMessageQuestion class="h-6 w-6" />
          سوالات متداول
          <span v-if="route.path === '/faq'" class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-rose-600 rounded-full"></span>
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="relative flex items-center gap-1 hover:text-pink-600 transition"
          :class="{ 'text-pink-600': route.path === '/contact' }"
        >
          <IconPhone class="h-6 w-6" />
          تماس با ما
          <span v-if="route.path === '/contact'" class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-rose-600 rounded-full"></span>
        </NuxtLink>
      </nav>
      <!-- دکمه تماس دسکتاپ -->
      <button class="hidden md:flex items-center gap-2 bg-pink-600 text-white rounded-xl px-6 py-2 font-bold hover:bg-pink-700 transition text-base">
        <IconPhoneCall class="h-6 w-6" />
        تماس
      </button>
    </div>

    <!-- منوی موبایل -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-black/40 flex md:hidden">
        <div class="bg-white w-3/4 max-w-xs h-full shadow-lg p-6 flex flex-col gap-6">
          <button class="self-end mb-4 text-pink-600" @click="isMenuOpen = false">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <NuxtLink to="/products" class="flex items-center gap-2 py-2 font-bold text-gray-700" :class="{ 'text-pink-600': route.path === '/products' }" @click="isMenuOpen = false">
            <Squares2X2Icon class="h-6 w-6" /> لیست محصولات
          </NuxtLink>
          <NuxtLink to="/consultation" class="flex items-center gap-2 py-2 font-bold text-gray-700" :class="{ 'text-pink-600': route.path === '/consultation' }" @click="isMenuOpen = false">
            <BookOpenIcon class="h-6 w-6" /> دریافت مشاوره
          </NuxtLink>
          <NuxtLink to="/faq" class="flex items-center gap-2 py-2 font-bold text-gray-700" :class="{ 'text-pink-600': route.path === '/faq' }" @click="isMenuOpen = false">
            <IconMessageQuestion class="h-6 w-6" /> سوالات متداول
          </NuxtLink>
          <NuxtLink to="/contact" class="flex items-center gap-2 py-2 font-bold text-gray-700" :class="{ 'text-pink-600': route.path === '/contact' }" @click="isMenuOpen = false">
            <IconPhone class="h-6 w-6" /> تماس با ما
          </NuxtLink>
          <button class="mt-8 flex items-center justify-center bg-white border border-rose-600 text-rose-600 rounded-xl w-12 h-12">
            <IconPhoneCall class="h-6 w-6 text-rose-600" />
          </button>
        </div>
        <div class="flex-1" @click="isMenuOpen = false"></div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style> 