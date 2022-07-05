<template>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="#" v-on:click="$emit('submit-form', 'A')" aria-current="page">Dashboard</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Transacciones
                  </a>
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
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Contabilidad
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'E')">Manejo de Cuentas</a></li>
                    <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'F')">Manejo Otros</a></li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Usuarios
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'G')">Usuarios</a></li>
                    <li><a class="dropdown-item" href="#" v-on:click="$emit('submit-form', 'H')">Usuarios Referidos</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Tienda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Configuración</a>
                </li>
            </ul>
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
    .verificacion{
        justify-content: end;
    }
   
</style>