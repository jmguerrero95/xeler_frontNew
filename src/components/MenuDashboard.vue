<template>
    <nav class="navbar navbar-expand-lg bg-light d-none d-md-block">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="/dashboard/comprar" class="nav-link"><font-awesome-icon class="iconos" icon="fa-solid fa-coins"/> Comprar</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/dashboard/vender" class="nav-link"><font-awesome-icon class="iconos" icon="fa-solid fa-coins"/> Vender</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><font-awesome-icon class="iconos" icon="fa-solid fa-right-left"/> Transacciones</a>
                </li>
                <li class="nav-item">
                  <router-link to="/dashboard/referidos" class="nav-link"><font-awesome-icon class="iconos" icon="fa-regular fa-circle-user"/> Referidos</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/dashboard" class="nav-link"><font-awesome-icon class="iconos" icon="fa-regular fa-circle-user"/> Perfil</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/login" class="nav-link">Cerrar sesion</router-link>
                </li>
            </ul>
            <div class="verificacion">
                <a class="nav-link" href="#">Completa tu verificación</a>
            </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
        <div class="row">
                <div class="col-12 main-header d-block d-md-none">
                    <nav id="nav" class="main-nav">
                        <div class="nav-links">
                            <a class="link-item" aria-current="page" href="#"><font-awesome-icon class="iconos" icon="fa-solid fa-coins"/> Comprar</a>
                            <a class="link-item" href="#"><font-awesome-icon class="iconos" icon="fa-solid fa-coins"/> Vender</a>
                            <a class="link-item" href="#"><font-awesome-icon class="iconos" icon="fa-solid fa-right-left"/> Transacciones</a>
                            <router-link to="/dashboard/referidos" class="link-item"><font-awesome-icon class="iconos" icon="fa-regular fa-circle-user"/> Referidos</router-link>
                            <router-link to="/dashboard" class="link-item"><font-awesome-icon class="iconos" icon="fa-regular fa-circle-user"/> Perfil</router-link>
                            <router-link to="/login" class="link-item">Cerrar sesion</router-link>
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
                            <img class="img-fluid img-menu" src="@/assets/xelergo.png">
                        </div>
                        <div class="col-4">

                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputGenerico',
    components:{
        //VueTyper,
        //Money,
        //Loading
    },
    mounted() {

        const toggleButton = document.getElementById("button-menu");
        const navWrapper = document.getElementById("nav");

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
    .navbar-menu>li>a {
        display: flex;
        align-items: center;
        font-size: 14px;
        line-height: 32px;
        padding: 12px 0;
        position: relative;
        color: #7668fe;
    }
    .nav-link{
        color: #7668fe !important;
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
        width: 70%;
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
        color: #444444;
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
        /*width: 80%;*/
        height: 40px;
        width: auto;
        margin-top: 5px;
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
   
</style>