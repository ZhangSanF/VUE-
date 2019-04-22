<template>
  <div class="hello">
    <button @click="change">test2 click Me</button>
   <h1>我是test2</h1>
   <span>test2---{{$store.state.count}}</span>
  </div>
</template>

<script>
export default {
  name: 'test2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      change(){
          //this.$store.commit('changeCount',this.test2)
      }
  },
  computed:{
      // test2(){
      //       return this.$store.state.count
      // }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
