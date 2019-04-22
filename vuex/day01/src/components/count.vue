
<template>
    <div>
        <h2>{{msg}}</h2> <hr>
        <h3>{{$store.state.count}}--{{count}}</h3>

        <p>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="reduce">-</button>
        </p>

        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>

<script>
import store from '@/vuex/store';
//第二种方法直接赋值count   第三种
import { mapState,mapMutations,mapGetters, mapActions } from 'vuex';
export default {
    data(){
        return{
            msg:'hello Vuex'
        }
    },
    //第一种方法直接赋值count
    // computed:{
    //     count(){
    //         return this.$store.state.count;
    //     }
    // },

    //第二种方法直接赋值count
    // computed:mapState({
    //     count:state => state.count
    // }),

    //第三种
    computed:{
        ...mapState(['count']),
        // count(){
        //     return this.$store.getters.count;
        // }

       // ...mapGetters(['count'])
    },
    
    methods:{
        ...mapMutations(['reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
    store
}
</script>
