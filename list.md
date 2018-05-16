##### $route 提示未定义
1. npm install vue-router@2.5.16
2. main.js 导入 `import VueRouter from 'vue-router'`
3. main.js `Vue.use(VueRouter)`

##### 路由实现
main.js中：
````
const routes = [ //定义路由
    { path: '/',component: Main},
    { path: '/main',component: Main},
    { path: '/form',component: Form}
]

const router = new VueRouter({//创建路由实例
    routes
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
````