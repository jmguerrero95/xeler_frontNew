<template>
    <div class="todo">
        <TopBar></TopBar>
        <MenuDashboardAdmin v-on:submit-form="changeFormState"></MenuDashboardAdmin>
        <InicioAdmin v-if="type === 'A'"></InicioAdmin>
        <TransaccionesPendientes v-if="type === 'B'"></TransaccionesPendientes>
        <TransaccionesAprobadas v-if="type === 'C'"></TransaccionesAprobadas>
        <Kyc v-if="type === 'D'"></Kyc>
        <ManejoCuentas v-if="type === 'E'"></ManejoCuentas>
        <ManejoOtros v-if="type === 'F'"></ManejoOtros>
        <TodosUsuarios v-if="type === 'G'"></TodosUsuarios>
        <Configuracion v-if="type === 'I'"></Configuracion>
        <ListBancos v-if="type === 'J'"></ListBancos>
        <ListOtros v-if="type === 'K'"></ListOtros>
        <div class="container">
            <div class="row">
                <FooterDashboard></FooterDashboard>
            </div>
        </div>
    </div>
</template>
<script>
import TopBar from "@/components/Topbar.vue";
import MenuDashboardAdmin from "@/components/MenuDashboardAdmin.vue";
import InicioAdmin from "@/components/InicioAdmin.vue";
import TransaccionesPendientes from "@/components/TransaccionesPendientes.vue";
import TransaccionesAprobadas from "@/components/TransaccionesAprobadas.vue";
import Kyc from "@/components/Kyc.vue";
import ManejoCuentas from "@/components/ManejoCuentas.vue";
import ManejoOtros from "@/components/ManejoOtros.vue";
import TodosUsuarios from "@/components/TodosUsuarios.vue";
import Configuracion from "@/components/Configuracion.vue";
import ListBancos from "@/components/ListBancos.vue";
import ListOtros from "@/components/ListOtros.vue";
import FooterDashboard from "@/components/FooterDashboard";
/* eslint-disable */
export default {
    name: 'DashboardAdmin',
    components: {
        TopBar,
        MenuDashboardAdmin,
        InicioAdmin,
        TransaccionesPendientes,
        TransaccionesAprobadas,
        Kyc,
        ManejoCuentas,
        ManejoOtros,
        TodosUsuarios,
        Configuracion,
        ListBancos,
        ListOtros,
        FooterDashboard
        //VueTyper,
        //Money,
        //Loading
    },
    data() {
        return {
            type: 'A'

        }
    },
    methods: {
        changeFormState: function (className) {
            this.type = className;
        }
    },
}
</script>
<style scoped>
.container {
    background: #eef2f8;
}

.todo {
    background: #eef2f8;
}
</style>