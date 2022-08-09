<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-none d-lg-block">
      <div class="container">
        <a class="navbar-brand" href="#"> <img src="@/assets/xelergo.png"> </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>



        <!--<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>-->
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Bienvenid@! Vivian Morales
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <div class="titulo">
                        <p class="user-status-title">Bienvenid@</p>
                        <p class="user-status-balance">Viviana Morales</p>
                    </div>
                    <li class="listadoA"><a href="#">11 pts</a></li>
                    <li class="listadoA"><a href="#">Mi Perfil</a></li>
                    <li class="listadoA"><a href="#">Mi Actividad</a></li>
                    <li class="listadoA"><a href="#">Completa tu verificación</a></li>
                    <li class="listadoB"><router-link to="/login">Cerrar Sesión</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'TobBar',
    components:{
        //VueTyper,
        //Money,
        //Loading
    },
}
</script>
<style scoped>
    a {
        outline: 0;
        transition: all 0.5s;
        color: #5e55b8;
        text-decoration: none;
    }
    .listadoA{
        background-color: white;
        padding-left: 4%;
        padding-top: 4%;
        
    }
    .listadoB{
        padding: 5%;
    }
    .titulo{
        background: #342d6e;
        border-radius: 4px 4px 0 0;
        padding-top: 6%;
        padding-left: 6%;
        padding-bottom: 4%;
    }
    .dropdown-menu{
        width: 110%;
        border: 0;
        -webkit-box-shadow: 0px 0px 23px 1px rgba(0,0,0,0.32);
        -moz-box-shadow: 0px 0px 23px 1px rgba(0,0,0,0.32);
        box-shadow: 0px 0px 23px 1px rgba(0,0,0,0.32);
        margin-top: 8%;
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
</style>