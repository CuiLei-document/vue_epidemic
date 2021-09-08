import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import City from '../components/City.vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/home',
    component: Home
  },
  {
    path:'/home',
    component:Home
  },
  {
    path: '/city/:city',
    name: 'City',
    component: City,
    props: true
  },

  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
