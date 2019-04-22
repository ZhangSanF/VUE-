
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//状态对象
const state = {
    count:3
}
//改变状态里的值需要mutations
const mutations = {
    add(state,n){
        state.count += n;
    },
    reduce(state){
        state.count --;
    }
}
//vuex中的计算属性（过滤）
const getters = {
    count:function(state){
        return state.count +=10;
    }
}
//异步修改状态
const actions = {
    addAction(context){
        context.commit('add',10);
        setTimeout(()=>{
            context.commit('reduce')},5000);
            console.log('我比reduce先执行')
    },
    reduceAction({commit}){
        commit('reduce')
    }
}

//暴露出去
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})