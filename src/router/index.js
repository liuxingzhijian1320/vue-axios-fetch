import Vue from 'vue'
import Router from 'vue-router'
import setTitle from 'src/assets/scripts/settitle.js'; // 设置页面标题

// 页面
import home from 'src/views/home'
import proxyTable from 'src/views/proxyTable'
import vuexProxyTable from 'src/views/vuexProxyTable'
import study from 'src/views/study'
import email from 'src/views/email'


Vue.use(Router)

const router = new Router({
    mode: 'hash', // ['history', 'hash']
    linkActiveClass: 'active', // active class 名称
    scrollBehavior(to, from, savedPosition) {
        // 后退页面时, 保留滚动位置
        if (savedPosition) {
            return savedPosition;
        }
        return { x: 0, y: 0 };
    },

    routes: [{
            path: '/',
            name: 'home',
            component: home,
            meta: {
                title: '首页',
            },
            redirect: { //重定项 一面一打开显示那个页面
                name: 'proxyTable',
            },
            children: [{
                    path: '/proxyTable',
                    name: 'proxyTable',
                    component: proxyTable,
                    // meta: {
                    //     title: '反向代理',
                    // },
                },
                {
                    path: '/vuexProxyTable',
                    name: 'vuexProxyTable',
                    component: vuexProxyTable,
                    // meta: {
                    //     title: '反向代理',
                    // },
                },
            ]
        },
        {
            path: '/study',
            name: 'study',
            component: study,
            meta: {
                title: 'vuex的学习',
            },
        },
        {
            path: '/email',
            name: 'email',
            component: email,
            meta: {
                title: '发邮件',
            },
        },

        {
            path: '*',
            redirect: {
                path: '/'
            },
        },
    ]
})



router.beforeEach((to, from, next) => {
    next()
})

// 路由变化, 关闭弹窗
router.afterEach(function(to) {
    if (to.meta && to.meta.title) {
        //console.info(to.meta.title)
        setTitle(to.meta.title);
    }
    // store.commit('closeModal');
    // MessageBox.close();
});

export default router;