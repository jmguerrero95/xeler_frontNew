<template>

    <div class="navbar d-none d-lg-block">
      <div class="container">
          <div class="navbar-innr">
              <ul class="navbar-menu" id="main-nav">
                  <li class=""><a href="#" v-on:click="$emit('submit-form', 'A')" aria-current="page"><font-awesome-icon class="iconos icon_espa" icon="fa-solid fa-chart-line"/> Dashboard</a></li>
                  <li class="has-dropdown">
                    <a class="drop-toggle" href="javascript:void(0)"><font-awesome-icon class="iconos icon_espa" icon="fa-solid fa-right-left"/> Transacciones</a>
                    <ul class="navbar-dropdown">
                        <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'B')">Transacciones Pendientes </a></li>
                        <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'C')">Transacciones Aprobadas</a></li>
                        <li><a href="#">Todas las Transacciones</a></li>
                    </ul>
                  </li>
                  <li class=""><a class="nav-link" href="#" v-on:click="$emit('submit-form', 'D')"><font-awesome-icon class="iconos icon_espa" icon="fa-solid fa-right-left"/> KYC</a></li>

                  <li class="has-dropdown">
                    <a class="drop-toggle" href="javascript:void(0)"><font-awesome-icon class="iconos icon_espa" icon="fa-solid fa-coins"/> Contabilidad</a>
                    <ul class="navbar-dropdown">
                        <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'E')">Manejo de Cuentas</a></li>
                        <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'F')">Manejo Otros</a></li>
                    </ul>
                  </li>

                  <li class="has-dropdown">
                    <a class="drop-toggle" href="javascript:void(0)"><font-awesome-icon class="iconos icon_espa" icon="fa-regular fa-circle-user"/> Usuarios</a>
                    <ul class="navbar-dropdown">
                        <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'G')">Usuarios</a></li>
                        <li><a href="#">Usuarios Referidos</a></li>
                    </ul>
                  </li>

                  <li class=""><router-link to="/dashboard/referidos" class="nav-link"> Tienda</router-link></li>
                  <li class="active"><a class="nav-link" href="#" v-on:click="$emit('submit-form', 'I')"><font-awesome-icon class="iconos icon_espa" icon="fa-regular fa-circle-user"/> Configuracion</a></li>
              </ul>
              
              <ul class="navbar-btns">
                  <li><a href="http://104.248.246.251/verificacion" class="btn btn-sm btn-outline btn-light"><em class="text-primary ti ti-files"></em><span>Completa tu verificación</span></a></li>
              </ul>
                                                      
          </div>
      </div>
    </div>


    <nav class="navbar navbar-expand-lg bg-light d-none">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="#" v-on:click="$emit('submit-form', 'A')" aria-current="page"><font-awesome-icon class="iconos" icon="fa-solid fa-chart-line"/> Dashboard</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><font-awesome-icon class="iconos" icon="fa-solid fa-right-left"/> Transacciones</a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'B')">Transacciones Pendientes</a></li>
                    <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'C')">Transacciones Aprobadas</a></li>
                    <li><a class="dropdown-item" href="#">Todas las Transacciones</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" v-on:click="$emit('submit-form', 'D')">KYC</a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><font-awesome-icon class="iconos" icon="fa-solid fa-coins"/> Contabilidad</a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'E')">Manejo de Cuentas</a></li>
                    <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'F')">Manejo Otros</a></li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><font-awesome-icon class="iconos" icon="fa-regular fa-circle-user"/> 
                    Usuarios
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'G')">Usuarios</a></li>
                    <li><a class="dropdown-item" href="#">Usuarios Referidos</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Tienda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" v-on:click="$emit('submit-form', 'I')">Configuración</a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
    <header class="main-header d-block d-md-none">
          <nav id="nav" class="main-nav">
            <div class="nav-links">
              <a class="link-item" href="#" v-on:click="$emit('submit-form', 'A'); cerrar()" aria-current="page"><font-awesome-icon class="iconos" icon="fa-solid fa-chart-line"/> Dashboard</a>
              <a class="link-item sub1" v-on:click="cambio('.submenu_movil')" href="#" aria-current="page"><font-awesome-icon class="iconos" icon="fa-solid fa-right-left"/> Transacciones</a>
              <div class="submenu_movil todo">
                <div class="espa_submenu">
                  <a class="link-item" href="#" v-on:click="$emit('submit-form', 'B'); cerrar()">Transacciones Pendientes</a>
                </div>
                <div class="espa_submenu">
                  <a class="link-item" href="#" v-on:click="$emit('submit-form', 'C'); cerrar()">Transacciones Aprobadas</a>
                </div>
              </div>
              <a class="link-item" href="#" v-on:click="$emit('submit-form', 'D'); cerrar()">KYC</a>
              <a class="link-item sub2" v-on:click="cambio('.submenu_movil2')" href="#"><font-awesome-icon class="iconos" icon="fa-solid fa-coins"/> Contabilidad</a>
              <div class="submenu_movil2 todo">
                <div class="espa_submenu">
                  <a class="link-item" href="#" v-on:click="$emit('submit-form', 'E'); cerrar()">Manejo de Cuentas</a>
                </div>
                <div class="espa_submenu">
                  <a class="link-item" href="#" v-on:click="$emit('submit-form', 'F'); cerrar()">Manejo Otros</a>
                </div>
              </div>
              <a class="link-item sub3" v-on:click="cambio('.submenu_movil3')" href="#"><font-awesome-icon class="iconos" icon="fa-regular fa-circle-user"/> Usuarios</a>
              <div class="submenu_movil3 todo">
                <div class="espa_submenu">
                  <a class="link-item" href="#" v-on:click="$emit('submit-form', 'G'); cerrar()">Usuarios</a>
                </div>
                <div class="espa_submenu">
                  <a class="link-item" href="#" v-on:click="$emit('submit-form', 'H'); cerrar()">Usuarios Referidos</a>
                </div> 
              </div>
              <a class="link-item" href="#">Tienda</a>
              <a class="link-item" href="#" v-on:click="$emit('submit-form', 'I')">Configuración</a>
              <router-link class="link-item" to="/login">Cerrar sesion</router-link>
            </div>
          </nav>
          <div class="row">
            <div class="col-4">
                <button id="button-menu" class="button-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="col-4">
                <a class="navbar-brand" href="#"> <img class="img-fluid img-menu" src="@/assets/xelergo.png"> </a>
            </div>
            <div class="col-4">





                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <a href="#" class="margen icono"><font-awesome-icon icon="fa-regular fa-user"/></a>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                          <div class="titulo">
                              <p class="user-status-title">Bienvenid@</p>
                              <p class="user-status-balance">Viviana Morales</p>
                          </div>
                          <li class="listadoA"><a href="#" class="item_menu">11 pts</a></li>
                          <li class="listadoA"><a href="#" class="item_menu">Mi Perfil</a></li>
                          <li class="listadoA"><a href="#" class="item_menu">Mi Actividad</a></li>
                          <li class="listadoA"><a href="#" class="item_menu">Completa tu verificación</a></li>
                          <li class="listadoB"><router-link to="/login" class="item_menu">Cerrar Sesión</router-link></li>
                    </ul>
                  </li>
                </ul>

                
            </div>
              
          </div>
        </header>


</template>

<script>
export default {
    name: 'InputGenerico',
    components:{
        //VueTyper,
        //Money,
        //Loading
    },
    methods: {
      cambio: function (divOCult){
        const submenu_movil = document.querySelector(".submenu_movil")
        const submenu_movil2 = document.querySelector(".submenu_movil2")
        const submenu_movil3 = document.querySelector(".submenu_movil3")
        /*const todo = document.querySelector(".todo")
        todo.style.display = "none"*/
        submenu_movil.style.display = "none"
        submenu_movil2.style.display = "none"
        submenu_movil3.style.display = "none"
        const divOCult2 = document.querySelector(divOCult)
        console.log(divOCult2)
        divOCult2.style.display = "block"
      },
      cerrar: function (divOCult){
        const toggleButton = document.getElementById("button-menu");
        const navWrapper = document.getElementById("nav");
        navWrapper.classList.remove("show");
        toggleButton.classList.remove("close");
      }

    },
    mounted() {
        /*function cambio(boton, divOCult){
          const boton2 = document.querySelector(boton)
          const divOCult2 = document.querySelector(divOCult)
          divOCult2.style.display = "block"

        }*/

        const toggleButton = document.getElementById("button-menu");
        const navWrapper = document.getElementById("nav");

        navWrapper.classList.remove("show");
        toggleButton.classList.remove("close");

        /* 
          cada ves que se haga click en el botón 
          agrega y quita las clases necesarias 
          para que el menú se muestre.
        */
        toggleButton.addEventListener("click", () => {
          toggleButton.classList.toggle("close");
          navWrapper.classList.toggle("show");
        });

        /* 
          Cuándo se haga click fuera del contenedor de enlaces 
          el menú debe esconderse.
        */

        navWrapper.addEventListener("click", e => {
          if (e.target.id === "nav") {
            navWrapper.classList.remove("show");
            toggleButton.classList.remove("close");
          }
        });
    },
}
</script>
<style scoped>
    .nav-link{
      color: #7668fe !important;
    }
    .espa_submenu{
      padding-top: 2.5%;
      padding-bottom: 2.5%;
    }
    /*.sub1:visited + .submenu_movil{
      display: block;
    }*/
    .sub2:visited + .submenu_movil2{
      display: block;
    }
    .sub3:visited + .submenu_movil3{
      display: block;
    }
    .submenu_movil{
      padding-left: 5%;
      display: none;

    }
    /*.submenu_movil:visited{
      display: block;
    }*/
    .submenu_movil2{
      padding-left: 5%;
      display: none;

    }
    .submenu_movil2:visited{
      display: block;
    }
    .submenu_movil3{
      padding-left: 5%;
      display: none;

    }
    .submenu_movil3:visited{
      display: block;
    }

    .navbar-menu>li>a {
        display: flex;
        align-items: center;
        font-size: 14px;
        line-height: 32px;
        padding: 12px 0;
        position: relative;
        color: #7668fe;
    }
    .verificacion{
        justify-content: end;
    }

    /** {
        margin: 0;
        padding: 0;
    }*/

    .main-header {
        position: fixed;
        z-index: 99;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding: 0 0.4rem;
        background-color: #242650;
        width: 100%;
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
        width: 70%;
        margin-left: -100%;
        transition: all 0.5s linear;
        z-index: 100;
    }

    .main-nav.show {
        margin-left: 0;
    }
    .nav-links {
        background-color: rgb(250, 250, 250);
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 100%;
        padding-left: 5%;
        justify-content: flex-start;
        margin-top: 50px;
    }
    .nav-links > a{
      color: #7668fe !important;
    }

    .link-item {
        margin-top: 2rem;
        color: #7668fe !important;
        text-decoration: none;
        font-weight: bold;
        position: relative;
    }

    .link-item::after {
        position: absolute;
        content: "";
        background-color: #7668fe;
        bottom: -5px;
        left: 0;
        width: 0%;
        height: 3px;
        transition: 0.4s ease all;
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
        width: 30px;
        height: 1px;
        margin-bottom: 5px;
        position: relative;
        background: white;
        border-radius: 3px;
        transform-origin: 4px 0px;
        transition: all 0.3s linear;
    }

    .button-menu.close span {
        opacity: 1;
        transform: rotate(45deg) translate(0px, 0px);
        background: white;
    }

    .button-menu.close span:nth-child(2) {
        transform: rotate(-45deg) translate(-8px, 5px);
    }

    .button-menu.close span:nth-child(3) {
        display: none;
    }
    .button-menu.close span:nth-child(4) {
        display: none;
    }
    .img-menu{
        width: 80%;
        margin-top: 5%;
    }
    @media only screen and (max-width: 767px) {
      .img-menu{
        width: 60%;
        margin-top: 5%;
      }
    }
    @media only screen and (max-width: 520px) {
      .img-menu{
        width: 80%;
        margin-top: 5%;
      }
    }
    @media only screen and (max-width: 380px) {
      .img-menu{
        width: 100%;
        margin-top: 5%;
      }
    }
    .listadoA{
        background-color: white;
        padding-left: 4%;
        padding-top: 4%;
    }
    .listadoB{
        padding: 5%;
    }
    .item_menu{
      outline: 0;
      transition: all 0.5s;
      color: #5e55b8;
      text-decoration: none;
    }
    .titulo{
        background: #342d6e;
        border-radius: 4px 4px 0 0;
        padding-top: 6%;
        padding-left: 6%;
        padding-bottom: 4%;
    }
    @media only screen and (max-width: 320px) {
      .dropdown-menu{
        width: 310% !important;
      }
    }
    @media only screen and (max-width: 250px) {
      .dropdown-menu{
        width: 350% !important;
      }
    }
    @media only screen and (min-width: 400px) {
      .dropdown-menu{
        width: 200% !important;
        margin-top: 15% !important;
      }
    }
    @media only screen and (min-width: 530px) {
      .dropdown-menu{
        width: 180% !important;
        margin-top: 13% !important;
      }
    }
    .dropdown-menu{
        width: 250%;
        border: 0;
        -webkit-box-shadow: 0px 0px 23px 1px rgba(0,0,0,0.32);
        -moz-box-shadow: 0px 0px 23px 1px rgba(0,0,0,0.32);
        box-shadow: 0px 0px 23px 1px rgba(0,0,0,0.32);
        margin-top: 39px !important;
        padding-top: 0;
        background: #f7fafd !important;
    }
  .bg-dark{
        background-color: #242650 !important;
    }
    .navbar-brand img {
        height: 40px;
    }
    .collapse{
        justify-content: end;
    }
    .user-status-title {
        font-size: 11px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #FFE969;
        margin-bottom: 0;
    }
    .user-status-balance {
        font-size: 24px;
        color: #fff;
        white-space: nowrap;
        line-height: 1;
        padding-top: 4px;
    }
    .icono{
      font-size: 13px;
      display: block;
      text-align: center;
      width: 32px;
      line-height: 30px;
      border-radius: 50%;
      border: 1px solid #d2dde9;
      float: right;
      color: #fff;
      background-color: #7668fe;
      border-color: #7668fe;
    }
    .dropdown-toggle::after {
      content: none;
    }
    .icono{
      font-size: 13px;
      display: block;
      text-align: center;
      width: 32px;
      line-height: 30px;
      border-radius: 50%;
      border: 1px solid #d2dde9;
      float: right;
      color: #fff;
      background-color: #7668fe;
      border-color: #7668fe;
    }
    .dropdown-toggle::after {
      content: none;
    }

    .navbar {
        box-shadow: 0 1px 3px rgb(24 30 43 / 7%);
        position: relative;
        left: 0;
        top: 0;
        display: block;
        min-height: auto;
        width: 100%;
        padding: 0;
        transition: all 0s;
        height: auto;
        z-index: 2;
        align-items: flex-start;
        background: #fff;
        justify-content: space-between;
    }
    .navbar-innr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .navbar-menu {
        padding: 0;
        display: flex;
        margin: 0 -15px;
        padding-top: 0;
    }
    .navbar-menu li {
        position: relative;
    }
    .navbar-menu>li {
        padding: 0 15px;
    }
    ul li, ol li {
        list-style: none;
    }
    .navbar-menu>li>a {
        display: flex;
        align-items: center;
        font-size: 15px;
        line-height: 32px;
        padding: 12px 0;
        position: relative;
        color: #7668fe;
    }
    a:link, a:visited {
        text-decoration: none;
    }
    .navbar-menu>li>a:before {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        opacity: 0;
        width: 100%;
        content: '';
        background: #7668fe;
        transition: all .3s;
    }
    .navbar-menu>li:hover a:before, .navbar-menu>li:focus a:before, .navbar-menu>li:active a:before {
        opacity: 1;
    }
    .icon_espa {
        margin-right: 10px;
    }

    .navbar-dropdown {
      position: absolute;
      left: 15px;
      top: 100%;
      background: #fff;
      box-shadow: 0px 4px 35px 0px rgb(0 0 0 / 10%);
      visibility: hidden;
      opacity: 0;
      transition: all .3s ease;
      display: block !important;
      z-index: 9;
      min-width: 215px;
      padding: 10px 0;
    }
    .navbar-dropdown li a {
      font-size: 13px;
      padding: 10px 25px;
    }

    .navbar-dropdown li a {
      line-height: 20px;
      display: block;
      position: relative;
      color: #5e55b8;
    }

    .has-dropdown:hover > .navbar-dropdown{
      visibility: visible;
      opacity: 1;

    }
   
</style>