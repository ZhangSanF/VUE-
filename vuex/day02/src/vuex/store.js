import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        count:1
    },
    mutations:{
        changeCount(state,data){
            //console.log(data)
            //console.log(state.count)
            state.count = ++data
        }
    }
})