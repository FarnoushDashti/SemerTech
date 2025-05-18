<template>
  <div class="flex items-center justify-between bg-white rounded-2xl px-4 py-2 mb-6 shadow">
    <span class="text-gray-400 text-sm font-bold">فیلترهای اعمال شده</span>

    <div class="flex gap-2 flex-wrap">
      <template v-for="filter in filters" :key="filter.key + (filter.value || '')">
        <span class="flex items-center gap-1 bg-pink-50 text-pink-600 rounded-xl px-3 py-1 text-sm font-bold">
          <span v-html="filter.icon"></span>
          {{ filter.label }}
          <button @click="$emit('remove', filter)" class="text-pink-400 hover:text-pink-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </span>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  filters: Array
})
defineEmits(['remove'])
</script> 