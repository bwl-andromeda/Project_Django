import axios from "axios";

export const allStore = {
    namespaced: true,
    state: () => ({
        token: localStorage.getItem('token') || ''
    }),
    getters: {
        isLoggedIn: state => !!state.token,
        getToken: state=> state.token
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        removeToken(state) {
            state.token = ''
            localStorage.setItem('token', '')
        }
    },
    actions: {
        async login({commit}, {username, password, router}) {
            const response = await axios.post('https://sdkmynikita.pythonanywhere.com/api-token-auth/', {
                username: username,
                password: password,
            })
            const token = response.data.token
            commit('setToken', token)
            router.push('/')
        }
    },
}