import Vue from 'vue/dist/vue'
import Vuex from 'vuex'
import 'weui'
import '../asserts/xsearch.css'
import Xsearch from '../component/xsearch.vue'
Vue.use(Vuex);
new Vue({
    template: `
        <div>
            <Xsearch/>
        </div>
    `,
    component: {
        Xsearch
    }
})