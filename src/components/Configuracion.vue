<template>
    <div>
    <div class="dashboard container-fluid">
        <div class="container">
            <div class="row espacio">
                <div class="col-12 col-md-12 caja">


                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">CONFIGURACION</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">CONFIGURACION CALCULADORA</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">OTROS</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#config-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CONFIGURACION</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contra-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CONFIGURACIÓN TICKET</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#wallet-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">SOCIAL LINKS</button>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div class="row">
                                <div class="col-12">
                                    <br/>
                                    <div class="row">
                                        <div class="col-9">
                                            <h4 class="titulo">Configuración</h4>  
                                        </div>
                                        <div class="col-3">
                                            
                                        </div>
                                        <div class="col-12">
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                                <label class="form-check-label" for="flexSwitchCheckDefault">Mostrár instrucciones de comisión</label>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>


                                    <table class="table table-striped table-borderless">
                                        <thead>
                                            <tr>
                                                <th class="tit_tab">NOMBRE MONEDA</th>
                                                <th class="tit_tab">ESTADO</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="col"><span class="nombre">Bitcoin</span></td>
                                                <td scope="col"><a href="javascript:void(0)" data-uid="1" class="dt-status-md badge badge-outline badge-md badge-success moneda-activo">Activo</a></td>
                                                <td scope="col"><a href="#" class="btn btn-light-alt btn-xs btn-icon toggle-tigger">...</a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">Ethereum</span></td>
                                                <td scope="col"><a href="javascript:void(0)" data-uid="1" class="dt-status-md badge badge-outline badge-md badge-success moneda-activo">Activo</a></td>
                                                <td scope="col"><a href="#" class="btn btn-light-alt btn-xs btn-icon toggle-tigger">...</a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">Bitcoin Cash</span></td>
                                                <td scope="col"><a href="javascript:void(0)" data-uid="1" class="dt-status-md badge badge-outline badge-md badge-success moneda-activo">Activo</a></td>
                                                <td scope="col"><a href="#" class="btn btn-light-alt btn-xs btn-icon toggle-tigger">...</a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">Litecoin</span></td>
                                                <td scope="col"><a href="javascript:void(0)" data-uid="1" class="dt-status-md badge badge-outline badge-md badge-success moneda-activo">Activo</a></td>
                                                <td scope="col"><a href="#" class="btn btn-light-alt btn-xs btn-icon toggle-tigger">...</a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">Dash</span></td>
                                                <td scope="col"><a href="javascript:void(0)" data-uid="1" class="dt-status-md badge badge-outline badge-md badge-success moneda-activo">Activo</a></td>
                                                <td scope="col"><a href="#" class="btn btn-light-alt btn-xs btn-icon toggle-tigger">...</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div> 
                        </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <br/>
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <br/>
                                        <label class="form-label">Fecha y hora de desbloqueo</label>
                                        <InputGenerico value="" placeholder="Fecha de desbloqueo"></InputGenerico>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <br/>
                                        <label class="input-item-label">Fecha y hora de desbloqueo actual</label>
                                        <p>2020-09-28 04:00:00</p>
                                    </div>
                                    <div class="col-3">
                                        <br/>
                                        <BotonGenerico class="factores" texto="Actualizar" data-bs-toggle="modal" data-bs-target="#exampleModal"></BotonGenerico>
                                    </div>
                                </div>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </div>
                      <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                          

                          <div class="row">  
                            <div class="col-1"></div>
                            <div class="col-10">
                                <h4 class="titulo espa">Configuración SEO</h4>
                                <table class="table table-striped table-borderless">
                                        <thead>
                                            <tr>
                                                <th class="tit_tab">NOMBRE</th>
                                                <th class="tit_tab">valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="col"><span class="nombre">keywords</span></td>
                                                <td scope="col"><p class="">Bitcoin criptomonedas Colombia bogota compra venta</p></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">description</span></td>
                                                <td scope="col"><p class="">Comprar / Vender bitcoin y otras criptomonedas en Colombia, somos la plataforma más rápida, y sencilla para hacerlo.</p></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">author</span></td>
                                                <td scope="col"><p class="">XelerGo!</p></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">og:url</span></td>
                                                <td scope="col"><p class=""></p></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">og:type</span></td>
                                                <td scope="col"><p class=""></p></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">og:image:url</span></td>
                                                <td scope="col"><p class=""></p></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">og:title</span></td>
                                                <td scope="col"><p></p></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">og:locale</span></td>
                                                <td scope="col"><p>es_ES</p></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">og:site_name</span></td>
                                                <td scope="col"><p></p></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                            <tr>
                                                <td scope="col"><span class="nombre">og:description</span></td>
                                                <td scope="col"><p></p></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                            <div class="col-1"></div>
                        </div>


                      </div>
                      <div class="tab-pane fade" id="config-tab-pane" role="tabpanel" aria-labelledby="config-tab" tabindex="0">
                          <div class="row">  
                            <div class="col-1"></div>
                            <div class="col-10">
                                <h4 class="titulo espa">Configuración FAQ</h4>
                                <table class="table table-striped table-borderless">
                                        <thead>
                                            <tr>
                                                <th class="tit_tab">NOMBRE</th>
                                                <th class="tit_tab">valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="col"><span class="nombre">¿Preguntas? | Contacto</span></td>
                                                <td scope="col"><p class="">Visita nuestro →<a href="https://help.xeler.io/" target="_blank"> centro de respuestas a preguntas frecuentes.</a></p></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                            <div class="col-1"></div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="contra-tab-pane" role="tabpanel" aria-labelledby="contra-tab" tabindex="0">
                          <div class="row">  
                            <div class="col-1"></div>
                            <div class="col-10">
                                <h4 class="titulo espa">Configuración Categorias Ticket</h4>
                                <table class="table table-striped table-borderless">
                                        <thead>
                                            <tr>
                                                <th class="tit_tab">NOMBRE CATEGORÍA</th>
                                                <th class="tit_tab"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="col"><span class="nombre">Correcciones en Perfil</span></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                             <tr>
                                                <td scope="col"><span class="nombre">Problema con una Transaccion</span></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                             <tr>
                                                <td scope="col"><span class="nombre">Error de Funcionamiento</span></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                             <tr>
                                                <td scope="col"><span class="nombre">Otros</span></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                             <tr>
                                                <td scope="col"><span class="nombre">Sugerencias y recomendaciones.</span></td>
                                                <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                            <div class="col-1"></div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="wallet-tab-pane" role="tabpanel" aria-labelledby="wallet-tab" tabindex="0">
                          <div class="row">
                            <div class="row">
                                <div class="col-9">
                                    <h4 class="titulo espa">Links Redes Sociales</h4>  
                                </div>
                                <div class="col-3">
                                    
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                        <label class="form-check-label" for="flexSwitchCheckDefault">Mostrár en el Area del cliente</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                        <label class="form-check-label" for="flexSwitchCheckDefault">Mostrár en Login y Registro</label>
                                    </div>
                                </div>
                                <hr class="linea">
                                <div class="col-12 col-md-4">
                                    <br/>
                                    <label class="form-label">Facebook</label>
                                    <InputGenerico value="" placeholder="Fecha de desbloqueo"></InputGenerico>
                                </div>
                                <div class="col-12 col-md-4">
                                    <br/>
                                    <label class="form-label">Instagram</label>
                                    <InputGenerico value="" placeholder="Fecha de desbloqueo"></InputGenerico>
                                </div>
                                <div class="col-12 col-md-4">
                                    <br/>
                                    <label class="form-label">Twitter</label>
                                    <InputGenerico value="" placeholder="Fecha de desbloqueo"></InputGenerico>
                                </div>
                                <div class="col-12 col-md-4">
                                    <br/>
                                    <label class="form-label">Telegram</label>
                                    <InputGenerico value="" placeholder="Fecha de desbloqueo"></InputGenerico>
                                </div>
                                <div class="col-12 ">
                                    <br/>
                                    <BotonGenerico class="factores" texto="Actualizar" data-bs-toggle="modal" data-bs-target="#exampleModal"></BotonGenerico>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="row contenedor d-none sup">
                <div class="col-12 col-lg-8 caja primero">


                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home2-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">DATOS PERSONALES</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile2-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">CUENTA BANCARIA</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact2-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">OTROS</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#config2-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CONFIGURACION</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contra2-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CONTRASEÑA</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#wallet2-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">WALLETS</button>
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
                    <div class="tab-pane fade" id="profile2-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <br/>
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="titulo">Su Lista de Cuentas Bancarias</h4>  
                                    </div>
                                    <div class="col-3">
                                        <button type="submit" class="btn_edit btn-primary2 btn-block2" data-bs-toggle="modal" data-bs-target="#exampleModal"><font-awesome-icon icon="fa-solid fa-plus" /></button>
                                    
                                    </div>
                                    <div class="col-12 fondo_col">
                                        <p class="parr_centrado">🚫 En las cuentas registradas en esta sección puedes recibir pagos.<br/>
                                        Si deseas enviarnos dinero mediante aplicación o Sucursal virtual unicamente recibiremos pagos de la cuenta que coincida con tu nombre y KYC</p>
                                    </div>





                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="tit_table">NOMBRE TITULAR</th>
                                                <th scope="col" class="tit_table">NOMBRE BANCO</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="let_movil"><font-awesome-icon icon="fa-solid fa-circle-check" class="positivo"/> Viviana</td>
                                                <td class="let_movil">BANCOLOMBIA</td>
                                                <td><button class="bot_opcion">...</button></td>
                                            </tr>
                                            <tr>
                                                <td class="let_movil"><font-awesome-icon icon="fa-solid fa-circle-xmark" class="negativo"/> Ana marines</td>
                                                <td class="let_movil">BANCOLOMBIA</td>
                                                <td><button class="bot_opcion">...</button></td>
                                            </tr>
                                            <tr>
                                                <td class="let_movil"><font-awesome-icon icon="fa-solid fa-circle-xmark" class="negativo"/> Viviana ruiz</td>
                                                <td class="let_movil">BANCO CAJA SOCIAL</td>
                                                <td><button class="bot_opcion">...</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    






                                </div>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </div>
                      <div class="tab-pane fade" id="contact2-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                          

                          <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <br/>
                                <div class="row">
                                    <div class="col-9">
                                        <h4 class="titulo">Su Lista de Cuentas otros</h4>  
                                    </div>
                                    <div class="col-3">
                                        <button type="submit" class="btn_edit btn-primary2 btn-block2" data-bs-toggle="modal" data-bs-target="#exampleModal"><font-awesome-icon icon="fa-solid fa-plus" /></button>
                                    </div>
                                    <!--<div class="col-12 fondo_col">
                                        <p class="parr_centrado">🚫 En las cuentas registradas en esta sección puedes recibir pagos.<br/>
                                        Si deseas enviarnos dinero mediante aplicación o Sucursal virtual unicamente recibiremos pagos de la cuenta que coincida con tu nombre y KYC</p>
                                    </div>-->





                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="tit_table">NOMBRE TITULAR</th>
                                                <th scope="col" class="tit_table">NOMBRE BANCO</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="let_movil"><font-awesome-icon icon="fa-solid fa-circle-check" class="positivo"/> Vian</td>
                                                <td class="let_movil">NEQUI</td>
                                                <td><button class="bot_opcion">...</button></td>
                                            </tr>
                                            <tr>
                                                <td class="let_movil"><font-awesome-icon icon="fa-solid fa-circle-xmark" class="negativo"/> Otra cuenta</td>
                                                <td class="let_movil">MOVII</td>
                                                <td><button class="bot_opcion">...</button></td>
                                            </tr>
                                        </tbody>
                                    </table>






                                </div>
                            </div>
                            <div class="col-1"></div>
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
                                        <h4 class="titulo">Su lista de wallets</h4>  
                                    </div>
                                    <div class="col-3">
                                        <button type="submit" class="btn_edit btn-primary2 btn-block2" data-bs-toggle="modal" data-bs-target="#exampleModal"><font-awesome-icon icon="fa-solid fa-plus" /></button>
                                    </div>
                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="tit_table">NOMBRE</th>
                                                <!--<th scope="col">WALLET</th>-->
                                                <th scope="col" class="tit_table">TIPO</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="let_movil">Bitpay</td>
                                                <!--<td>bc1qnv8wdf8g8uzs90eqtd482qe2ewxtez07w83r3mpy5pt73qycshws8w0ygw</td>-->
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
                <div class="col-12 col-lg-4 d-none d-lg-block">
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

                <div class="col-12 col-lg-4 d-block d-lg-none movil">
                    <div class="caja-b">
                        <p class="tit_kyc">Verificación de Identidad - KYC</p>
                        <p>Para cumplir con la regulación, el usuario deberá pasar por la verificación de identidad.</p>
                        <p>No ha enviado sus documentos para verificar su identidad. (KYC).</p>
                        <BotonGenerico class="boton" texto="Click para Proceder"></BotonGenerico>
                    </div>
                </div>
                <br/>
                <div class="col-12 col-lg-4 d-block d-lg-none movil">
                    <div class="caja-b">
                        <p class="tit_kyc">Gane con sus referidos</p>
                        <p>Invita tus amigos & familia.</p>
                        <p>Link de referido</p>
                    </div>
                </div>


                <div class="col-12 col-lg-8 caja espacio">
                    <h3 class="tit_veri">Verificacion de dos factores</h3>
                    <p>La autenticación de dos factores es un método para proteger tu cuenta. Cuando se activa, debes ingresar no solo tu contraseña, sino también un código especial. Puedes recibir este código en la aplicación móvil. Incluso si un tercero obtiene acceso a tu contraseña, aún no podrá acceder a su cuenta sin el código 2FA.</p>
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
    import InputGenerico from "@/components/Input-generico.vue";
    import BotonGenerico from "@/components/Boton-generico";
    import FooterDashboard from "@/components/FooterDashboard";
  /* eslint-disable */
export default {
    name: 'Dashboard',
    components:{
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
    @media only screen and (max-width: 767px) {
        .espacio{
            padding-top: 70px;
            padding-bottom: 2%;
        }
    }
    .linea{
        margin-top: 3%;
    }
    .espa{
        margin-top: 4%;
        margin-bottom: 2%;
    }
    .icono{
        font-size: 13px;
        display: inline-block;
        text-align: center;
        width: 25px;
        line-height: 23px;
        border-radius: 50%;
        border: 1px solid #d2dde9;
        color: #00d285;
        border-color: #00d285;
    }
    .input-item-label {
        font-size: 14px;
        font-weight: 600;
        color: #495463;
        line-height: 1.1;
        margin-bottom: 12px;
        display: inline-block;
    }
    .btn-light-alt {
        color: #495463;
        background: #e6effb;
        border-color: #e6effb;
    }
    .badge-md {
        padding: 6px 12px;
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
        min-width: 90px;
    }
    .badge-success {
        vertical-align: middle;
        border: 1px solid;
        text-decoration: none;
        border-color: #00d285;
    }
    .badge-outline {
        background: none;
        color: #495463;
    }
    .badge-success[href]:focus, .badge-success[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #1e7e34;
    }
    .nombre{
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.02em;
        line-height: 1.2;
        margin-top: 0;
        color: #495463;

    }
    .tit_tab{
        padding: 0 10px 0 0;
        font-size: 12px;
        line-height: 20px;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: #7668fe;
        text-transform: uppercase;
    }

    .table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {
       background-color:rgba(118,104,254,0.1);
    }
    @media only screen and (max-width: 580px) {
        .table{
            display: block;
            width: 100%;
            overflow-x: auto;
        }
    }
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