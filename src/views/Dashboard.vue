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
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#config-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CONFIGURACION</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contra-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CONTRASEÑA</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#wallet-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">WALLETS</button>
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
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <br/>
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="titulo">Su Lista de Cuentas Bancarias</h4>  
                                    </div>
                                    <div class="col-3">
                                        <BotonGenerico class="factores" texto="Agregar Cuenta" data-bs-toggle="modal" data-bs-target="#exampleModal"></BotonGenerico>
                                    </div>
                                    <div class="col-12 fondo_col">
                                        <p class="parr_centrado">🚫 En las cuentas registradas en esta sección puedes recibir pagos.<br/>
                                        Si deseas enviarnos dinero mediante aplicación o Sucursal virtual unicamente recibiremos pagos de la cuenta que coincida con tu nombre y KYC</p>
                                    </div>





                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">NOMBRE TITULAR</th>
                                                <th scope="col">NOMBRE BANCO</th>
                                                <th scope="col">NÚMERO CUENTA</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Viviana</td>
                                                <td>BANCOLOMBIA</td>
                                                <td>1234567890</td>
                                                <td><button class="bot_opcion">...</button></td>
                                            </tr>
                                            <tr>
                                                <td>Ana marines</td>
                                                <td>BANCOLOMBIA</td>
                                                <td>1234567890</td>
                                                <td><button class="bot_opcion">...</button></td>
                                            </tr>
                                            <tr>
                                                <td>Viviana ruiz</td>
                                                <td>BANCO CAJA SOCIAL</td>
                                                <td>2121212121</td>
                                                <td><button class="bot_opcion">...</button></td>
                                            </tr>
                                        </tbody>
                                    </table>






                                </div>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </div>
                      <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                          

                          <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <br/>
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="titulo">Su Lista de Cuentas otros</h4>  
                                    </div>
                                    <div class="col-3">
                                        <BotonGenerico class="factores" texto="Agregar Cuenta" data-bs-toggle="modal" data-bs-target="#exampleModal"></BotonGenerico>
                                    </div>
                                    <!--<div class="col-12 fondo_col">
                                        <p class="parr_centrado">🚫 En las cuentas registradas en esta sección puedes recibir pagos.<br/>
                                        Si deseas enviarnos dinero mediante aplicación o Sucursal virtual unicamente recibiremos pagos de la cuenta que coincida con tu nombre y KYC</p>
                                    </div>-->





                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">NOMBRE TITULAR</th>
                                                <th scope="col">NOMBRE BANCO</th>
                                                <th scope="col">NÚMERO CUENTA</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Vian</td>
                                                <td>NEQUI</td>
                                                <td>1234567890</td>
                                                <td><button class="bot_opcion">...</button></td>
                                            </tr>
                                            <tr>
                                                <td>Otra cuenta</td>
                                                <td>MOVII</td>
                                                <td>1234567890</td>
                                                <td><button class="bot_opcion">...</button></td>
                                            </tr>
                                        </tbody>
                                    </table>






                                </div>
                            </div>
                            <div class="col-1"></div>
                        </div>


                      </div>
                      <div class="tab-pane fade" id="config-tab-pane" role="tabpanel" aria-labelledby="config-tab" tabindex="0">
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
                                    </div>
                                </div>
                            </div>
                            <div class="col-1"></div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="contra-tab-pane" role="tabpanel" aria-labelledby="contra-tab" tabindex="0">
                          <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
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
                            <div class="col-1"></div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="wallet-tab-pane" role="tabpanel" aria-labelledby="wallet-tab" tabindex="0">
                          <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <br/>
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="titulo">Su lista de wallets</h4>  
                                    </div>
                                    <div class="col-3">
                                        <BotonGenerico class="factores" texto="Agregar wallet" data-bs-toggle="modal" data-bs-target="#exampleModal"></BotonGenerico>
                                    </div>
                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">NOMBRE</th>
                                                <th scope="col">WALLET</th>
                                                <th scope="col">TIPO</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Bitpay</td>
                                                <td>bc1qnv8wdf8g8uzs90eqtd482qe2ewxtez07w83r3mpy5pt73qycshws8w0ygw</td>
                                                <td><button class="bot_opcion">...</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-1"></div>
                        </div>
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
    }
    .parr_centrado{
        text-align: center;
    }
    .titulo{
        color: #342d6e;
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