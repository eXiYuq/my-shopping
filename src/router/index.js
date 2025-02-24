import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由
import cart from '@/views/layout/cart.vue'
import layout from '@/views/layout'
import category from '@/views/layout/category.vue'
import home from '@/views/layout/home.vue'
import user from '@/views/layout/user.vue'
import { getInfo } from '@/utils/storage'

const login = () => import('@/views/login')
const myorder = () => import('@/views/myorder')
const pay = () => import('@/views/pay')
const prodetail = () => import('@/views/prodetail')
const searchindex = () => import('@/views/search/index.vue')
const searchlist = () => import('@/views/search/list.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: layout,
      children: [
        { path: '/home', component: home },
        { path: '/category', component: category },
        { path: '/cart', component: cart },
        { path: '/user', component: user }
      ]
    },
    { path: '/login', component: login },
    { path: '/myorder', component: myorder },
    { path: '/pay', component: pay },
    // 动态路由传参，确认将来是哪个商品，路由参数中携带id
    { path: '/prodetail/:id', component: prodetail },
    { path: '/searchindex', component: searchindex },
    { path: '/searchlist', component: searchlist }
  ]
})

const authUrl = ['/pay', '/myOrder']
router.beforeEach((to, from, next) => {
  if (!authUrl.includes(to.path)) {
    next()
    return
  }
  const token = getInfo().token
  console.log(token)
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
