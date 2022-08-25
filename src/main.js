import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios'
import router from "./router";
import gsap from 'gsap'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import Particles from "particles.vue3";

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons'
import { faLitecoinSign } from '@fortawesome/free-solid-svg-icons'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'


library.add(faFacebookF, faInstagram, faTwitter, faTelegramPlane, faCoins, faRightLeft, faCircleUser, faChartLine, faCircleCheck, faCircleXmark, faPlus, faCheck, faPenToSquare, faBitcoinSign, faEthereum, faBitcoin, faLitecoinSign, faBuildingColumns)
createApp(App).use(router).use(Particles).component('font-awesome-icon', FontAwesomeIcon, Particles).mount('#app')