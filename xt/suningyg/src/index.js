import Vue from 'vue/dist/vue'
import Vuex from 'vuex'
import 'weui'
import './asserts/index.css'
// import './rem.js'
//路由
import router from './routers/index.js'
// import app from './routers/index.js'
//组件
import store from './store/vuex.js'
import storei from './store/index.js'
import Related from './pages/related.vue'
import Tabbar from './component/tabbar.vue'
// import App from './app.vue'
Vue.use(Vuex);
// new Vue({
//     router,
//     store,
//     render: h => h(App),
// }).$mount('#app')
new Vue({
    el: "#app",
    store,
    //创建挂载根实例
    router,
    data: {
        state: storei.state
    },
    template: `
        <div>
            <keep-alive>
                <router-view :key="$route.fullPath"/>
            <Related/>
            </keep-alive>
        </div>
    `,
    components: {
        Related,
        // Tabbar
    },
    computed: {

    }
})
// 创建挂载根实例
// const app = new Vue({
//     router
// }).$mount('#app')
// var component = new MyComponent().$mount()
// document.getElementById('app').appendChild(component.$el)