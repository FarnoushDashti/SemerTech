<template>
  <div dir="rtl">
    <Header />

    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import '~/assets/styles/main.css'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
</script>
