import fetch from 'src/api/proxy-request.js';


// 初始状态
const state = {
    category: [],
}


// 逻辑响应
const actions = {
    fetchHomeList({ commit }) {
        fetch({
            url: '/api/stream/date/2017-12-19?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6',
            method: 'GET',
        }).then((res) => {
            console.info('res', res.data)
            commit('fetchDataMutations', res.data)
                // return res.data;
        })
    }
}


// 数据改变
const mutations = {
    // 获取所有目录
    fetchDataMutations(state, data) {
        console.info('data', data, state.category)
        state.category = data
    }
}


// 读取数据
const getters = {
    categoryData: state => state.category
}


export default {
    state,
    getters,
    actions,
    mutations,
};