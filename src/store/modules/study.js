const state = {
    count: 0,
    name: '小叮当',
    testStore: '全局展示数据',
    list: [1, 12, 3, 4, 5, 6]
}

const getters = {
    name: state => state.name
}

const actions = {
    // 增加
    increment({ commit, state }) {
        commit('incrementMutations')
    },
    // 减少
    decrement({ commit, state }) {
        commit('decrementMutations')
    },
    // 荷载
    paramsCrement({ commit, state }, payload) {
        commit('paramsMutations', payload)
    },
    // action修改state
    actionUpdateState({ commit, state }, payload) {
        console.info('commit', commit, 'state', state)
        state.count += 10
        alert('你看，控制台报错了吧，action 里面是做异步操作，不能直接修改state的，只有mutations中才能修改数据')
            // commit('paramsMutations', payload)
    },
    // promise下的action操作
    promiseAction({ commit }) {
        return new Promise((resolve, reject) => {
            // setTimeout(() => {
            commit('promiseActionMutations')
            resolve()
                // }, 1000)
        })
    },

}

const mutations = {
    // 增加
    incrementMutations(state) {
        state.count++
    },
    // 减少
    decrementMutations(state) {
        state.count--
    },
    // 荷载
    paramsMutations(state, payload) {
        console.info(state, payload)
        state.count += payload.data
    },
    // promise下的mutations操作
    promiseActionMutations(state) {
        state.name = "小叮当小叮当小叮当小叮当"
        console.info('222');
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}