import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Auth from './components/auth/Auth.vue';
import SignIn from './components/auth/SignIn.vue';
import SignUp from './components/auth/SignUp.vue';
import Confirm from './components/auth/Confirm.vue';
import Dashboard from './components/Dashboard.vue';
import Books from './components/books/Books.vue';

import store from './store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      redirect:'/auth/signin',
      children: [
        {
        path: 'signin',
        name: 'signin',
        component: SignIn,
        },
        {
          path: 'signup',
          name: 'signup',
          component: SignUp,
        },
        {
          path: 'confirm',
          name: 'confirm',
          component: Confirm,
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },
    { path: '*',
      redirect: '/'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
       beforeEnter (to, from, next) {
          if(store.state.auth.authorized){
            next()
          }else{
            next('/signin')
          }
      }
    }
  ]
})

export default router;