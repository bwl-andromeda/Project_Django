import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    books: [] // Добавлено свойство "books" для хранения данных о книгах
  },
  getters: {
    isLoggedIn: state => !!state.token
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    removeToken(state) {
      state.token = '';
      localStorage.setItem('token', '');
    },
    initializeStore(state, payload) {
      state.books = payload.books;
    }
  },
  actions: {
    async login({ commit }, { username, password, router }) {
      const response = await axios.post('https://mynikitaivanov1.pythonanywhere.com/api-token-auth/', {
        username: username,
        password: password,
      });
      
      const token = response.data.token;
      commit('setToken', token);

      // Инициализация хранилища с данными о книгах
      const booksResponse = await axios.get('https://api.example.com/books');
      const books = booksResponse.data;
      commit('initializeStore', { books });

      router.push('/');
    }
  }
});