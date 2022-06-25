<template>
    <div>
        <TopBar></TopBar>
        <MenuDashboardAdmin></MenuDashboardAdmin>
        <InicioAdmin></InicioAdmin>
    </div>
</template>
<script>
    import TopBar from "@/components/Topbar.vue";
    import MenuDashboardAdmin from "@/components/MenuDashboardAdmin.vue";
    import InicioAdmin from "@/components/InicioAdmin.vue";
  /* eslint-disable */
export default {
    name: 'DashboardAdmin',
    components:{
        TopBar,
        MenuDashboardAdmin,
        InicioAdmin,
        //VueTyper,
        //Money,
        //Loading
    },
    data () {
        return {
          
        }
    },
}
</script>
<style scoped>

</style>