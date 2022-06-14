<template>
<div>
  <body class="theme-dark is-smooth-effect" data-spy="scroll" data-target="#mainnav" data-offset="70" >-->
<div>
    <div id="particles-js" class="particles-container particles-js"></div>
<div id="principal">

        <header class="site-header is-sticky" id="header">

            <!-- Place Particle Js -->


            <!-- Navbar -->
            <div class="navbar navbar-expand-lg is-transparent fixed-top" id="mainnav">
                <nav class="container header-menu">
                    <a class="navbar-brand" href="./">
                        <img class="logo logo-dark" alt="logo" src="@/assets/xelergo.png">
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle">
                        <span class="navbar-toggler-icon">
                            <span class="ti ti-align-justify"></span>
                        </span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarToggle">
                        <ul class="navbar-nav navbar-btns">
                                <li class="nav-item"><router-link to="/login"><a class="nav-link btn btn-sm btn-outline menu-link">Iniciar Sesión</a></router-link></li>
                                <li class="nav-item"><router-link to="/register"><a class="nav-link btn btn-sm btn-outline menu-link" href="/register">Registro</a></router-link></li>
                                <!--<li class="nav-item">
                                    @if(Auth::user()->role == 3)
                                        <a class="nav-link btn btn-sm btn-outline menu-link" href="/admin/dashboard">Inicio</a>
                                    @elseif(Auth::user()->role == 2)
                                        <a class="nav-link btn btn-sm btn-outline menu-link" href="/agent/dashboard">Inicio</a>
                                    @else
                                        <a class="nav-link btn btn-sm btn-outline menu-link" href="/home">Inicio</a>
                                    @endif
                                </li>-->
                        </ul>
                    </div>
                </nav>
            </div>


                <div class="banner banner-curb banner-particle d-flex align-items-center">
                    <div class="container">
                        <div class="banner-content">
                            <div class="row align-items-center mobile-center">
                                <div class="col-lg-6 col-md-12 order-lg-first order">
                                    <Calculadora></Calculadora>
                                </div>
                                <div class="col-lg-6 col-md-12 order-first">
                                    <div class="header-image" >
                                        <img src="@/assets/header-image-dark.png" alt="header">
                                        <img class="header-image-icon left-icon" src="@/assets/xeler_ico1.svg" alt="header-icon">
                                        <img class="header-image-icon right-icon" src="@/assets/header-icon-b.png" alt="header-icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-sm-block d-md-none banner-caption text-center">
                    <div class="cpn-action">
                        <ul class="btn-grp mx-auto">
                            <li ><a href="/register" class="btn btn-sm btn-outline" >Crear Cuenta</a></li>
                        </ul>
                    </div>
                </div>
        </header>
        <section class="section over-up">
            <!--{{-- <div id="particles-js2" class="particles-container particles-js"></div> --}}-->
            <div class="container">
                <div class="section-head text-center wide-auto-sm">
                    <h2 class="title animated fadeInUp" data-animate="fadeInUp" data-delay=".1">Manejamos las monedas de mayor influencia</h2>
                    <p class="animated fadeInUp" data-animate="fadeInUp" data-delay=".2" >Estamos en constante actualización incluyendo en nuestro sistema las criptomonedas de mayor capitalización, las cuales puedes intercambiar por pesos y viceversa.</p>
                </div>
            <ul class="rank-list mb-5">
                <li class="rank-item animated fadeInUp" data-animate="fadeInUp" data-delay=".9" >
                    <img src="@/assets/elBtc.png" alt="bitcoin">
                </li>
                <li class="rank-item animated fadeInUp" data-animate="fadeInUp" data-delay="1">
                    <img src="@/assets/elEth.png" alt="etherum">
                </li>
                <li class="rank-item animated fadeInUp" data-animate="fadeInUp" data-delay="1.1">
                    <img src="@/assets/elBch.png" alt="bitcoin cash">
                </li>
                <li class="rank-item animated fadeInUp" data-animate="fadeInUp" data-delay="1.2">
                    <img src="@/assets/elLtc.png" alt="litecoin">
                </li>
                <li class="rank-item animated fadeInUp" data-animate="fadeInUp" data-delay="1.3">
                    <img src="@/assets/elDash.png" alt="dash">
                </li>
            </ul>
            <div class="text-center wide-auto-sm">
                <h3 class="title animated fadeInUp" data-animate="fadeInUp" data-delay=".1">Transacciones súper rápidas</h3>
                <p class="animated fadeInUp" data-animate="fadeInUp" data-delay=".2" >
                    Sabemos que la velocidad es primordial en las transacciones con criptomonedas por ese motivo en XelerGo
                    manejamos la política de procesarlo todo súper rápido, la mayoría de las transacciones que realizamos quedan completas antes de 90 minutos.</p>
            </div>
            <br>
            <div class="row " >
                <div class="col text-center">
                    <img src="@/assets/reloj_xeler.png" height="88px" width="94px" alt="reloj" data-animate="fadeInUp" data-delay="1.3">
                </div>
            </div>
        </div>
        </section>
        <!--<section class="section over-up">
            {{-- <div id="particles-js3" class="particles-container particles-js"></div> --}}
                <div class="container">
                    <div class="section-head text-center wide-auto-sm">
                        @foreach($faqs as $faq)
                        <h4 class="title animated fadeInUp" data-animate="fadeInUp" data-delay=".1">{!!$faq->pregunta!!}</h4>
                        <p class="animated fadeInUp" data-animate="fadeInUp" data-delay=".2" >{!! $faq->respuesta !!}</p>
                        @endforeach
                    </div>

                --></div><!-- End container -->
        <!--</section>-->


        <div class="section footer-scetion no-pt section-pad-sm section-bg">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-12">
                        <span class="copyright-text animated" data-animate="fadeInUp" data-delay=".3">
                            Copyright , XelerGo!.
                        </span>
                        <ul class="social">
                            <li><a href="https://m.facebook.com/Xelerex" target="_blank"><em class="fab fa-facebook-f"></em></a></li>
                            <li><a href="https://www.instagram.com/bitcoincolombia/" target="_blank"><em class="fab fa-instagram"></em></a></li>
                            <li><a href="https://twitter.com/Xeler_ex" target="_blank"><em class="fab fa-twitter"></em></a></li>
                            <li><a href="https://t.me/coin2cop" target="_blank"><em class="fab fa-telegram-plane"></em></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</div>
<div id="installContainer" class="oculto">
    <button id="butInstall" type="button">
      Instalar en la pantalla de inicio
    </button>
  </div>
</body>




</div>
</template>

<script>
  /* eslint-disable */
import Calculadora from "@/components/Calculadora-app.vue";
import 'particles.js'
export default {
    components: {
        Calculadora
    },
    mounted() {
        this.initParticles()
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
                "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00c0fa"
            },
            "shape": {
                "type": "edge",
                "opacity": 0.20,
                "stroke": {
                    "width": 0,
                    "color": "#2b56f5"
                },
                "polygon": {
                    "nb_sides": 5
                },
                
            },
            "opacity": {
                "value": 0.30,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.12,
                    "sync": false
                }
            },
            "size": {
                "value": 6,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.08,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#2b56f5",
                "opacity": 0.30,
                "width": 1.3
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
            "retina_detect": true
            })
    }
  }
  /*mounted() { 
    let script1 = document.createElement('script')
    script1.setAttribute('src', 'src/assets/jquery.js')
    document.head.appendChild(script1)

    let script2 = document.createElement('script')
    script2.setAttribute('src', '/src/assets/app.js')
    document.head.appendChild(script2)

    let script3 = document.createElement('script')
    script3.setAttribute('src', '/src/assets/particles.min.js')
    document.head.appendChild(script3)
  },*/
  

}


    
        /*particlesJS.load
        particlesJS('particles-js',

        {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00c0fa"
            },
            "shape": {
                "type": "images",
                "opacity": 0.20,
                "stroke": {
                    "width": 0,
                    "color": "#2b56f5"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "images/xeler_ico1.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.30,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.12,
                    "sync": false
                }
            },
            "size": {
                "value": 6,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.08,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#2b56f5",
                "opacity": 0.30,
                "width": 1.3
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
            "retina_detect": true
        }

      );*/
</script>









<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .particles-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
}
  .btn.btn-outline:after {
    position: absolute;
    -ms-border-radius: 23px;
    border-radius: 23px;
    left: 2px;
    top: 2px;
    content: "";
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    z-index: -1;
    opacity: 1;
    background: #020207;
    transition: all .5s ease;
}
.btn:before {
    position: absolute;
    -ms-border-radius: 23px;
    border-radius: 23px;
    left: 0;
    top: 0;
    content: "";
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0;
    transition: all .5s ease;
    background-image: -webkit-linear-gradient(left,#46bdf4 0,#2b56f5 100%);
    background-image: linear-gradient(to right,#46bdf4 0,#2b56f5 100%);
}
  .btn {
    font-family: Poppins,sans-serif;
    font-size: 12px;
    line-height: 46px;
    font-weight: 600;
    padding: 0 34px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    min-width: 160px;
    max-width: 100%;
    border: none;
    box-sizing: border-box;
    transition: all .5s;
    position: relative;
    z-index: 2;
    -ms-border-radius: 23px;
    border-radius: 23px;
    background-image: -webkit-linear-gradient(left,#2b56f5 0,#46bdf4 100%);
    background-image: linear-gradient(to right,#2b56f5 0,#46bdf4 100%);
}
  .navbar .navbar-nav>li>a {
    background: 0 0;
    text-transform: uppercase;
    color: inherit;
    font-size: 13px;
    font-weight: 500;
    line-height: 38px;
    margin: 0 8.5px;
    transition: all .35s ease;
}
  .site-header .navbar-btns {
    margin-left: 60px;
}
  .logo-light {
    display: block;
}
.site-header .navbar-brand img {
    width: auto;
    max-width: 100%;
    max-height: 40px;
}
.site-header .logo-light {
    display: none;
}

img {
    outline: 0;
    border: 0 none;
    max-width: 100%;
    height: auto;
    vertical-align: top;
    -ms-border-radius: 5px;
    border-radius: 5px;
}
.header-image .left-icon {
    left: 44%;
    margin-left: -1px;
    animation: jumping 1s linear 0s infinite alternate;
}
.header-image-icon {
    position: absolute;
    top: 32%;
    width: 30px;
}
.header-image {
    position: relative;
    z-index: 3;
    margin: 0 -150px 0 -30px;
}
.site-header .is-transparent+.banner .banner-content {
    padding-top: 50px;
}

.banner.banner-curb.banner-particle {
    background: url(../assets/header-bottom.png) bottom center no-repeat,url(../assets/particle-left.png) top left no-repeat,url(../assets/particle-right.png) top right no-repeat,#08091b;
    background-size: 100%,auto,auto,auto;
}

.banner.banner-curb {
    background: url(../assets/header-bottom.png) bottom center no-repeat,#08091b;
    background-size: 100%;
}
.banner.banner-particle {
    background: url(../assets/particle-left.png) top left no-repeat,url(../assets/particle-right.png) top right no-repeat,#08091b;
    background-size: auto,auto,auto;
}
.banner {
    position: relative;
}
.banner {
    min-height: 97vh;
}

  .header-image .right-icon {
    right: 41%;
    margin-right: -5px;
    margin-top: 5px;
    animation: jumping 1s linear .5s infinite alternate;
}

.header-image-icon {
    position: absolute;
    top: 32%;
    width: 30px;
}
img {
    outline: 0;
    border: 0 none;
    max-width: 100%;
    height: auto;
    vertical-align: top;
    -ms-border-radius: 5px;
    border-radius: 5px;
}



  body {
    color: #fff;
    background: #10122d;

    font-family: Poppins,sans-serif;
    font-size: 15px;
    line-height: 1.86;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.oculto {
    display: none;
}
.section {
position: relative;
overflow-x: hidden;
width: 100%;
z-index: 2;
}
@media (min-width: 992px){
.section-head:not([class*=pdb]) {
    padding-bottom: 60px;
}
}
@media (min-width: 576px){
.section-head:not([class*=pdb]) {
    padding-bottom: 50px;
}
}
.text-center [class*="wide"], .text-center[class*="wide"] {
    margin-left: auto;
    margin-right: auto;
}
.section-head:not([class*=pdb]) {
    padding-bottom: 40px;
}
.section-head {
    position: relative;
}
.wide-auto, .wide-auto-rg, .wide-auto-xl, .wide-auto-lg, .wide-auto-md, .wide-auto-sm, .wide-auto-xs {
    margin: 0 auto;
}
.wide-sm, .wide-auto-sm {
    max-width: 555px;
}
@media (min-width: 576px){
.section-head .title:not(:last-child) {
    margin-bottom: 1.25rem;
}
}
.section-head .title:not(:last-child) {
    margin-bottom: .75rem;
}
.section-head .title {
    font-weight: 500;
}
@media (min-width: 576px){
.title:not(:last-child) {
    margin-bottom: 1.25rem;
}
}
@media (min-width: 1600px){
.section-b, .section {
    padding-bottom: 150px;
}
}
@media (min-width: 1600px){
.section-t, .section {
    padding-top: 150px;
}
}
@media (min-width: 992px){
.section-b, .section {
    padding-bottom: 120px;
}
}
@media (min-width: 992px){
.section-t, .section {
    padding-top: 120px;
}
}
@media (min-width: 768px){
.section-b, .section {
    padding-bottom: 80px;
}
}
@media (min-width: 768px){
.section-t, .section {
    padding-top: 80px;
}
}
@media (min-width: 576px){
.section-b, .section {
    padding-bottom: 68px;
}
}
@media (min-width: 576px){
.section-t, .section {
    padding-top: 68px;
}
}
.section-t, .section {
    padding-top: 60px;
}
.section-b, .section {
    padding-bottom: 60px;
}
.rank-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
@media (min-width: 992px){
.rank-item {
    height: 160px;
    width: 164px;
    padding-top: 38px;
}
}
@media (min-width: 768px){
.rank-item {
    height: 136px;
    width: 146px;
    padding: 32px 30px 0;
}
}
@media (min-width: 400px){
.rank-item {
    height: 104px;
    width: 108px;
    padding-top: 24px;
}
}
.rank-item {
    /* background-image: url(../images/hexagon.png); */
    height: 88px;
    width: 94px;
    padding: 16px 20px 0;
}
.order{
    z-index: 1111;
}





</style>
