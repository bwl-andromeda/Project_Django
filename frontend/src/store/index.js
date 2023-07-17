import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '', 
    },
    getters: {
        IsLogggedIn: state => !!state.token
    },
    mutations: {
        setToken(state,token) {
            state.token = token;
            localStorage.setItem('token',token);
        },
        removeToken(state) {
            state.token = '';
            localStorage.setItem('token', "");
        }
    },
    actions:{
        async login({commit}, {username, password, router}) {
           const response = await axios.post('https://t0shiik.pythonanywhere.com/api-token-auth/', {
                username: username,
                password: password,
            })
                const token = response.data.token
                commit('setToken', token)
                router.push('/')

        } 
    },
}