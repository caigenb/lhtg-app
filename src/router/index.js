import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Login from '../components/system/Login'
import Register from '../components/system/Register'
import Index from '../components/home/Index'
import UserManage from '../components/usermanage/UserManage'
import userCharts from '../components/statistic/userCharts'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'登录',
    component:Login
  },
  {
    path:'/register',
    name:'注册',
    component:Register
  },
  {
    path:'/index',
    name:'隐患上报',
    component:Index,
    children:[
      {
        path: '/userManage',
        name: '上报记录',
        component:UserManage
      },
      {
        path:'/userCharts',
        name:'统计信息',
        component:userCharts
      }
    ]
  }
]



const router = new VueRouter({
  routes
})


// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});


export default router
