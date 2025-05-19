<template>
  <aside class="w-full lg:w-1/4 flex-shrink-0">
    <!-- فیلتر و جستجو -->
    <div class="bg-white rounded-2xl p-4 mb-4 shadow flex flex-col gap-6">
      <form @submit.prevent class="flex flex-col gap-3">
        <label class="text-gray-700 font-bold mb-1">فیلتر و جستجو</label>
        <div class="relative flex items-center">
          <input :value="search" @input="$emit('update:search', $event.target.value)" type="text" placeholder="جستجو..." class="w-full border-2 border-rose-600 rounded-xl px-10 py-2 focus:outline-none text-sm font-bold text-gray-700 placeholder-gray-400" />
          <svg v-if="search" @click="$emit('update:search', '')" xmlns='http://www.w3.org/2000/svg' class='absolute left-10 h-5 w-5 text-rose-600 hover:text-rose-600 cursor-pointer' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12'/></svg>
          <svg xmlns='http://www.w3.org/2000/svg' class='absolute left-3 h-5 w-5 text-rose-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z'/></svg>
        </div>
        <button type="submit" class="bg-rose-600 text-white rounded-xl py-2 font-bold text-base hover:bg-rose-600/90 transition">جستجو</button>
      </form>
    </div>
    <!-- مرتب سازی -->
    <div class="bg-white rounded-2xl p-4 mb-4 shadow flex flex-col gap-4">
      <button @click="isSortOpen = !isSortOpen" class="flex items-center justify-between w-full mb-1 focus:outline-none">
        <label class="text-gray-700 font-bold flex items-center gap-2 cursor-pointer">
          مرتب سازی
        </label>
        <svg :class="[isSortOpen ? 'rotate-180' : '', 'transition-transform h-5 w-5 text-gray-400']" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div v-if="isSortOpen" class="flex flex-col gap-2 mt-2">
        <label class="flex items-center gap-2 cursor-pointer text-sm font-bold">
          <input type="radio" :checked="sort==='count-asc'" @change="$emit('update:sort', 'count-asc')" class="hidden" />
          <span class="w-5 h-5 flex items-center justify-center rounded-full border-2" :class="sort==='count-asc' ? 'border-rose-600' : 'border-gray-300'">
            <span v-if="sort==='count-asc'" class="w-3 h-3 bg-rose-600 rounded-full"></span>
          </span>
          تعداد کم به زیاد
        </label>
        <label class="flex items-center gap-2 cursor-pointer text-sm font-bold">
          <input type="radio" :checked="sort==='count-desc'" @change="$emit('update:sort', 'count-desc')" class="hidden" />
          <span class="w-5 h-5 flex items-center justify-center rounded-full border-2" :class="sort==='count-desc' ? 'border-rose-600' : 'border-gray-300'">
            <span v-if="sort==='count-desc'" class="w-3 h-3 bg-rose-600 rounded-full"></span>
          </span>
          تعداد زیاد به کم
        </label>
        <label class="flex items-center gap-2 cursor-pointer text-sm font-bold">
          <input type="radio" :checked="sort==='price-desc'" @change="$emit('update:sort', 'price-desc')" class="hidden" />
          <span class="w-5 h-5 flex items-center justify-center rounded-full border-2" :class="sort==='price-desc' ? 'border-rose-600' : 'border-gray-300'">
            <span v-if="sort==='price-desc'" class="w-3 h-3 bg-rose-600 rounded-full"></span>
          </span>
          قیمت زیاد به کم
        </label>
        <label class="flex items-center gap-2 cursor-pointer text-sm font-bold">
          <input type="radio" :checked="sort==='price-asc'" @change="$emit('update:sort', 'price-asc')" class="hidden" />
          <span class="w-5 h-5 flex items-center justify-center rounded-full border-2" :class="sort==='price-asc' ? 'border-rose-600' : 'border-gray-300'">
            <span v-if="sort==='price-asc'" class="w-3 h-3 bg-rose-600 rounded-full"></span>
          </span>
          قیمت کم به زیاد
        </label>
      </div>
    </div>
    <!-- دسته بندی -->
    <div class="bg-white rounded-2xl p-4 shadow flex flex-col gap-4">
      <button @click="isCategoryOpen = !isCategoryOpen" class="flex items-center justify-between w-full mb-1 focus:outline-none">
        <label class="text-gray-700 font-bold flex items-center gap-2 cursor-pointer">
          دسته بندی
        </label>
        <svg :class="[isCategoryOpen ? 'rotate-180' : '', 'transition-transform h-5 w-5 text-gray-400']" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div v-if="isCategoryOpen">
        <div v-for="(cat, i) in categories" :key="cat" class="mb-3">
          <label class="flex items-center justify-between gap-2 cursor-pointer text-base font-bold">
            <input type="checkbox" :checked="selectedCategories.includes(cat)" @change="$emit('update:selectedCategories', toggleCategory(cat))" class="hidden" />
            <span :class="[
              'w-5 h-5 rounded border-2 flex items-center justify-center',
              selectedCategories.includes(cat) ? 'border-rose-600 bg-rose-600/10' : 'border-gray-300 bg-white'
            ]">
              <span v-if="selectedCategories.includes(cat)" class="w-3 h-3 bg-rose-600 rounded"></span>
            </span>
            <span class="text-gray-700 flex-1 text-right">{{ categoryLabels[cat] || cat }}</span>
            <span :class="[
              'w-10 h-10 flex items-center justify-center rounded-lg text-white text-base font-bold',
              selectedCategories.includes(cat) ? 'bg-rose-600' : 'bg-gray-900'
            ]">
              {{ categoryCounts[cat] || 0 }}
            </span>
          </label>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
const props = defineProps({
  search: String,
  selectedCategories: Array,
  sort: String,
  categories: Array,
  categoryLabels: Object,
  categoryCounts: Object
})
const emit = defineEmits(['update:search', 'update:selectedCategories', 'update:sort'])
const isCategoryOpen = ref(true)
const isSortOpen = ref(true)
function toggleCategory(cat) {
  const arr = [...props.selectedCategories]
  const idx = arr.indexOf(cat)
  if (idx > -1) arr.splice(idx, 1)
  else arr.push(cat)
  return arr
}
</script> 