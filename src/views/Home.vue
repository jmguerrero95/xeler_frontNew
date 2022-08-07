<template>
<div class="fixed">
<div class="tema">
    <LoadingScreen :isLoading="isLoading" />
<div v-if="!isLoading">

    <!--<div id="particles-js" class="particles-container particles-js"></div>-->
<div id="principal">


        



        <!--<header class="main-header d-block d-md-none">
          <nav id="nav" class="main-nav">
            <div class="nav-links">
              <router-link class="link-item" to="/login"><a class="link-item" href="#">Iniciar Sesión</a></router-link>
              <router-link class="link-item" to="/login"><a class="link-item" href="#">Registro</a></router-link>
            </div>
          </nav>
          <button id="button-menu" class="button-menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>-->
        <header class="site-header is-sticky" id="header">

            <!-- Place Particle Js -->


            <!-- Navbar -->
            <div class="navbar navbar-expand-lg is-transparent fixed-top" id="mainnav">


                <nav class="navbar navbar-expand-lg navbar-dark">
                  <div class="container">
                    <a class="navbar-brand" href="#"> <img src="@/assets/xelergo.png"> </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>



                    <!--<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>-->
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                      <ul class="">
                        <li class="nav-item nav-itemLeft"><router-link to="/login" class="nav-link btn btn-sm btn-outline menu-link">Iniciar Sesión</router-link></li>
                        <li class="nav-item nav-itemRight"><router-link to="/register" class="nav-link btn btn-sm btn-outline menu-link">Registro</router-link></li>
                      </ul>
                    </div>
                  </div>
                </nav>








                <!--<nav class="container header-menu">
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
                                --><!--<li class="nav-item">
                                    @if(Auth::user()->role == 3)
                                        <a class="nav-link btn btn-sm btn-outline menu-link" href="/admin/dashboard">Inicio</a>
                                    @elseif(Auth::user()->role == 2)
                                        <a class="nav-link btn btn-sm btn-outline menu-link" href="/agent/dashboard">Inicio</a>
                                    @else
                                        <a class="nav-link btn btn-sm btn-outline menu-link" href="/home">Inicio</a>
                                    @endif
                                </li>-->
                        <!--</ul>
                    </div>
                </nav>-->
            </div>


                
        </header>
        <div class="banner banner-curb banner-particle d-flex align-items-center">
                    <div class="container">
                        <!--<svg version="1.1" id="Capa_1" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108.4 72.9" style="" xml:space="preserve">
                <path class="st0 OPVNtoBT_0" d="M58.9,55.4l-5.8-4.6h11.5L58.9,55.4L58.9,55.4z M39.1,39.9L56,53.6l-13.6-6C42.3,47.6,39.1,39.9,39.1,39.9z
                     M47.7,26.3l3.2,0L44.2,18L47.7,26.3z M38.9,38.9l9.2,0l8.6-12.4L43,14.8l-8,18.9L38.9,38.9L37,34l6.1-17.3l8.3,9.9l-3.8,0
                    L38.9,38.9L38.9,38.9z M39,39.4l13.4,11.1l-4.3-11.1C48.1,39.4,39,39.4,39,39.4z M78.6,39.9L62,53.6l13.4-6L78.6,39.9L78.6,39.9z
                     M70,26.3l-3.2,0l6.7-8.3L70,26.3L70,26.3z M78.8,38.9l-9.2,0L61,26.5l13.7-11.7l8,18.9L78.8,38.9l2-4.9l-6.1-17.3l-8.3,9.9l3.8,0
                    L78.8,38.9L78.8,38.9z M78.2,39.7L65.3,50.5l4.1-10.8C69.5,39.7,78.2,39.7,78.2,39.7z M64.6,50.5l4.4-11l-10.2,11H64.6z M60.5,27.8
                    l7.2,10.8L59,48.4l-8.7-9.5l7.1-11.2L60.5,27.8L60.5,27.8z M53.1,50.5l-4.4-11l10.2,11H53.1z"></path>
            </svg>
            <svg version="1.1" id="Capa_1" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108.4 72.9" style="" xml:space="preserve">
                <path class="st1" d="M58.9,55.4l-5.8-4.6h11.5L58.9,55.4L58.9,55.4z M39.1,39.9L56,53.6l-13.6-6C42.3,47.6,39.1,39.9,39.1,39.9z
                     M47.7,26.3l3.2,0L44.2,18L47.7,26.3z M38.9,38.9l9.2,0l8.6-12.4L43,14.8l-8,18.9L38.9,38.9L37,34l6.1-17.3l8.3,9.9l-3.8,0
                    L38.9,38.9L38.9,38.9z M39,39.4l13.4,11.1l-4.3-11.1C48.1,39.4,39,39.4,39,39.4z M78.6,39.9L62,53.6l13.4-6L78.6,39.9L78.6,39.9z
                     M70,26.3l-3.2,0l6.7-8.3L70,26.3L70,26.3z M78.8,38.9l-9.2,0L61,26.5l13.7-11.7l8,18.9L78.8,38.9l2-4.9l-6.1-17.3l-8.3,9.9l3.8,0
                    L78.8,38.9L78.8,38.9z M78.2,39.7L65.3,50.5l4.1-10.8C69.5,39.7,78.2,39.7,78.2,39.7z M64.6,50.5l4.4-11l-10.2,11H64.6z M60.5,27.8
                    l7.2,10.8L59,48.4l-8.7-9.5l7.1-11.2L60.5,27.8L60.5,27.8z M53.1,50.5l-4.4-11l10.2,11H53.1z"></path>
            </svg>-->


                        
                        <div class="banner-content">
                            <div class="row align-items-center mobile-center">
                                <div class="col-lg-6 col-12 order-lg-first order">
                                    <Calculadora></Calculadora>
                                </div>
                                <div class="col-lg-6 col-12 order-first">

                                    <div class="header-image" >
                                        <img src="@/assets/header-image-dark.png" class="img-fluid" alt="header">
                                        <img class="header-image-icon left-icon img-fluid" src="@/assets/xeler_ico1.svg" alt="header-icon">
                                        <img class="header-image-icon right-icon img-fluid" src="@/assets/header-icon-b.png" alt="header-icon">
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
            <div class="text-center wide-auto-sm paddingTop">
                <h3 class="title animated fadeInUp" data-animate="fadeInUp" data-delay=".1">¿Preguntas? | Contacto</h3>
                <p class="animated fadeInUp" data-animate="fadeInUp" data-delay=".2" >Visita nuestro → <a href="https://help.xeler.io/" class="frecuente">centro de respuestas a preguntas frecuentes.</a></p>
            </div>
            <div class="text-center wide-auto-sm paddingTop">
                <div id="copyright" class="copyright2"><p>Copyright © 2022, XelerGo!.</p></div>
                <div class="iconos">
                    <a href="#" class="icono"><font-awesome-icon icon="fa-brands fa-facebook-f"/></a>
                    <a href="#" class="margen icono"><font-awesome-icon icon="fa-brands fa-instagram"/></a>
                    <a href="#" class="margen icono"><font-awesome-icon icon="fa-brands fa-twitter"/></a>
                    <a href="#" class="margen icono"><font-awesome-icon icon="fa-brands fa-telegram-plane"/></a>
                </div>
            </div>
            

            <!--<svg version="1.1" id="Capa_1" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108.4 72.9"
                 style="enable-background:new 0 0 108.4 72.9;" xml:space="preserve">
            <path class="st0" d="M58.9,55.4l-5.8-4.6h11.5L58.9,55.4L58.9,55.4z M39.1,39.9L56,53.6l-13.6-6C42.3,47.6,39.1,39.9,39.1,39.9z
                 M47.7,26.3l3.2,0L44.2,18L47.7,26.3z M38.9,38.9l9.2,0l8.6-12.4L43,14.8l-8,18.9L38.9,38.9L37,34l6.1-17.3l8.3,9.9l-3.8,0
                L38.9,38.9L38.9,38.9z M39,39.4l13.4,11.1l-4.3-11.1C48.1,39.4,39,39.4,39,39.4z M78.6,39.9L62,53.6l13.4-6L78.6,39.9L78.6,39.9z
                 M70,26.3l-3.2,0l6.7-8.3L70,26.3L70,26.3z M78.8,38.9l-9.2,0L61,26.5l13.7-11.7l8,18.9L78.8,38.9l2-4.9l-6.1-17.3l-8.3,9.9l3.8,0
                L78.8,38.9L78.8,38.9z M78.2,39.7L65.3,50.5l4.1-10.8C69.5,39.7,78.2,39.7,78.2,39.7z M64.6,50.5l4.4-11l-10.2,11H64.6z M60.5,27.8
                l7.2,10.8L59,48.4l-8.7-9.5l7.1-11.2L60.5,27.8L60.5,27.8z M53.1,50.5l-4.4-11l10.2,11H53.1z"/>
            </svg>-->
            


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
</div>
<div id="installContainer" class="oculto">
    <button id="butInstall" type="button">
      Instalar en la pantalla de inicio
    </button>
  </div>




</div>
</div>
</template>

<script>
  /* eslint-disable */
import Calculadora from "@/components/Calculadora-app.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import RedesSociales from "@/components/RedesSociales";
import 'particles.js'
export default {
    components: {
        Calculadora,
        RedesSociales,
        LoadingScreen
    },
    mounted() {
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
       //this.initParticles()

       Array.from(document.getElementsByClassName("st0")).forEach(pathElement => {
            pathElement.setAttribute('style', 'stroke-dasharray:'+pathElement.getTotalLength()+';stroke-dashoffset:'+pathElement.getTotalLength())
        })
       Array.from(document.getElementsByClassName("st1")).forEach(pathElement => {
            pathElement.setAttribute('style', 'stroke-dasharray:'+pathElement.getTotalLength()+';stroke-dashoffset:'+pathElement.getTotalLength())
        })
       
        

        /*const toggleButton = document.getElementById("button-menu");
        const navWrapper = document.getElementById("nav");*/

        /* 
          cada ves que se haga click en el botón 
          agrega y quita las clases necesarias 
          para que el menú se muestre.
        */
        /*toggleButton.addEventListener("click", () => {
          toggleButton.classList.toggle("close");
          navWrapper.classList.toggle("show");
        });*/

        /* 
          Cuándo se haga click fuera del contenedor de enlaces 
          el menú debe esconderse.
        */

        /*navWrapper.addEventListener("click", e => {
          if (e.target.id === "nav") {
            navWrapper.classList.remove("show");
            toggleButton.classList.remove("close");
          }
        });*/


    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isLoading: true,
    }
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
                "particles": {
            "number": {
                "value": 80,
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
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#2b56f5",
                "opacity": 0.40,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
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
            "retina_detect": false
            })
    }
  },
    beforeDestroy: function () {
        
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

      //  seleccionamos los dos elementos que serán clickables

    

</script>









<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .OPVNtoBT_0{
        stroke-dasharray:608 610;
        stroke-dashoffset:609;
        -webkit-animation: color-change-2x 2s linear infinite alternate both;
        animation:OPVNtoBT_draw 15000ms linear 2000ms forwards, color-change-2x 2s linear infinite alternate both;
    }

    .st0{
        fill-rule:evenodd;
        clip-rule:evenodd;
        fill:none;stroke:#2b56f5;
        stroke-width:0.25;
        stroke-miterlimit:10;
    }

    .st1{
        fill-rule:evenodd;
        clip-rule:evenodd;
        fill:none;stroke:#2b56f5;
        stroke-width:0.25;
        stroke-miterlimit:10;
        stroke-dasharray:608 610;
        stroke-dashoffset:609;
        -webkit-animation: color-change-2x 2s linear infinite alternate both;
        animation:OPVNtoBT_draw 15000ms linear 2000ms forwards;
    }
    @keyframes OPVNtoBT_draw{100%{stroke-dashoffset:0;}}@keyframes OPVNtoBT_fade{0%{stroke-opacity:1;}96.72131147540983%{stroke-opacity:1;}100%{stroke-opacity:0;}}

        @-webkit-keyframes color-change-2x {
          0% {
            fill:none;stroke:#2b56f5;
          }
          100% {
            fill:none;stroke:#713d94;
          }
        }
        @keyframes color-change-2x {
          0% {
            fill:none;stroke:#2b56f5;
          }
          100% {
            fill:none;stroke:#713d94;
          }
        }


    /*.st0{
        fill:none;stroke:#FF0000;
        stroke-width:0.25;
        stroke-miterlimit:10;
        animation: dash 1s linear;
        animation-fill-mode: forwards;
    }
    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }*/

    .menu-link{
        line-height: 38px !important;
        min-width: auto !important;
        padding: 0 23px !important;
    }
    .nav-link:hover {
        background-image: linear-gradient(to right,#46bdf4 0,#2b56f5 100%) !important;
    }
    @media (min-width: 769px){
        .navbar-expand-lg .navbar-collapse {
            display: flex!important;
            flex-basis: auto !important;
        }
        .navbar-dark .navbar-toggler {
            display:  none !important;
        }
    }
    @media only screen and (max-width: 768px) {
        .nav-itemLeft{
            margin-right: 10%;
        }
        .nav-itemRight{
            margin-left: 10%;
        }
       .nav-item{
            width: 37% !important;
            /*margin-left: 2.5% !important;*/
            margin-top: 5%;
        }
        .navbar-dark{
            background-image: linear-gradient(to bottom,#0b0c22 0,#1b1e4b 100%);
        }
        .navbar{
            padding-top: 0 !important;
        }
    }
    /*MENU MOVIL*/

    /** {
        margin: 0;
        padding: 0;
    }*/

    .main-header {
        position: relative;
        z-index: 99;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding: 0 0.4rem;
        background-color: #10122d;
    }

    .main-logo {
        color: black;
        font-size: 32px;
        text-decoration: none;
    }

    .main-nav {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        margin-left: -100%;
        transition: all 0.2s linear;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 100;
    }

    .main-nav.show {
        margin-left: 0;
    }

    .nav-links {
        background-color: rgb(250, 250, 250);
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 100%;
        align-items: center;
        justify-content: flex-start;
    }

    .link-item {
        margin-top: 2rem;
        color: #444444;
        text-decoration: none;
        font-weight: bold;
        position: relative;
    }

    .link-item::after {
        position: absolute;
        content: "";
        background-color: black;
        bottom: -5px;
        left: 0;
        width: 0%;
        height: 3px;
        transition: 0.3s ease all;
    }

    .link-item:hover::after {
        width: 100%;
    }

    .button-menu {
        z-index: 200;
        width: 40px;
        height: 40px;
        border: none;
        display: flex;
        background: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: fixed;
        margin-top: 1%;
    }

    .button-menu span {
        width: 37px;
        height: 3px;
        margin-bottom: 5px;
        position: relative;
        background: white;
        border-radius: 3px;
        transform-origin: 4px 0px;
        transition: all 0.2s linear;
    }

    .button-menu.close span {
        opacity: 1;
        transform: rotate(45deg) translate(0px, 0px);
        background: black;
    }

    .button-menu.close span:nth-child(2) {
        transform: rotate(-45deg) translate(-8px, 5px);
    }

    .button-menu.close span:nth-child(3) {
        display: none;
    }

    @media screen and (min-width: 768px) {
        .button-menu {
            display: none;
        }

        .main-logo {
            flex-basis: 30%;
        }

        .main-nav {
            position: static;
            margin-left: 0;
            flex-basis: 70%;
            height: 100%;
        }

        .nav-links {
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-end;
            background: white;
        }

        .link-item {
            display: inline-block;
            margin-top: 0;
            margin-right: 2rem;
        }
    }




    /*FIN MENU MOVIL*/
    .navbar {
        width: 100%;
    }
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
    transition: all 1s ease;
}
.btn.btn-outline:hover:after {
    background-image: -webkit-linear-gradient(left,#2b56f5 0,#46bdf4 100%);

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
    width: 25px;
}
.header-image {
    position: relative;
    z-index: 3;
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
    width: 25px;
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



  .tema {
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
.fixed{
    background: #10122d !important;
}
h1, h2 {
  font-weight: normal;
}
h2{
    font-size: 2.3em;
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
    z-index: 90;
}
@keyframes jumping{0%{transform:translateY(5px)}100%{transform:translateY(-25px)}}
@media only screen and (max-width: 767px){
    .header-image-icon {
        top: 30%;
        width: 20px;
    }
}
.frecuente{
    text-decoration: none;
    color: #46bdf4;
}
.frecuente:active, .frecuente:focus, .frecuente:hover {
    color: #8255fd;
}
.paddingTop{
    padding-top: 100px;
}
.icono{
    font-size: 16px;
    display: block;
    text-align: center;
    width: 32px;
    line-height: 30px;
    border-radius: 50%;
    color: #758698;
    border: 1px solid #d2dde9;
    float: left;
    background: white;
}
.iconos{
    display: flex;
    justify-content: center;
}
.margen{
    margin-left: 1%;
}
#copyright{
    font-size: 13px;
    color: #758698;
    margin-top: 7%;
    color: white;
}
.icono:hover{
    background: #7a0fff;
    color: white;
    border: 1px solid #7a0fff;
}



</style>
