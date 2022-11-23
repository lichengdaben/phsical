import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        //  path: '/workstationbooking/BookingSystem',
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },

    //{
    //    path: '/workstationbooking',
    //    name: 'WorkstationBooking',
    //    component: () => import(/* webpackChunkName: "about" */ '../views/workstationbooking.vue')
    //},
  

    {
        path: '/login',
        name: 'UserLogin',
        component: () => import(/* webpackChunkName: "about" */ '../views/UserLogin.vue')
    },
    
]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    base: '/app',
    routes
})

export default router


