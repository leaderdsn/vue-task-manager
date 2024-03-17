<template>
  <AppHeader />
  <main class="main">
    <router-view />
  </main>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<style lang="sass">
@import '@/styles/main'
</style>
