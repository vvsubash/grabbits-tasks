<template>
    <div>
        <div>
            <fieldset>
                <label for="user-name">User Name</label>
                <input type="text" v-model="userName" id="user-name">
            </fieldset>
            <fieldset>
                <label for="password">Password</label>
                <input type="password" v-model="password" id="password">
            </fieldset>

            <button @click="login">Submit</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { routerKey } from 'vue-router';

const userName = ref('')
const password = ref(null)

const login = () => {

    navigateTo('/')
}
</script>

<style scoped>

</style>