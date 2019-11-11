import Vuex from 'vuex'
import Vue from "vue/dist/vue"
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        author: 'xt',
        //更改tabbar高亮
        ticon: {
            //icon状态
            active1: true,
            active2: false,
            active3: false,
            active4: false,
            active5: false,
        },
        //用户登录存储信息
        user: {
            username: '',
            password: ''
        },
        //参数带数据进详情页
        dat: {
            img: "",
            price: ""
        }
    },
    //更改store状态提交mutations
    mutations: {
        setTicon(state, newValue) {
            state.ticon = newValue
        },
        setUser(state, newValue) {
            state.user = newValue
        },
        setDat(state, newValue) {
            state.dat = newValue
        }
    },
    //提交mutation
    actions: {
        setTicon(context, newValue) {
            context.commit('setTicon', newValue)
        },
        setUser(context, newValue) {
            context.commit('setUser', newValue)
        },
        setDat(context, newValue) {
            context.commit('setDat', newValue)
        }
    },
    //获得
    getters: {
        getTicon(state) {
            return state.ticon
        },
        getUser(state) {
            return state.user
        },
        getDat(state) {
            return state.dat
        }
    }
})