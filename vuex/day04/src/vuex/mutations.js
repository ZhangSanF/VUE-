//直接更新state的多个方法的对象

import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS} from './mutation-types'

export default {
    // [RECEIVE_ADDRESS] (state,{address}) {
    //     state.address = address
    // }

    add(state,data){
        state.count += data
    },
    reduce(state){
        state.count--
    },
    addFf(state,data){
        state.ff = data;
    }
}