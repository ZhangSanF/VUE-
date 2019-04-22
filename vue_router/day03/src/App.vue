<template>
  <div id="app">
    <img src="./assets/logo.png"> <br>
    <div>
      <button @click="goback">后退</button>
      <button @click="goqian">前进</button>
      <button @click="gohome">返回首页</button>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/params/198/dylan">params</router-link>
    <router-link to="/goHome">goHome</router-link>
    <router-link to="/goParams/121/like">goParams</router-link>

    <!-- fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
    fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
    fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
    fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除 -->
    <transition name="fade" mode="out-in">
      <router-view/>      
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goback(){
      this.$router.go(-1);//后退
    },
    goqian(){
      this.$router.go(1);//前进
    },
    gohome(){
      this.$router.push('/');//跳转页面
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity .5s;
}
</style>
