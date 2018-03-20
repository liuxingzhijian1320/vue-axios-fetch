import Vue from 'vue'
import Vuex from 'vuex'

import douyu from './modules/douyu'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        douyu
    },
    strict: process.env.NODE_ENV !== 'production'
})