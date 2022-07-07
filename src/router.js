import App from './App.vue'
function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}
    import { createRouter, createWebHistory } from "vue-router"
    const routeInfos = [
        {
            path : "/",
            component: lazyLoad('Home')
        },
        {
            path : "/login",
            component: lazyLoad('login')
        },
        {
            path : "/register",
            component: lazyLoad('Register')
        },
        {
            path : "/reset",
            component: lazyLoad('Reset')
        },
        {
            path: "/test",
            component: lazyLoad('Test')
        },
        {
            path: "/dashboard",
            component: lazyLoad('Dashboard')
        },
        {
            path: "/dashboard/referidos",
            component: lazyLoad('Referidos')
        },
        {
            path: "/admin/dashboard",
            component: lazyLoad('DashboardAdmin')
        }

    ]
    
    const router = createRouter({
        history : createWebHistory(),
        routes : routeInfos
    })
    
    export default router;