<template>
    <div class="todo">
        <TopBar></TopBar>
        <MenuDashboardAgent v-on:submit-form="changeFormState"></MenuDashboardAgent>
        <InicioAgent v-if="type === 'A'"></InicioAgent>
        <TransaccionesPendientesAgent v-if="type === 'B'"></TransaccionesPendientesAgent>
        <TransaccionesAprobadasAgent v-if="type === 'C'"></TransaccionesAprobadasAgent>
        <PerfilAgent v-if="type === 'G'"></PerfilAgent>
        <div class="container">
            <div class="row">
                <FooterDashboard></FooterDashboard>
            </div>
        </div>
    </div>
</template>
<script>
    import TopBar from "@/components/Topbar.vue";
    import MenuDashboardAgent from "@/components/MenuDashboardAgent.vue";
    import InicioAgent from "@/components/InicioAgent.vue";
    import TransaccionesPendientesAgent from "@/components/TransaccionesPendientesAgent.vue";
    import TransaccionesAprobadasAgent from "@/components/TransaccionesAprobadasAgent.vue";
    import PerfilAgent from "@/components/PerfilAgent.vue";
    import FooterDashboard from "@/components/FooterDashboard";
  /* eslint-disable */
export default {
    name: 'DashboardAgent',
    components:{
        TopBar,
        MenuDashboardAgent,
        InicioAgent,
        TransaccionesPendientesAgent,
        TransaccionesAprobadasAgent,
        PerfilAgent,
        FooterDashboard
        //VueTyper,
        //Money,
        //Loading
    },
    data () {
        return {
            type: 'A'
        }
    },
    methods: {
      changeFormState: function(className) {
        this.type = className;
      }
    },
}
</script>
<style scoped>
    .container{
        background: #eef2f8;
    }
    .todo{
        background: #eef2f8;
    }

</style>