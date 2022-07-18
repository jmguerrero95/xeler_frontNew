import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios'
import router from "./router";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'


library.add(faFacebookF, faInstagram, faTwitter, faTelegramPlane, faCoins, faRightLeft, faCircleUser, faChartLine, faCircleCheck, faCircleXmark)
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')