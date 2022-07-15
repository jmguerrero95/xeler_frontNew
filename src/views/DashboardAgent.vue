<template>
    <div>
        <TopBar></TopBar>
        <MenuDashboardAgent v-on:submit-form="changeFormState"></MenuDashboardAgent>
        <InicioAgent v-if="type === 'A'"></InicioAgent>
        <TransaccionesPendientesAgent v-if="type === 'B'"></TransaccionesPendientesAgent>
        <TransaccionesAprobadasAgent v-if="type === 'C'"></TransaccionesAprobadasAgent>
        <PerfilAgent v-if="type === 'G'"></PerfilAgent>
    </div>
</template>
<script>
    import TopBar from "@/components/Topbar.vue";
    import MenuDashboardAgent from "@/components/MenuDashboardAgent.vue";
    import InicioAgent from "@/components/InicioAgent.vue";
    import TransaccionesPendientesAgent from "@/components/TransaccionesPendientesAgent.vue";
    import TransaccionesAprobadasAgent from "@/components/TransaccionesAprobadasAgent.vue";
    import PerfilAgent from "@/components/PerfilAgent.vue";
  /* eslint-disable */
export default {
    name: 'DashboardAgent',
    components:{
        TopBar,
        MenuDashboardAgent,
        InicioAgent,
        TransaccionesPendientesAgent,
        TransaccionesAprobadasAgent,
        PerfilAgent
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

</style>