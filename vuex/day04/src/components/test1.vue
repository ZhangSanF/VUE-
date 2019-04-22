<template>
  <div class="hello">
    <button @click="add(10)">test1 click Me</button>
    <button @click="reduce">test1 click Me</button>
   <h1>我是test1</h1>
   <span @click="ff">10</span>
   <span>test1---{{count}}</span>
   <test2></test2>
   <test3></test3>
  </div>
</template>

<script>
import test2 from '@/components/test2'
import test3 from '@/components/test3'
import { mapState,mapMutations,mapGetters, mapActions } from 'vuex';
export default {
    components:{test2,test3},
  name: 'test1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapState(['count']),
  },
      
  methods:{
    ...mapMutations(['add','reduce']),
    ff(){
      //console.log(this.$store.state)
      console.log(this.$store.state.ff)
    }
  },
  mounted(){
      //console.log(this.$store.state.count)
      this.$store.commit('addFf','10')
      console.log(this.$store.state)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
