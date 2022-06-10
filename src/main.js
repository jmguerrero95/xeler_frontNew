import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios'
import router from "./router";

createApp(App).use(router).mount('#app')
// 5. Create and mount the root instance.
//const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
//app.use(router)

//app.mount('#app')

/*createApp(App).mount('#app')

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");*/