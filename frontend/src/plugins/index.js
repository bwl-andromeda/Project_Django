import axios from 'axios';
import store from '@/store';

const instance = axios.create({
    baseURL: ''
});

instance.interceptors.request.use(
    (config) => {
        const token = store.state.token;

        if (token) {
            config.headers.Authorization = `Token ${token}`;
        }

        return config
    });

export default {
    install(Vue) {
        Vue.prototype.$ajax = instance;
    }
}