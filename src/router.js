import { createApp } from 'vue'
import Home from "@/views/Home.vue";
import Login from "@/views/login.vue";
import Register from "@/views/Register.vue";
import Reset from "@/views/Reset.vue";
import App from './App.vue'
    import { createRouter, createWebHistory } from "vue-router"
    const routeInfos = [
        {
            path : "/",
            component : Home
        },
        {
            path : "/login",
            component : Login
        },
        {
            path : "/register",
            component : Register
        },
        {
            path : "/reset",
            component : Reset
        }
    ]
    
    const router = createRouter({
        history : createWebHistory(),
        routes : routeInfos
    })
    
    export default router;