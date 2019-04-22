<template>
  <div class="hello">
    123
  </div>
</template>

<script>
import {getRecommend} from '@/js/api'
import {ERR_OK} from '@/js/const'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    this._getRecommend()
  },
  methods:{
    _getRecommend(){
      getRecommend().then((res)=>{
        if(res.code === ERR_OK){
          console.log(res)
        }
      })
    }
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
