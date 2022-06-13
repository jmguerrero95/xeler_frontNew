import { createApp } from 'vue'
import Home from "@/views/Home.vue";
import Login from "@/views/login.vue";
import cal from "@/components/Calculadora-app.vue";
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
        }
    ]
    
    const router = createRouter({
        history : createWebHistory(),
        routes : routeInfos
    })
    
    export default router;