<template>
  <div>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const mainStore = useMainStore();

onBeforeMount(() => {
  if(!mainStore.isLoggedIn) {
    navigateTo('/login')
  }
})


</script>
