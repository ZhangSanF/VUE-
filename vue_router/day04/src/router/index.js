import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import About from '@/components/about'
import Sets from '@/components/sets'
import My from '@/components/my'
import Login from '@/components/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      children:[
        {path:'/',component:Home,meta:{showFooter:true}},
        {path:'/about',component:About,meta:{showFooter:true}},
        {path:'/sets',component:Sets,meta:{showFooter:true}},
        {path:'/my',component:My,
            beforeEnter:(to,from,next)=>{//路由守卫
              if(to.path == '/my'){
                  if(true){
                    next();
                  }else{
                    next('/log_in');
                  }
              }else{
                next();
              }
          }
        }
      ]
    },
    {path:'/log_in',component:Login}
  ]
})

