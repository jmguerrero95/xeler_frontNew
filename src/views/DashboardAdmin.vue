<template>
    <div>
        <TopBar></TopBar>
        <MenuDashboardAdmin v-on:submit-form="changeFormState"></MenuDashboardAdmin>
        <InicioAdmin v-if="type === 'A'"></InicioAdmin>
        <TransaccionesPendientes v-if="type === 'B'"></TransaccionesPendientes>
        <TransaccionesAprobadas v-if="type === 'C'"></TransaccionesAprobadas>
    </div>
</template>
<script>
    import TopBar from "@/components/Topbar.vue";
    import MenuDashboardAdmin from "@/components/MenuDashboardAdmin.vue";
    import InicioAdmin from "@/components/InicioAdmin.vue";
    import TransaccionesPendientes from "@/components/TransaccionesPendientes.vue";
    import TransaccionesAprobadas from "@/components/TransaccionesAprobadas.vue";
  /* eslint-disable */
export default {
    name: 'DashboardAdmin',
    components:{
        TopBar,
        MenuDashboardAdmin,
        InicioAdmin,
        TransaccionesPendientes,
        TransaccionesAprobadas,
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