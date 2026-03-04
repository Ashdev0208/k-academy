<script setup>
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'

const route = useRoute()
</script>

<template>
  <Navbar />

  <router-view></router-view>

  <Footer />
</template>

<style></style>
