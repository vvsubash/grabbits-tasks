<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">

const mainStore = useMainStore()

const setLoggedInState = () => mainStore.setLoggedInState(!mainStore.isLoggedIn)
</script>
