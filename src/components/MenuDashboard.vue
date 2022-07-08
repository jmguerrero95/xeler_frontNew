<template>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><font-awesome-icon class="iconos" icon="fa-solid fa-coins"/> Comprar</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><font-awesome-icon class="iconos" icon="fa-solid fa-coins"/> Vender</a>
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
</template>

<script>
export default {
    name: 'InputGenerico',
    components:{
        //VueTyper,
        //Money,
        //Loading
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
   
</style>