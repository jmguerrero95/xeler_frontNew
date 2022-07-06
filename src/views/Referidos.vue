<template>
    <div>
    <TopBar></TopBar>
    <MenuDashboard></MenuDashboard>
    <div class="dashboard container">
        <div class="row">
            <div class="col-8">
                <h2>Sistema de Referidos</h2>
                <div class="row">
                    <div class="col-10">
                        <p>Invita tus amigos y familiares y recibe bonificaciones.</p>
                    </div>
                    <div class="col-2">
                        <p class="puntaje">11,171 pts</p>
                    </div>
                </div>
                <h4>URL de Referido</h4>

            </div>
            <div class="col-4">
                
            </div>
            
        </div>

    </div>
    </div>



</template>
<script>
    import TopBar from "@/components/Topbar.vue";
    import MenuDashboard from "@/components/MenuDashboard.vue";
    import InputGenerico from "@/components/Input-generico.vue";
    import BotonGenerico from "@/components/Boton-generico";
  /* eslint-disable */
export default {
    name: 'referidos',
    components:{
        TopBar,
        MenuDashboard,
        InputGenerico,
        BotonGenerico
        //VueTyper,
        //Money,
        //Loading
    },
    data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    },
}
</script>
<style scoped>
    .dashboard{
        background: #eef2f8;
        padding-top: 2%;
    }
    .puntaje{
        color: #342d6e;
        font-size: 2em;
        font-weight: 500;
        margin: 0;
    }
</style>