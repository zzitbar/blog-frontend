import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import ElementUI from 'element-ui'
import { Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import Form from './components/form.vue'
import Main from './components/Main.vue'
import ArticleList from './components/articleList.vue'


// import App from './components/form.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
// Vue.use(Axios)

const routes = [ //定义路由
    { path: '/',component: Main},
    { path: '/main',component: Main},
    { path: '/form',component: Form},
    { path: '/aitlcle',component: ArticleList},
]

const router = new VueRouter({//创建路由实例
    routes
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
