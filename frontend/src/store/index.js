import Vue from 'vue'
import Vuex from 'vuex'
import { allStore } from './allStore';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        all: allStore
    }
})