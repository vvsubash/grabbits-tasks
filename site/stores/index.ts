import { defineStore } from "pinia";

export const useMainStore = defineStore('main', () => {
    const isLoggedIn = ref<boolean>(false);
    const setLoggedInState = (authState:boolean) => {
        isLoggedIn.value = authState
    }
    return {
        isLoggedIn,
        setLoggedInState
    }
})