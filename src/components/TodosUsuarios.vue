<template>
    <div class="fondo">
        <div class="container">
            <div class="row espacio">
                <div class="col-12 car_parte2 parte2_left">
                    <div class="row" v-if="type === 'A'">
                        <div class="col-12">
                            <h4 class="tit_card">Lista de usuarios</h4>
                            <br />
                            <table class="table table-borderless">
                                <thead>
                                    <td class="tit">Usuario</td>
                                    <td class="tit">Email</td>
                                    <td class="tit center" colspan="4">Estado Verificación</td>
                                    <td class="tit">Activo</td>
                                    <td class="tit">Fecha de registro</td>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="col"><span class="nombre">antoniocg</span></td>
                                        <td scope="col" class="text">correo@correo.com</td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            Email
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            Celular
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />KYC
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Notas
                                        </td>
                                        <td scope="col" class="text">
                                            <span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Activo</span>
                                        </td>
                                        <td scope="col" class="text">2022-06-07 21:30:00</td>
                                        <td scope="col">
                                            <b-button id="popover-target-1" class="mas">Detalles</b-button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">MelanieQuitian</span></td>
                                        <td scope="col" class="text">correo@correo.com</td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Email
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            Celular
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> KYC
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Notas
                                        </td>
                                        <td scope="col" class="text">
                                            <span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Activo</span>
                                        </td>
                                        <td scope="col" class="text">2022-06-07 21:30:00</td>
                                        <td scope="col"><a href="#"
                                                class="btn btn-light-alt btn-xs btn-icon toggle-tigger">...</a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">Dylanbarrios98</span></td>
                                        <td scope="col" class="text">correo@correo.com</td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Email
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            Celular
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> KYC
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Notas
                                        </td>
                                        <td scope="col" class="text">
                                            <span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Activo</span>
                                        </td>
                                        <td scope="col" class="text">2022-06-07 21:30:00</td>
                                        <td scope="col"><a href="#"
                                                class="btn btn-light-alt btn-xs btn-icon toggle-tigger">...</a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">WSDRI</span></td>
                                        <td scope="col" class="text">correo@correo.com</td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Email
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            Celular
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> KYC
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Notas
                                        </td>
                                        <td scope="col" class="text">
                                            <span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Activo</span>
                                        </td>
                                        <td scope="col" class="text">2022-06-07 21:30:00</td>
                                        <td scope="col"><a href="#"
                                                class="btn btn-light-alt btn-xs btn-icon toggle-tigger">...</a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">jorgelugo</span></td>
                                        <td scope="col" class="text">correo@correo.com</td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Email
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            Celular
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> KYC
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Notas
                                        </td>
                                        <td scope="col" class="text">
                                            <span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Activo</span>
                                        </td>
                                        <td scope="col" class="text">2022-06-07 21:30:00</td>
                                        <td scope="col"><a href="#"
                                                class="btn btn-light-alt btn-xs btn-icon toggle-tigger">...</a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">adeox</span></td>
                                        <td scope="col" class="text">correo@correo.com</td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Email
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            Celular
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> KYC
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Notas
                                        </td>
                                        <td scope="col" class="text">
                                            <span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Activo</span>
                                        </td>
                                        <td scope="col" class="text">2022-06-07 21:30:00</td>
                                        <td scope="col"><a href="#"
                                                class="btn btn-light-alt btn-xs btn-icon toggle-tigger">...</a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">luismanuel</span></td>
                                        <td scope="col" class="text">correo@correo.com</td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Email
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            Celular
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> KYC
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Notas
                                        </td>
                                        <td scope="col" class="text">
                                            <span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Activo</span>
                                        </td>
                                        <td scope="col" class="text">2022-06-07 21:30:00</td>
                                        <td scope="col"><a href="#"
                                                class="btn btn-light-alt btn-xs btn-icon toggle-tigger">...</a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">Paula12A</span></td>
                                        <td scope="col" class="text">correo@correo.com</td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Email
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            Celular
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> KYC
                                        </td>
                                        <td scope="col" class="text">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" /> Notas
                                        </td>
                                        <td scope="col" class="text">
                                            <span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Activo</span>
                                        </td>
                                        <td scope="col" class="text">2022-06-07 21:30:00</td>
                                        <td scope="col"><a href="#"
                                                class="btn btn-light-alt btn-xs btn-icon toggle-tigger">...</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


















                    <div class="row espacio-b" v-if="type === 'B'">
                        <div class="col-12">
                            <h4 class="tit_info">Detalles de usuario</h4>
                        </div>

                        <div class="col-lg-12 dat_kyc">
                            <table>
                                <tr>
                                    <td>
                                        <p class="sin_margen"><b>Nombre Completo</b> <span>sTmWcysy sTmWcysy</span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Código Celular</b> <span>813529</span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Referido Por </b> <span>Registrado sin ser
                                                referido!</span></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p class="sin_margen"><b>Notificaciones </b>
                                            <BotonGenerico texto="Configurar" class="boton mas peque" />
                                        </p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Puntos referido</b> <span>0</span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Método de Registro </b> <span>Email</span></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p class="sin_margen"><b>Segunda clave</b> <span>
                                                <BotonGenerico texto="Configurar" class="boton mas peque" />
                                            </span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Fecha de Nacimiento </b> <span>No agregado aún!</span>
                                        </p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>2FA Habilitado </b> <span>No</span>
                                        </p>
                                    </td>
                                </tr>






                                <tr>
                                    <td>
                                        <p class="sin_margen"><b>Tipo de usuario</b> <span>Cliente</span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Transacciones </b> <span>
                                                <BotonGenerico texto="Ver" class="boton mas peque" />
                                            </span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Telegram ID </b> <span>No agregado</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p class="sin_margen"><b>email</b> <span>testing@example.com</span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Nacionalidad </b> <span>No agregado aún!</span></p>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p class="sin_margen"><b>Número Celular</b> <span>555-666-0606</span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Fecha de Registro </b> <span>15 Sep, 2022 04:48
                                                AM</span></p>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="col-12">
                            <br />
                            <h4 class="tit_info2">Notas</h4>
                            <textarea name="notas" id="notas" cols="50" rows="3"></textarea>
                        </div>
                        <div class="col-12">
                            <br />
                            <BotonGenerico class="ajuste espa_movil boton" texto="Guardar cambios"
                                v-on:click="type='A'">
                            </BotonGenerico>
                        </div>
                        <hr class="linea" />
                        <div class="col-12">
                            <br />
                            <h4 class="tit_info2">Cuentas registradas</h4>
                        </div>
                        <div class="col-12 centrar">
                            <BotonGenerico class="ajuste espa_movil" texto="Atras" v-on:click="type='A'">
                            </BotonGenerico>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    </div>
    <!--POPOVERS-->
    <b-popover target="popover-target-1" triggers="focus" placement="bottom">
        <ul class="ul_correct">
            <li class="quit_esti"><img src="@/assets/vista.svg" alt=""><a class="mini_menu" v-on:click="type='B'"
                    href="#"><em class="ti ti-eye"></em>
                    Ver Detalles</a></li>
            <li class="quit_esti"><img src="@/assets/vista.svg" alt=""><a class="mini_menu" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" href="#"><em class="ti ti-eye"></em>
                    Modificar Usuario</a></li>
            <!--<li class="quit_esti"><img src="@/assets/vista.svg" alt=""><em class="ti ti-eye"></em><button
                    class="mini_menu" v-on:click="type='B'">Ver Detalles</button></li>-->
            <li class="quit_esti"><img src="@/assets/vista.svg" alt="">
                <a class="mini_menu" data-bs-toggle="modal" data-bs-target="#actividad_usuario" href="#"><em
                        class="ti ti-eye"></em> Actividad</a>
            </li>
            <li class="quit_esti"><img src="@/assets/resumen.svg" alt=""><a class="mini_menu" data-bs-toggle="modal"
                    data-bs-target="#email" href="#"><em class="ti ti-eye"></em>
                    Enviar Email</a></li>
            <li class="quit_esti"><img src="@/assets/resumen.svg" alt=""><a class="mini_menu" data-bs-toggle="modal"
                    data-bs-target="#exampleModal2" href="#"><em class="ti ti-eye"></em>
                    Reenviar Verificación</a></li>
        </ul>
    </b-popover>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <a data-bs-dismiss="modal"><img src="@/assets/cerrar.svg" class="img_cerrar" alt="cerrar"></a>
                    <h4 class="centrar">Modificar usuario</h4>
                    <br />
                    <div class="row">
                        <div class="col-12 flex">
                            <p class="tx">Primer nombre</p>
                            <InputGenerico class="fixed" value="" placeholder="nombre"></InputGenerico>
                        </div>
                        <div class="col-12 flex">
                            <p class="tx">Segundo nombre</p>
                            <InputGenerico class="fixed" value="" placeholder="segundo nombre"></InputGenerico>
                        </div>
                        <div class="col-12 flex">
                            <p class="tx">Primer apellido</p>
                            <InputGenerico class="fixed" value="" placeholder="primer apellido"></InputGenerico>
                        </div>
                        <div class="col-12 flex">
                            <p class="tx">Segundo apellido</p>
                            <InputGenerico class="fixed" value="" placeholder="segundo apellido"></InputGenerico>
                        </div>
                        <div class="col-12 flex">
                            <p class="tx">Email</p>
                            <InputGenerico class="fixed" value="" placeholder="email@email.com"></InputGenerico>
                        </div>
                        <div class="col-12 flex">
                            <p class="tx">Numero celular</p>
                            <InputGenerico class="fixed" value="" placeholder="123 123 423"></InputGenerico>
                        </div>
                        <div class="centrar">
                            <br />
                            <BotonGenerico texto="Actualizar Usuario" class="boton" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="actividad_usuario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <a data-bs-dismiss="modal"><img src="@/assets/cerrar.svg" class="img_cerrar" alt="cerrar"></a>
                    <h4 class="centrar">Actividad de usuario</h4>
                    <br />
                    <div class="row">
                        <p>Inicio de sesión 1</p>
                        <p>Inicio de sesión 2</p>
                        <p>Inicio de sesión 3</p>
                        <p>Inicio de sesión 4</p>
                        <p>Esto se organiza mejor cuando se integre la api</p>

                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="email" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <a data-bs-dismiss="modal"><img src="@/assets/cerrar.svg" class="img_cerrar" alt="cerrar"></a>
                    <h4 class="centrar">Enviar Email</h4>
                    <br />
                    <div class="row">
                        <p>Asunto</p>
                        <InputGenerico />
                        <br />
                        <p>Mensaje</p>
                        <textarea name="notas" id="notas" cols="50" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
import BotonGenerico from "@/components/Boton-generico";
import InputGenerico from "@/components/Input-generico.vue";
/* eslint-disable */
export default {
    name: 'Kyc',
    components: {
        BotonGenerico,
        InputGenerico,
    },
    data() {
        return {
            type: 'A'
        }
    },
}
</script>
<style scoped>
table {
    display: block;
    width: 100%;
    overflow-x: auto;
}

.peque {
    width: auto;
    min-width: 100px;
    padding: 0;
}

.linea {
    margin-top: 20px;
}

#notas {
    width: 100%;
    border-radius: 18px;
    border-color: #5043E9;
}

.sin_margen {
    margin: 0;
}

.dat_kyc {
    background: white;
    padding: 2%;
    border: 1px;
    border-style: solid;
    border-color: #5043E9;
    border-radius: 15px;
}

.tit_info {
    margin-bottom: 20px !important;
    color: #342d6e;
    font-size: 1.3em;
    font-weight: 500;
    margin: 0;
    text-align: center;
}

.tit_info2 {
    margin-bottom: 20px !important;
    color: #342d6e;
    font-size: 1.2em;
    font-weight: 500;
    margin: 0;
}

.espacio-b {
    padding-left: 5%;
    padding-right: 5%;
}

.boton {
    width: auto;
}

.tx {
    width: 200px;
}

.fixed {
    height: 29px;
}

.centrar {
    text-align: center;
}

.flex {
    display: flex;
}

.img_cerrar {
    width: 50px;
    position: absolute;
    right: -25px;
    top: -20px;
}

.mini_menu {
    padding-bottom: 20px;
    text-decoration: none;
    color: #8B2CF5;
    font-size: 16px;
    font-weight: 600;
    display: inline;
    cursor: pointer;

}

.quit_esti {
    list-style: none;
    padding-bottom: 10px;
}

.ul_correct {
    margin: 0;
    padding: 0;
}

.mas {
    background-color: white;
    box-shadow: none;
    border-style: solid;
    border-color: #844DDD;
    border-width: 1px;
    border-radius: 20px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 12px;
    color: black;
}

.center {
    text-align: center;
}

.negativo {
    color: #ff6868;
}

.positivo {
    color: #00d285;
}

.table-striped>tbody>tr:nth-child(2n+1)>td,
.table-striped>tbody>tr:nth-child(2n+1)>th {
    background-color: rgba(118, 104, 254, 0.1);
}

@media only screen and (max-width: 580px) {
    .table {
        display: block;
        width: 100%;
        overflow-x: auto;
    }
}

.icono {
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

.text {
    font-size: 13px;
    color: #495463;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1;
}

.min {
    font-size: 12px;
    font-weight: 400;
    color: #758698;
    letter-spacing: 0.01em;
    line-height: 1;
    padding-top: 7px;
}

.nombre {
    font-size: 14px;
    font-weight: 600;
    color: #495463;
    letter-spacing: 0.01em;
    line-height: 1;
    margin-top: 0;
    margin-right: 4px;
}

.tit {
    padding: 0 10px 0 0;
    font-size: 12px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #7668fe;
    border-bottom: none;
}

.final {
    margin-top: 3%;
}

.espacio {
    padding-top: 70px;
    padding-bottom: 2%;
}

.parte2_right {
    margin-top: 3%;
    width: 56.83333333%;
    margin-left: 1.5%;
}

.tit_card {
    color: #342d6e;
    font-size: 1.15em;
    font-weight: 500;
    margin: 0;
}

.precio {
    font-size: 24px;
    line-height: 1;
    color: #495463;
    font-weight: 500;
}

.cripto {
    font-size: 19px;
    display: inline-block;
    margin-right: 3px;
    font-weight: 700;
}

small {
    font-size: 80%;
    font-weight: 400;
}

.fondo {
    background: #eef2f8;
}

.car {
    background: white;
    border: 0;
    padding: 2%;
    width: 30%;
    margin-right: 3%;
}

.car_parte2 {
    background: white;
    border: 0;
    padding: 2%;
    /*width: 30%;
        margin-right: 3%;*/
}

.card_center {
    background: white;
    border: 0;
    padding: 2%;
}

.card_right {
    background: white;
    border: 0;
    padding: 2%;
    margin-left: 3%;
    width: 30%;
}

table tr td {
    width: 1%;
    white-space: nowrap;
    padding-right: 15px;
}

.btn-xs.btn-icon {
    padding: 4px 8px 4px;
}

.toggle-tigger {
    display: inline-block;
}

.btn-light-alt {
    color: #495463;
    background: #e6effb;
    border-color: #e6effb;
}

.btn-xs {
    font-size: 10px;
    line-height: 19px;
    text-transform: none;
    letter-spacing: 0.025em;
}

.badge-outline {
    background: none;
    color: #495463;
}

.badge-md {
    padding: 6px 12px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    min-width: 90px;
}

.badge {
    text-align: center;
    border-radius: 3px;
    border: 1px solid;
    vertical-align: middle;
}

.badge-info {
    border-color: #1babfe;
}

.badge-success {
    border-color: #00d285;
}

.badge-danger {
    border-color: #ff6868;
}

.bot_apro {
    background-color: #1ad59863 !important;
    padding: 5px 3px !important;
    border-radius: 6px !important;
    border: 0 !important;
    color: #1AD598 !important;
}

.bot_pendi {
    background-color: #D9E1E7 !important;
    padding: 5px 3px !important;
    border-radius: 6px !important;
    border: 0 !important;
    color: #99B2C6 !important;
}
</style>