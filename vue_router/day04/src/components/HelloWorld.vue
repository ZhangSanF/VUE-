<template>
  <div class="hello">
    <router-link to="/">Home</router-link>
    <router-link to="about">about</router-link>
    <router-link to="sets">sets</router-link>
    <router-link to="my">my</router-link>

    <router-view/>

  <Comm v-if="$route.meta.showFooter"></Comm>
  </div>
</template>

<script>
import Comm from './comm'
export default {
  //name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{Comm},
  methods:{

  },
  mounted(){
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
