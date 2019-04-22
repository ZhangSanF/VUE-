<template>
  <div class="hello">
   <h1>我是test3</h1>
   <span>test3---{{test3}}</span>
  </div>
</template>

<script>
export default {
  name: 'test3',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
      test3(){
            return this.$store.state.count
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
