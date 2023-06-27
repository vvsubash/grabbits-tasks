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
const mainStore = useMainStore()


const userName = ref('')
const password = ref(null)

const login = async () => {
    const { data, pending, error, refresh } = await useFetch('/api/auth',{
        method: 'POST',
        body: {
            userName: userName.value,
            password: password.value
        }
    })

    if(data.value?.message === 'ok') {
        mainStore.setLoggedInState(true);
        navigateTo('/')
    } else {
        alert(data.value?.message)
    }
}
</script>

<style scoped>

</style>