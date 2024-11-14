import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/main'
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../views/MainView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
