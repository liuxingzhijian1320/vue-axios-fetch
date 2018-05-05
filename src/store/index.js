import Vue from 'vue'
import Vuex from 'vuex'

import douyu from './modules/douyu.js'
import study from './modules/study.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        douyu,
        study
    },
    strict: process.env.NODE_ENV !== 'production'
})