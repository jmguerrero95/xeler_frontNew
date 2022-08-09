<template>
    <div>
    <div class="dashboard container-fluid">
        <div class="container d-none d-lg-block">
            <div class="row contenedor">
                <div class="col-12 col-md-12 caja">


                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">DATOS PERSONALES</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#config-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CONFIGURACION</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contra-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CONTRASEÑA</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#wallet-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">NOTIFICACIONES</button>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div class="row">
                                <div class="col-12 col-md-6">
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
                                <div class="col-12 col-md-6">
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
                      <div class="tab-pane fade" id="config-tab-pane" role="tabpanel" aria-labelledby="config-tab" tabindex="0">
                          <div class="row">
                            <div class="col-12">
                                <br/>
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="titulo">Configuración de Seguridad</h4>  
                                    </div>
                                    <div class="col-3">
                                        
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                            <label class="form-check-label" for="flexSwitchCheckDefault">Guardar mi actividad</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="contra-tab-pane" role="tabpanel" aria-labelledby="contra-tab" tabindex="0">
                          <div class="row">
                            <div class="col-12">
                                <br/>
                                <div class="row">
                                    <div class="col-6">
                                        <br/>
                                        <label class="form-label">Contraseña actual</label>
                                        <InputGenerico value="" placeholder="Ingrese contraseña actual"></InputGenerico>
                                        <br/>
                                        <label class="form-label">Nueva contraseña</label>
                                        <InputGenerico value="" placeholder="Ingrese nueva contraseña"></InputGenerico>
                                    </div>
                                    <div class="col-6">
                                        <br/>
                                        <label class="form-label">Confirme nueva contraseña</label>
                                        <InputGenerico value="" placeholder="Confirme nueva contraseña"></InputGenerico>
                                    </div>
                                    <div class="col-3">
                                        <br/>
                                        <BotonGenerico class="factores" texto="Actualizar perfil" data-bs-toggle="modal" data-bs-target="#exampleModal"></BotonGenerico>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="wallet-tab-pane" role="tabpanel" aria-labelledby="wallet-tab" tabindex="0">
                          <div class="row">
                            <div class="col-12">
                                <br/>
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="titulo">Configuración de Notificaciones</h4>  
                                    </div>
                                    <div class="col-3">
                                        
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                            <label class="form-check-label" for="flexSwitchCheckDefault">No Silenciar Notificaciones</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 caja sup espacio">
                    <h3 class="tit_veri">Clave dinámica desembolsos</h3>
                    <p class="parra">La clave dinámica es usada para la autorización de desembolsos.</p>
                    <BotonGenerico class="factores" texto="Habilitar 2FA"></BotonGenerico>
                </div>
                <div class="col-12 col-md-12 caja sup espacio">
                    <h3 class="tit_veri">Autenticación de 2-Factores</h3>
                    <p class="parra">La autenticación de dos factores es un método para proteger su cuenta web. Cuando está activado, debe ingresar no solo su contraseña, sino también un código especial. Puede recibir este código en la aplicación móvil. Incluso si la tercera persona encuentra su contraseña, no puede acceder con ese código.</p>
                    <BotonGenerico class="factores" texto="Habilitar 2FA"></BotonGenerico>
                </div>
            </div>
        </div>

        <div class="row contenedor d-lg-none sup">
                <div class="col-12 col-lg-8 caja primero">


                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home2-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">DATOS PERSONALES</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#config2-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CONFIGURACION</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contra2-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CONTRASEÑA</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#wallet2-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">NOTIFICACIONES</button>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home2-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div class="row">
                                <div class="col-12 col-md-6">
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
                                <div class="col-12 col-md-6">
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
                      <div class="tab-pane fade" id="config2-tab-pane" role="tabpanel" aria-labelledby="config-tab" tabindex="0">
                          <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <br/>
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="titulo">Configuración de Seguridad</h4>  
                                    </div>
                                    <div class="col-3">
                                        
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                            <label class="form-check-label" for="flexSwitchCheckDefault">Guardar mi actividad</label>
                                        </div>
                                        <br/>
                                        <BotonGenerico class="boton" texto="Guardar Perfil"></BotonGenerico>
                                    </div>
                                </div>
                            </div>
                            <div class="col-1"></div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="contra2-tab-pane" role="tabpanel" aria-labelledby="contra-tab" tabindex="0">
                          <div class="row">
                            <div class="col-12">
                                <br/>
                                <div class="row">
                                    <div class="col-12">
                                        <br/>
                                        <label class="form-label">Contraseña actual</label>
                                        <InputGenerico value="" placeholder="Ingrese contraseña actual"></InputGenerico>
                                        <br/>
                                        <label class="form-label">Nueva contraseña</label>
                                        <InputGenerico value="" placeholder="Ingrese nueva contraseña"></InputGenerico>
                                    </div>
                                    <div class="col-12">
                                        <br/>
                                        <label class="form-label">Confirme nueva contraseña</label>
                                        <InputGenerico value="" placeholder="Confirme nueva contraseña"></InputGenerico>
                                    </div>
                                    <div class="col-3">
                                        <br/>
                                        <BotonGenerico class="factores" texto="Actualizar perfil" data-bs-toggle="modal" data-bs-target="#exampleModal"></BotonGenerico>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="wallet2-tab-pane" role="tabpanel" aria-labelledby="wallet-tab" tabindex="0">
                          <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <br/>
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="titulo">Configuración de Notificaciones</h4>  
                                    </div>
                                    <div class="col-3">
                                        
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                            <label class="form-check-label" for="flexSwitchCheckDefault">No Silenciar Notificaciones</label>
                                        </div>
                                        <br/>
                                        <BotonGenerico class="boton" texto="Guardar Perfil"></BotonGenerico>
                                    </div>
                                </div>
                            </div>
                            <div class="col-1"></div>
                        </div>
                      </div>
                    </div>
                </div>


                <div class="col-12 col-lg-8 caja espacio">
                    <h3 class="tit_veri">Clave dinámica desembolsos</h3>
                    <p>La clave dinámica es usada para la autorización de desembolsos</p>
                    <BotonGenerico class="factores" texto="Habilitar 2FA"></BotonGenerico>
                </div>
                <div class="col-12 col-lg-8 caja espacio">
                    <h3 class="tit_veri">Autenticación de 2-Factores</h3>
                    <p>La autenticación de dos factores es un método para proteger su cuenta web. Cuando está activado, debe ingresar no solo su contraseña, sino también un código especial. Puede recibir este código en la aplicación móvil. Incluso si la tercera persona encuentra su contraseña, no puede acceder con ese código.</p>
                    <BotonGenerico class="factores" texto="Habilitar 2FA"></BotonGenerico>
                </div>
            </div>

    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-6">
                        <label class="form-label">Nombre Titular</label>
                        <InputGenerico placeholder="Nombre Titular de la cuenta"></InputGenerico>
                        <p>Ingresa el nombre del titular de la cuenta</p>
                        <br/>
                        <label class="form-label">Número Cuenta o Producto</label>
                        <InputGenerico placeholder="Número de cuenta"></InputGenerico>
                        <br/>
                        <label class="form-label">Número Documento Titular</label>
                        <InputGenerico placeholder="Número documento titular"></InputGenerico>
                        
                    </div>
                    <div class="col-6">
                        <label class="form-label">Nombre Banco</label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Selecciona un banco</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <br/>
                        <label class="form-label">Tipo Documento</label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Selecciona tipo</option>
                          <option value="1">Cédula de ciudadanía</option>
                          <option value="2">Cédula de extranjería</option>
                          <option value="3">Pasaporte</option>
                        </select>
                        <br/>
                        <label class="form-label">Tipo de Cuenta o Producto</label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Selecciona Tipo</option>
                          <option value="1">Ahorros</option>
                          <option value="2">Corriente</option>
                          <option value="3">Recaudo</option>
                          <option value="3">Credito</option>
                        </select>
                    </div>
                    <div class="col-6">
                        <BotonGenerico class="factores" texto="Guardar Cuenta"></BotonGenerico>
                    </div>
                    
                </div>

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
    import FooterDashboard from "@/components/FooterDashboard";
  /* eslint-disable */
export default {
    name: 'Dashboard',
    components:{
        TopBar,
        MenuDashboard,
        InputGenerico,
        BotonGenerico,
        FooterDashboard
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
   
    .primero{
        margin-top: 70px !important;
    }
    @media only screen and (max-width: 991px) {
        .contenedor{
            padding: 2%;
        }
        .movil{
            background-color: white;
            margin-top: 4%;
        }
    }
    .bot_opcion{
        background: #e6effb;
        border: 0;
        border-radius: 4px;
    }
    .fondo_col{
        color: #ff6868;
        background: #ffeded;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 2%;
        margin-top: 2%;
        font-weight: 400;
    }
    .parr_centrado{
        text-align: center;
    }
    .titulo{
        color: #342d6e;
        font-size: 1.4em;
        font-weight: 500;
    }
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
        font-family: "Roboto",sans-serif !important;
        font-weight: 500;
    }
    /*.sup{
        margin-top: 10%;
    }*/
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
    .sup-b{
        padding: 9%;
    }
    .nav-link{
        font-weight: 500;
        font-size: 14px;
        color: #758698;
    }
    .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
        color: #7668fe;
    }
    .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
            border-color: #fff #fff #7668fe;
    }
    .form-label{
        font-size: 14px;
        font-weight: 500;
        color: #495463;
        line-height: 1.1;
        margin-bottom: 12px;
        display: inline-block;
    }
    .tit_veri{
        color: #342d6e;
        font-size: 1.4em;
        font-weight: 500;
    }
    .positivo{
        color: #00d285;
    }
    .negativo{
        color:  #ff6868;
    }
    .tit_table{
        text-transform: uppercase;
        border: none;
        white-space: nowrap;
        font-size: 12px;
        font-weight: 700;
        color: #7668fe;
    }
    @media only screen and (max-width: 991px) {
        .tit_veri{
            color: #342d6e;
            font-size: 1.4rem;
            font-weight: 500;
        }
        .tit_kyc[data-v-22ba47ca] {
            color: #342d6e;
            font-weight: 500;
            margin: 0;
            font-size: 1.4rem;
        }
        .caja-b{
            padding: 3%;
        }
        .caja{
            padding: 5%;
        }
        .espacio {
            margin-top: 4%;
        }
        .movil{
            border-radius: 5px;
        }
        .nav-link{
            font-size: 12px;
        }
        
        .parr_centrado {
            font-size: 14px;
        }
        .let_movil{
            font-size: 14px;
            font-weight: 600;
            color: #495463;
            letter-spacing: 0.01em;
            line-height: 1;
            margin-top: 0;
            margin-right: 4px;
        }
        .form-label{
            font-size: 14px;
            font-weight: 500;
            color: #495463;
            line-height: 1.1;
            margin-bottom: 12px;
            display: inline-block;
        }
    }
    .btn_edit:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
    @media (min-width: 480px){
        .btn_edit {
            padding: 8px 20px;
            font-size: 14px;
        }
    }
    .btn-primary2 {
        background: #7668fe;
        border-color: #7668fe;
    }
    .btn-block2 {
        display: block;
        width: 100%;
    }
    .btn_edit {
        position: relative;
        color: #fff;
        font-weight: 500;
        padding: 8px 20px;
        font-size: 13px;
        line-height: 24px;
        letter-spacing: 0.01em;
        border-radius: 4px;
        border: 1px solid;
        display: inline-block;
        transition: all .4s ease;
    }
    .parra{
        font-family: "Roboto",sans-serif !important;
        font-weight: 400;
        font-size: 15px

    }
    p{
        font-family: "Roboto",sans-serif !important;
        font-weight: 400;
        font-size: 15px

    }
</style>