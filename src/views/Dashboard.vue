<template>
    <TopBar></TopBar>
    <MenuDashboard></MenuDashboard>
    <div class="dashboard container-fluid">
        <div class="container">
            <div class="row contenedor">
                <div class="col-8 caja">
                    <div class="row">
                        <div class="col-6">
                            <br/>
                            <label class="form-label">Primer Nombre</label>
                            <InputGenerico></InputGenerico>
                            <br/>
                            <label class="form-label">Primer Apellido</label>
                            <InputGenerico></InputGenerico>
                            <br/>
                            <label class="form-label">Email</label>
                            <InputGenerico></InputGenerico>
                            <br/>
                            <label class="form-label">Fecha de nacimiento</label>
                            <InputGenerico></InputGenerico>
                            <br/>
                            <label class="form-label">Departamento de residencia</label>
                            <InputGenerico></InputGenerico>
                            <br/>
                            <label class="form-label">Tipo de documento</label>
                            <InputGenerico></InputGenerico>
                            <br/>
                        </div>
                        <div class="col-6">
                            <br/>
                            <label class="form-label">Segundo Nombre</label>
                            <InputGenerico></InputGenerico>
                            <br/>
                            <label class="form-label">Segundo Apellido</label>
                            <InputGenerico></InputGenerico>
                            <br/>
                            <label class="form-label">Nùmero Celular</label>
                            <InputGenerico></InputGenerico>
                            <br/>
                            <label class="form-label">País de residencia</label>
                            <InputGenerico></InputGenerico>
                            <br/>
                            <label class="form-label">Ciudad de residencia</label>
                            <InputGenerico></InputGenerico>
                            <br/>
                            <label class="form-label">Número documento</label>
                            <InputGenerico></InputGenerico>
                            <br/>
                        </div>
                        
                    </div>  
                </div>
                <div class="col-4">
                    <div class="caja-b">
                        <p class="tit_kyc">Verificación de Identidad - KYC</p>
                        <p>Para cumplir con la regulación, el usuario deberá pasar por la verificación de identidad.</p>
                        <p>No ha enviado sus documentos para verificar su identidad. (KYC).</p>
                        <BotonGenerico class="boton" texto="Click para Proceder"></BotonGenerico>
                    </div>
                    <br/>
                    <div class="caja">
                        b
                    </div>
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
    name: 'Dashboard',
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
    .boton{
        padding-top: 2%;
        padding-left: 0%;
        padding-bottom: 2%;
        padding-right: 0%;
        width: 10%;
    }
    .tit_kyc{
        color: #342d6e;
        font-weight: 500;
        margin: 0;
    }
    .dashboard{
        background: #eef2f8;
        padding-top: 2%;
    }
    .caja{
        background: white;
        border-radius: 5px;
        /*margin-left: 5%;*/
    }
    .caja-b{
        background: white;
        border-radius: 5px;
        padding: 10%;
    }
</style>