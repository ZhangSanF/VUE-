<template>
  <div class="hello">
    <button @click="change">test1 click Me</button>
   <h1>我是test1</h1>
   <span>test1---{{test1}}</span>
   <test2></test2>
   <test3></test3>
  </div>
</template>

<script>
import test2 from '@/components/test2'
import test3 from '@/components/test3'
import store from '@/vuex/store'
export default {
    components:{test2,test3},
  name: 'test1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
      test1(){
            return this.$store.state.count
      }
  },
  methods:{
      change(){
          this.$store.commit('changeCount',this.test1);
      }
  },
  mounted(){
      //console.log(this.$store.state.count)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
