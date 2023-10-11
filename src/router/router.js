import { createRouter, createWebHistory } from "vue-router";
const Home = ()=> import('../components/Home.vue')
const Users = ()=>import('../components/Users.vue')
const UserDetails = ()=>import('../components/UserDetails.vue')

const routes = [
    {
        path : '/',
        name : 'home',
        component : Home
    },
    {
        path : '/user',
        name : 'users',
        component : Users
    },
    {
        path : '/user/:id',
        name : 'userDetails',
        component : UserDetails
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router