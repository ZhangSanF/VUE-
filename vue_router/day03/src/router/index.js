import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  //mode:'history',//去掉页面地址栏上的#
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/params/:newsId/:newsTitle',//'/params/:newsId(\\d+)/:newsTitle'
      name: 'params',
      component: Params
      // beforeEnter:(to,from,next)=>{//路由中的钩子
      //   console.log(to);
      //   console.log(from);
      //   next();//固定写法跳转
      // }
    },
    {
      path: '/goHome',
      redirect:'/'
    },
    {
      path: '/goParams/:newsId/:newsTitle',
      redirect:'/params/:newsId/:newsTitle'
    },
    {
      path:'*',//404页面设置
      component:Error
    }
  ]
})
//alias:'/xxx'    别名 注意：在首页不起作用