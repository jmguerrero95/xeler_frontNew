import { createApp } from 'vue'
import Home from "@/views/Home.vue";
import cal from "@/components/Calculadora-app.vue";
import App from './App.vue'
    import { createRouter, createWebHistory } from "vue-router"
    const routeInfos = [
        {
            path : "/",
            component : Home
        },
        {
            path : "/cal",
            component : cal
        }
    ]
    
    const router = createRouter({
        history : createWebHistory(),
        routes : routeInfos
    })
    
    export default router;