<template>
  <div class="bg-slate-100 min-h-screen font-sans">
    <div class="container mx-auto px-2 md:px-4 py-4 md:py-8">
      <!-- Breadcrumb -->
      <nav class="text-xs md:text-sm text-slate-500 text-sm flex items-center gap-1 md:gap-2 mb-4 md:mb-6 px-2">
        <IconHome class="h-5 w-5" stroke="2" />
        <IconChevronLeft class="h-5 w-5" stroke="2" />

        <NuxtLink to="/products" class="hover:text-rose-600 transition">لیست محصولات</NuxtLink>
        <IconChevronLeft class="h-5 w-5" stroke="2" />
        <span class="truncate max-w-[120px] md:max-w-xs" v-if="product">{{ product.title }}</span>
      </nav>
      <!-- Product Card -->
      <div class="bg-white rounded-3xl shadow-lg p-2 md:p-6 mb-6 flex flex-col gap-4">
        <div class="flex flex-col gap-4 items-center md:items-start">
          <div class="flex-1 flex flex-col items-center md:items-end justify-center gap-2">
            <h1 class="text-lg md:text-xl font-bold text-blue-950 text-center md:text-right">{{ product?.title }}</h1>
          </div>
          <div class="relative w-full rounded-2xl overflow-hidden max-h-[441px] bg-gray-100 flex items-center justify-center">
            <img
              :src="product?.image"
              :alt="product?.title"
              class="object-contain max-h-[441px] max-w-full w-auto h-auto mx-auto"
            />
            <button class="absolute top-3 right-3 bg-white border border-gray-200 rounded-xl p-2 shadow hover:bg-gray-50 transition" @click="showZoom = true">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-4.553a1.5 1.5 0 00-2.121-2.121L13 7.879M9 14l-4.553 4.553a1.5 1.5 0 002.121 2.121L11 16.121"/></svg>
            </button>
          </div>

        </div>
      </div>
      <!-- Technical Specs -->
      <div class="bg-white rounded-3xl shadow p-2 md:p-6">
        <div class="text-blue-950 font-bold text-base md:text-xl mb-4 text-right">مشخصات فنی</div>
        <div class="flex flex-col gap-3">
          <div class="flex md:flex-row flex-col gap-3">
            <div class="bg-slate-50 rounded-xl py-5 px-4 text-gray-400 lg:w-1/4 w-full md:w-1/2 mb-2 md:mb-0 font-bold text-right flex items-center">قیمت</div>
            <div class="bg-slate-50 rounded-xl py-5 px-4 text-right lg:w-3/4 w-full md:w-1/2 font-bold flex items-center ">{{ product ? product.price.toLocaleString() + ' تومان' : '-' }}</div>
          </div>
          <div class="flex md:flex-row flex-col gap-3">
            <div class="bg-slate-50 rounded-xl py-5 px-4 mb-2 md:mb-0 text-gray-400 lg:w-1/4 w-full md:w-1/2 font-bold text-right flex items-center">توضیحات</div>
            <div class="bg-slate-50 rounded-xl py-5 px-4 lg:w-3/4 w-full md:w-1/2 flex ">
              <ul class="list-disc pr-4 space-y-1 w-full">
                <li v-for="line in (product?.description ? product.description.split('\n') : [])" :key="line">{{ line }}</li>
              </ul>
            </div>
          </div>
          <div class="flex md:flex-row flex-col gap-3">
            <div class="bg-slate-50 rounded-xl py-5 px-4 text-gray-400 lg:w-1/4 w-full md:w-1/2 mb-2 md:mb-0 font-bold text-right flex items-center">دسته‌بندی</div>
            <div class="bg-slate-50 rounded-xl py-5 px-4 text-right lg:w-3/4 w-full md:w-1/2 flex items-center ">{{ product?.category || '-' }}</div>
          </div>
          <div class="flex md:flex-row flex-col gap-3">
            <div class="bg-slate-50 rounded-xl py-5 px-4 text-gray-400 lg:w-1/4 w-full md:w-1/2 mb-2 md:mb-0 font-bold text-right flex items-center">رتبه</div>
            <div class="bg-slate-50 rounded-xl py-5 px-4 text-right lg:w-3/4 w-full md:w-1/2 flex items-center ">{{ product?.rating?.rate || '-' }}</div>
          </div>
          <div class="flex md:flex-row flex-col gap-3">
            <div class="bg-slate-50 rounded-xl py-5 px-4 text-gray-400 lg:w-1/4 w-full md:w-1/2 mb-2 md:mb-0 font-bold text-right flex items-center">تعداد</div>
            <div class="bg-slate-50 rounded-xl py-5 px-4 text-right lg:w-3/4 w-full md:w-1/2 flex items-center ">{{ product?.rating?.count || '-' }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal for zoomed image -->
    <div v-if="showZoom" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div class="relative bg-white rounded-2xl p-2 md:p-4 shadow-lg flex flex-col items-center">
        <button class="absolute top-2 left-2 text-gray-400 hover:text-rose-600" @click="showZoom = false">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <img :src="product?.image" :alt="product?.title" class="max-w-[90vw] max-h-[80vh] object-contain rounded-xl" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { NuxtLink } from '#components'
import { IconChevronLeft , IconHome} from '@tabler/icons-vue'

const route = useRoute()
const product = ref(null)
const showZoom = ref(false)

onMounted(async () => {
  const res = await axios.get(`https://fakestoreapi.com/products/${route.params.id}`)
  product.value = res.data
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