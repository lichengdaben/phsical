import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/workstationbooking/Home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/workstationbooking/SelectLocation',
    name: 'SelectLocation',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectLocation.vue')
  },
  {
  path: '/workstationbooking/DateTimeChoose',
  name: 'DateTimeChoose',
  component: () => import(/* webpackChunkName: "about" */ '../views/DateTimeChoose.vue')
},
{
  path: '/workstationbooking/WorkstationGroup',
  name: 'WorkstationGroup',
  component: () => import(/* webpackChunkName: "about" */ '../views/WorkstationGroup.vue')
},
{
  path: '/workstationbooking/BookingDetails',
  name: 'BookingDetails',
  component: () => import(/* webpackChunkName: "about" */ '../views/BookingDetails.vue')
},
{
  path: '/workstationbooking/BookingConfirmation',
  name: 'BookingConfirmation',
  component: () => import(/* webpackChunkName: "about" */ '../views/BookingConfirmation.vue')
},
{
  path: '/LibraryPageview',
  name: 'LibraryPageview',
  component: () => import(/* webpackChunkName: "about" */ '../views/LibraryPageView.vue')
},


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


