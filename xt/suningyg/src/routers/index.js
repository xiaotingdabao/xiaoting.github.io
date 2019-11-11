import Vue from "vue/dist/vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import Related from "../pages/related.vue"
import Classify from "../pages/classify.vue"
import Roblist from "../pages/roblist.vue"
import Shopcart from "../pages/shopcart.vue"
import Mine from "../pages/mine.vue"
import Reg from "../pages/reg.vue"
import Detail from "../pages/detail.vue"
import Xsearch from "../component/xsearch.vue"
//定义路由
const routes = [{
    path: '/related',
    name: 'related',
    component: Related
}, {
    path: '/classify',
    name: 'classify',
    component: Classify
}, {
    path: '/roblist',
    name: 'roblist',
    component: Roblist
}, {
    path: '/shopcart',
    name: 'shopcart',
    component: Shopcart
}, {
    path: '/mine',
    name: 'mine',
    component: Mine
}, {
    path: '/reg',
    name: 'reg',
    component: Reg
}, {
    // path: '/detail',
    // name: 'detail',
    // component: Detail
    path: '/detail/:img/:price',
    name: 'detail',
    component: () => import('../pages/detail.vue')
}, {
    path: '/xsearch',
    name: 'xsearch',
    component: Xsearch
}]
//创建router实例，传routes配置
const router = new VueRouter({
    // mode: 'history',
    routes
})
// 创建挂载根实例
// const app = new Vue({
//     router
// }).$mount('#app')
//路由守卫：进所有路由之前都要判断
// router.beforeEach((to,from,next)=>{
//     window.console.log(to,from,next);
//     if(window.sessionStorage.getItem('token')==='124'||to.name==='login'){
//         next()
//     }else{
//         router.push({
//             name:'login'
//         })
//     }
// })
//模块化
export default router