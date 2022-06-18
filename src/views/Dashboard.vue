<template>
    <div>
    <TopBar></TopBar>
    <MenuDashboard></MenuDashboard>
    <div class="dashboard container-fluid">
        <div class="container">
            <div class="row contenedor">
                <div class="col-8 caja">


                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">DATOS PERSONALES</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">CUENTA BANCARIA</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">OTROS</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CONFIGURACION</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CONTRASEÑA</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">WALLETS</button>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <div class="row">
                            <div class="col-6">
                                <br/>
                                <label class="form-label">Primer Nombre</label>
                                <InputGenerico value="Vivian" placeholder="Ingrese su primer nombre"></InputGenerico>
                                <br/>
                                <label class="form-label">Primer Apellido</label>
                                <InputGenerico value="" placeholder="Ingrese su primer apellido"></InputGenerico>
                                <br/>
                                <label class="form-label">Email</label>
                                <InputGenerico placeholder="Ingrese email"></InputGenerico>
                                <br/>
                                <label class="form-label">Fecha de nacimiento</label>
                                <InputGenerico placeholder="Ingrese fecha de nacimiento"></InputGenerico>
                                <br/>
                                <label class="form-label">Departamento de residencia</label>
                                <InputGenerico placeholder="Ingrese departamento de residencia"></InputGenerico>
                                <br/>
                                <label class="form-label">Tipo de documento</label>
                                <InputGenerico placeholder="Ingrese tipo de documento"></InputGenerico>
                                <br/>
                            </div>
                            <div class="col-6">
                                <br/>
                                <label class="form-label">Segundo Nombre</label>
                                <InputGenerico placeholder="Ingrese su segundo nombre"></InputGenerico>
                                <br/>
                                <label class="form-label">Segundo Apellido</label>
                                <InputGenerico placeholder="Ingrese su segundo apellido"></InputGenerico>
                                <br/>
                                <label class="form-label">Nùmero Celular</label>
                                <InputGenerico placeholder="Ingrese numero celular"></InputGenerico>
                                <br/>
                                <label class="form-label">País de residencia</label>
                                <InputGenerico placeholder="Ingrese país de residencia"></InputGenerico>
                                <br/>
                                <label class="form-label">Ciudad de residencia</label>
                                <InputGenerico placeholder="Ingrese su ciudad de residencia"></InputGenerico>
                                <br/>
                                <label class="form-label">Número documento</label>
                                <InputGenerico placeholder="Ingrese su numero de documento"></InputGenerico>
                                <br/>
                            </div>
                        </div> 
                      </div>
                      <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">b</div>
                      <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">c</div>
                      <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">d</div>
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
                    <div class="caja-b">
                        <p class="tit_kyc">Gane con sus referidos</p>
                        <p>Invita tus amigos & familia.</p>
                        <p>Link de referido</p>
                    </div>
                </div>
                <div class="col-8 caja espacio">
                    <h3>Verificacion de dos factores</h3>
                    <p>La autenticación de dos factores es un método para proteger tu cuenta. Cuando se activa, debes ingresar no solo tu contraseña, sino también un código especial. Puedes recibir este código en la aplicación móvil. Incluso si un tercero obtiene acceso a tu contraseña, aún no podrá acceder a su cuenta sin el código 2FA.</p>
                    <BotonGenerico class="factores" texto="Habilitar 2FA"></BotonGenerico>
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
    .factores{
        width: 10%;
    }
    .espacio{
        margin-top: 2%;
    }
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
    html{
       background: #eef2f8; 
    }
    .dashboard{
        background: #eef2f8;
        padding-top: 2%;
    }
    .caja{
        background: white;
        border-radius: 5px;
        padding: 2%;
        /*margin-left: 5%;*/
    }
    .caja-b{
        background: white;
        border-radius: 5px;
        padding: 10%;
    }
</style>