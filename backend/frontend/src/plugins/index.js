import axios from 'axios';
import store from '@/store';

const instance = axios.create({
    baseURL: 'https://sdkmynikita.pythonanywhere.com/'
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Token ${localStorage.getItem('token')}`
        }

        return config
    });

export default {
    install(Vue) {
        Vue.prototype.$ajax = instance;
    }
}
