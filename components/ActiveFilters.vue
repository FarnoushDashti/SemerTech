<script setup>
import { IconSortAscending, IconSortDescending, IconSearch } from '@tabler/icons-vue'

defineProps({
  filters: Array
})
defineEmits(['remove'])
</script>

<template>
  <div class="flex items-center justify-between bg-white rounded-3xl px-4 py-5 mb-6 shadow">
    <span class="text-gray-400 text-sm font-bold">فیلترهای اعمال شده</span>
    <div class="flex gap-2 flex-wrap">
      <template v-for="filter in filters" :key="filter.key + (filter.value || '')">
        <span class="flex items-center gap-1 bg-pink-100 text-blue-950 rounded-2xl px-3 py-2 text-sm font-bold">
          <IconSearch v-if="filter.key === 'search'" class="h-4 w-4" />
          <IconSortAscending v-else-if="filter.key === 'sort' && (filter.value === 'count-asc' || filter.value === 'price-asc')" class="h-4 w-4" />
          <IconSortDescending v-else-if="filter.key === 'sort' && (filter.value === 'count-desc' || filter.value === 'price-desc')" class="h-4 w-4" />
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          {{ filter.label }}
          <button @click="$emit('remove', filter)" class=" text-blue-950 hover:text-pink-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </span>
      </template>
    </div>
  </div>
</template>