<template>
  <div class="product-card">
    <NuxtLink :to="`/products/${product.id}`">
      <img :src="product.image" :alt="product.title" />
      <h3>{{ product.title }}</h3>
      <p>{{ product.price }} $</p>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ product: Object })
</script>

<style scoped>
.product-card {
  width: 200px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 8px;
  background: #fff;
  text-align: center;
  transition: box-shadow 0.2s;
}
.product-card:hover {
  box-shadow: 0 2px 8px #eee;
}
.product-card img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style> 