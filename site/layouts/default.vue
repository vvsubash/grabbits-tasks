<template>
    <div>
        <nav>
            <ul v-if="mainStore.isLoggedIn">
                <li @click="signOut">Signout</li>
            </ul>
        </nav>
        <slot />

    </div>
</template>

<script setup lang="ts">
const mainStore = useMainStore()

const signOut = () => {
    mainStore.setLoggedInState(false);
    navigateTo('/login')
}

</script>

<style scoped>

</style>