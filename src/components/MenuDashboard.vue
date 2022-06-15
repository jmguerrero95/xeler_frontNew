<template>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Comprar</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Vender</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Transacciones</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Referidos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Perfil</a>
                </li>
            </ul>
        </div>
        <div class="verificacion">
            <a class="nav-link" href="#">Completa tu verificación</a>
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