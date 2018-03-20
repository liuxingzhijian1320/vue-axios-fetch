// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import mixins from './mixins';
import * as filters from './filters';


// mint-ui 指定 MessageBox Toast Indicator 引入
import MessageBox from 'mint-ui/lib/message-box';
import 'mint-ui/lib/message-box/style.css';
import Toast from 'mint-ui/lib/toast';
import 'mint-ui/lib/toast/style.css';
import Indicator from 'mint-ui/lib/indicator';
import 'mint-ui/lib/indicator/style.css';

window.MessageBox = MessageBox;
window.Toast = Toast;
window.Indicator = Indicator;

//过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});


Vue.config.productionTip = false

Vue.mixin(mixins);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})