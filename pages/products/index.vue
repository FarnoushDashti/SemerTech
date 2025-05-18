<template>
  <div class="bg-[#f5f6fa] min-h-screen font-sans flex flex-col min-h-screen">
    <div class="container mx-auto px-2 md:px-4 py-6 flex flex-col lg:flex-row gap-6 flex-1">
      <!-- Sidebar Filters -->
      <FiltersPanel
        :search="search"
        :selectedCategories="selectedCategories"
        :sort="sort"
        :categories="categories"
        :categoryLabels="categoryLabels"
        :categoryCounts="categoryCounts"
        @update:search="search = $event"
        @update:selectedCategories="selectedCategories = $event"
        @update:sort="sort = $event"
      />
      <!-- خط نقطه‌چین وسط -->
      <div class="hidden lg:block w-px bg-[repeating-linear-gradient(180deg,#e5e7eb_0_4px,transparent_4px_12px)] mx-4"></div>
      <!-- Product List -->
      <main class="flex-1">
        <ActiveFilters :filters="activeFilters" @remove="handleRemoveFilter" />

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import ProductCard from '~/components/ProductCard.vue'
import FiltersPanel from '~/components/FiltersPanel.vue'
import ActiveFilters from '~/components/ActiveFilters.vue'

const products = ref([])
const categories = ref([])
const selectedCategories = ref([])
const search = ref('')
const sort = ref('count-asc')
const isCategoryOpen = ref(true)
const isSortOpen = ref(true)

const categoryLabels = {
  "men's clothing": "پوشاک مردانه",
  "women's clothing": "پوشاک زنانه",
  "jewelery": "جواهرات",
  "electronics": "الکترونیک"
}

onMounted(async () => {
  const [productsRes, categoriesRes] = await Promise.all([
    axios.get('https://fakestoreapi.com/products'),
    axios.get('https://fakestoreapi.com/products/categories')
  ])
  products.value = productsRes.data
  categories.value = categoriesRes.data

  // لاگ برای بررسی
  console.log('categories:', categories.value)
  console.log('product categories:', products.value.map(p => p.category))
})

const filteredProducts = computed(() => {
  let filtered = products.value
  if (selectedCategories.value.length > 0) {
    filtered = filtered.filter(p => selectedCategories.value.includes(p.category))
  }
  if (search.value.trim()) {
    filtered = filtered.filter(p => p.title.toLowerCase().includes(search.value.toLowerCase()))
  }
  // مرتب‌سازی
  if (sort.value === 'count-asc') {
    filtered = [...filtered].sort((a, b) => a.rating.count - b.rating.count)
  } else if (sort.value === 'count-desc') {
    filtered = [...filtered].sort((a, b) => b.rating.count - a.rating.count)
  } else if (sort.value === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price)
  } else if (sort.value === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price)
  }
  return filtered
})

const sortLabels = {
  'count-asc': 'تعداد',
  'count-desc': 'تعداد',
  'price-asc': 'قیمت',
  'price-desc': 'قیمت'
}
const sortIcons = {
  'count-asc': `<svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'/></svg>`,
  'count-desc': `<svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'/></svg>`,
  'price-asc': `<svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4'/></svg>`,
  'price-desc': `<svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4'/></svg>`
}
const activeFilters = computed(() => {
  const filters = []
  if (search.value) {
    filters.push({
      key: 'search',
      label: search.value,
      icon: `<svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z'/></svg>`
    })
  }
  selectedCategories.value.forEach(cat => {
    filters.push({
      key: 'category',
      value: cat,
      label: categoryLabels[cat] || cat,
      icon: `<svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'/></svg>`
    })
  })
  filters.push({
    key: 'sort',
    value: sort.value,
    label: sortLabels[sort.value],
    icon: sortIcons[sort.value]
  })
  return filters
})

function handleRemoveFilter(filter) {
  if (filter.key === 'search') search.value = ''
  if (filter.key === 'category') {
    selectedCategories.value = selectedCategories.value.filter(c => c !== filter.value)
  }
  if (filter.key === 'sort') {
    sort.value = 'count-asc'
  }
}

const categoryCounts = computed(() => {
  const counts = {}
  if (Array.isArray(products.value)) {
    for (const p of products.value) {
      counts[p.category] = (counts[p.category] || 0) + 1
    }
  }
  return counts
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