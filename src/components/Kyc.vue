<template>
    <div class="fondo">
        <div class="container">
            <div class="row espacio">
                <div class="col-12 car_parte2 parte2_left">
                    <div class="row" v-if="type === 'A'">
                        <div class="col-12">
                            <h4 class="tit_card">Lista Verificaciones</h4>
                            <br />
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="tit_tab">Usuario</th>
                                        <th class="tit_tab">Fecha de envio</th>
                                        <th colspan="3" class="tit_tab tit_center">Documentos</th>
                                        <th class="tit_tab">Estado</th>
                                        <th class="tit_tab"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="col"><span class="nombre">antoniocg</span><br /></td>
                                        <td scope="col" class="fecha">28 Jan, 2022 07:42 PM</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> ID frente</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-xmark" class="negativo" />
                                            </a> ID atras</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> Selfie</td>
                                        <td scope="col"><span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Aprobado</span>
                                        </td>
                                        <td scope="col"><button class="mas" v-on:click="type='B'">Detalles</button></td>
                                        <!--<td scope="col"><b-button id="popover-target-1" class="mas">...</b-button></td>-->
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">MelanieQuitian</span><br /></td>
                                        <td scope="col" class="fecha">28 Jan, 2022 07:42 PM</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> ID frente</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> ID atras</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> Selfie</td>
                                        <td scope="col"><span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Aprobado</span>
                                        </td>
                                        <td scope="col"><button class="mas" v-on:click="type='B'">Detalles</button></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">Dylanbarrios98</span><br /></td>
                                        <td scope="col" class="fecha">28 Jan, 2022 07:42 PM</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-xmark" class="negativo" />
                                            </a> ID frente</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-xmark" class="negativo" />
                                            </a> ID atras</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> Selfie</td>
                                        <td scope="col"><span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Aprobado</span>
                                        </td>
                                        <td scope="col"><button class="mas" v-on:click="type='B'">Detalles</button></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">WSDRI</span><br /></td>
                                        <td scope="col" class="fecha">28 Jan, 2022 07:42 PM</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> ID frente</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> ID atras</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> Selfie</td>
                                        <td scope="col"><span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Aprobado</span>
                                        </td>
                                        <td scope="col"><button class="mas" v-on:click="type='B'">Detalles</button></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">jorgelugo</span><br /></td>
                                        <td scope="col" class="fecha">28 Jan, 2022 07:42 PM</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> ID frente</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> ID atras</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> Selfie</td>
                                        <td scope="col"><span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Aprobado</span>
                                        </td>
                                        <td scope="col"><button class="mas" v-on:click="type='B'">Detalles</button></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">adeox</span><br /></td>
                                        <td scope="col" class="fecha">28 Jan, 2022 07:42 PM</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-xmark" class="negativo" />
                                            </a> ID frente</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> ID atras</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> Selfie</td>
                                        <td scope="col"><span
                                                class="dt-type-md badge badge-outline badge-success badge-md bot_apro">Aprobado</span>
                                        </td>
                                        <td scope="col"><button class="mas" v-on:click="type='B'">Detalles</button></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="nombre">luismanuel</span><br /></td>
                                        <td scope="col" class="fecha">28 Jan, 2022 07:42 PM</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> ID frente</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> ID atras</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> Selfie</td>
                                        <td scope="col"><span
                                                class="dt-type-md badge badge-outline badge-danger badge-md bot_pendi">Pendiente</span>
                                        </td>
                                        <td scope="col"><button class="mas" v-on:click="type='B'">Detalles</button></td>
                                    </tr>
                                    <tr>
                                        <!--<td scope="col"><span class="nombre">Paula Restrepo</span><br/><span class="subNombre">Paula12A</span></td>-->
                                        <td scope="col"><span class="nombre">Paula12A</span><br /></td>
                                        <td scope="col" class="fecha">28 Jan, 2022 07:42 PM</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-xmark" class="negativo" />
                                            </a> ID frente</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-check" class="positivo" />
                                            </a> ID atras</td>
                                        <td scope="col"><a href="#" class="margen ">
                                                <font-awesome-icon icon="fa-solid fa-circle-xmark" class="negativo" />
                                            </a> Selfie</td>
                                        <td scope="col"><span
                                                class="dt-type-md badge badge-outline badge-danger badge-md bot_pendi">Pendiente</span>
                                        </td>
                                        <td scope="col"><button class="mas" v-on:click="type='B'">Detalles</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div class="row" v-if="type === 'B'">
                        <div class="col-12">
                            <h4 class="tit_info">Información KYC de antonio caro</h4>
                        </div>
                        <div class="col-lg-3 col-12 dat_kyc">
                            <p class="sin_margen">Geolocalización: <span>Medellin CO</span></p>
                            <p class="sin_margen">IP: <span>192.168.0.1</span></p>
                            <p class="sin_margen">2022-08-21 13:56:42</p>
                            <br />
                            <p class="sin_margen">Primer Nombre: <span>Evelyn</span></p>
                            <p class="sin_margen">Segundo Nombre: <span>Yurani</span></p>
                            <p class="sin_margen">Primer Apellido: <span>Bedoya</span></p>
                            <p class="sin_margen">Segundo Apellido: <span>Franco</span></p>
                            <p class="sin_margen">Fecha de Nacimiento: <span>17/07/1994</span></p>
                            <p class="sin_margen">Documento: <span>1.026.151.990</span></p>
                            <p class="sin_margen">Ciudad: <span>Medellin</span></p>
                            <p class="sin_margen">Pais: <span>Colombia</span></p>
                            <br />
                            <p class="sin_margen tit_cheq">Chequeo listas</p>
                            <p class="sin_margen">Ultimo Chequeo<span>2022-08-21 13:56:42</span></p>
                            <p class="sin_margen">Duplicidad en sistema: <span>No</span></p>
                            <p class="sin_margen">Log valido: <span>Ok</span></p>
                        </div>
                        <div class="col-lg-3 col-md-4 col-12">
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10 conten_foto">
                                    <p class="sin_margen tit_cheq espa_movil">Selfie</p>
                                    <img class="img_veri" src="@/assets/veri_kyc1.png">
                                    <div class="row manip">
                                        <div class="col-1"></div>
                                        <div class="col-5">
                                            <img src="@/assets/girar_izq.png">
                                            <img src="@/assets/girar_der.png">
                                        </div>
                                        <div class="col-5">
                                            <img class="expand" src="@/assets/expand.png">
                                        </div>

                                    </div>
                                </div>
                                <div class="col-1"></div>
                                <div class="col-1"></div>
                                <div class="col-10">
                                    <div class="row">
                                        <div class="col-6">
                                            <button class="aprobar">APROBAR</button>
                                        </div>
                                        <div class="col-6">
                                            <button class="rechazar">RECHAZAR</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-12">
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10 conten_foto">
                                    <p class="sin_margen tit_cheq espa_movil">ID frente</p>
                                    <img class="img_veri" src="@/assets/veri_kyc2.png">
                                    <div class="row manip">
                                        <div class="col-1"></div>
                                        <div class="col-5">
                                            <img src="@/assets/girar_izq.png">
                                            <img src="@/assets/girar_der.png">
                                        </div>
                                        <div class="col-5">
                                            <img class="expand" src="@/assets/expand.png">
                                        </div>

                                    </div>
                                </div>
                                <div class="col-1"></div>
                                <div class="col-1"></div>
                                <div class="col-10">
                                    <div class="row">
                                        <div class="col-6">
                                            <button class="aprobar">APROBAR</button>
                                        </div>
                                        <div class="col-6">
                                            <button class="rechazar">RECHAZAR</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-12">
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10 conten_foto">
                                    <p class="sin_margen tit_cheq espa_movil">ID atras</p>
                                    <img class="img_veri" src="@/assets/veri_kyc3.png">
                                    <div class="row manip">
                                        <div class="col-1"></div>
                                        <div class="col-5">
                                            <img src="@/assets/girar_izq.png">
                                            <img src="@/assets/girar_der.png">
                                        </div>
                                        <div class="col-5">
                                            <img class="expand" src="@/assets/expand.png">
                                        </div>

                                    </div>
                                </div>
                                <div class="col-1"></div>
                                <div class="col-1"></div>
                                <div class="col-10">
                                    <div class="row">
                                        <div class="col-6">
                                            <button class="aprobar">APROBAR</button>
                                        </div>
                                        <div class="col-6">
                                            <button class="rechazar">RECHAZAR</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
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
    <b-popover target="popover-target-1" triggers="click" placement="left">
        <a class="mini_menu" href="http://104.248.246.251/admin/ver/1340/kyc_details"><em class="ti ti-eye"></em> Ver
            Detalles</a>
    </b-popover>
    <b-popover target="popover-target-2" triggers="click" placement="left">
        <a class="mini_menu" href="http://104.248.246.251/admin/ver/1340/kyc_details"><em class="ti ti-eye"></em> Ver
            Detalles</a>
    </b-popover>
    <b-popover target="popover-target-3" triggers="click" placement="left">
        <a class="mini_menu" href="http://104.248.246.251/admin/ver/1340/kyc_details"><em class="ti ti-eye"></em> Ver
            Detalles</a>
    </b-popover>
    <b-popover target="popover-target-4" triggers="click" placement="left">
        <a class="mini_menu" href="http://104.248.246.251/admin/ver/1340/kyc_details"><em class="ti ti-eye"></em> Ver
            Detalles</a>
    </b-popover>
    <b-popover target="popover-target-5" triggers="click" placement="left">
        <a class="mini_menu" href="http://104.248.246.251/admin/ver/1340/kyc_details"><em class="ti ti-eye"></em> Ver
            Detalles</a>
    </b-popover>
    <b-popover target="popover-target-6" triggers="click" placement="left">
        <a class="mini_menu" href="http://104.248.246.251/admin/ver/1340/kyc_details"><em class="ti ti-eye"></em> Ver
            Detalles</a>
    </b-popover>
    <b-popover target="popover-target-7" triggers="click" placement="left">
        <a class="mini_menu" href="http://104.248.246.251/admin/ver/1340/kyc_details"><em class="ti ti-eye"></em> Ver
            Detalles</a>
    </b-popover>
    <b-popover target="popover-target-8" triggers="click" placement="left">
        <a class="mini_menu" href="http://104.248.246.251/admin/ver/1340/kyc_details"><em class="ti ti-eye"></em> Ver
            Detalles</a>
    </b-popover>
</template>
<script>
import BotonGenerico from "@/components/Boton-generico";
/* eslint-disable */
export default {
    name: 'Kyc',
    components: {
        BotonGenerico,
        //VueTyper,
        //Money,
        //Loading
    },
    mounted() {
        $(function () {
            $('[data-toggle="popover"]').popover({
                html: true,
                content: function () {
                    return $('#popover-content').html();
                }
            });
        })
    },
    data() {
        return {
            type: 'A'
        }
    },
}
</script>
<style scoped>
.centrar {
    text-align: center;
}

.ajuste {
    min-width: auto;
    width: auto;
}

.aprobar {
    background-color: #BBF3E0;
    border: 0;
    font-size: 12px;
    border-radius: 12px;
    color: #1AD598;
    width: 100%;
    padding-top: 3px;
    padding-bottom: 5px;
    margin-top: 8px;
}

.rechazar {
    background-color: #E9AAC4;
    border: 0;
    font-size: 12px;
    border-radius: 12px;
    color: #D51A1A;
    width: 100%;
    padding-top: 3px;
    padding-bottom: 5px;
    margin-top: 8px;
}

.conten_foto {
    background-color: white;
    border-radius: 15px;
    padding-bottom: 10px;
}

.manip {
    padding-top: 10px;
}

.expand {
    float: right;
}

.img_veri {
    margin-left: 10%;
    width: 80%;
}

.tit_cheq {
    text-align: center;
    font-weight: bold;
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

.negativo {
    color: #ff6868;
}

.positivo {
    color: #00d285;
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
}

/*.mas {
        color: #495463;
        background: #e6effb;
        border-color: #e6effb;
        font-size: 10px;
    }*/
a {
    text-decoration: none;
}

.mini_menu {
    text-align: left;
    white-space: nowrap;
    color: #495463;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
}

.table-striped>tbody>tr:nth-child(2n+1)>td,
.table-striped>tbody>tr:nth-child(2n+1)>th {
    background-color: rgba(118, 104, 254, 0.1);
}

.table {
    display: block;
    width: 100%;
    overflow-x: auto;
}

@media only screen and (max-width: 575px) {
    .container {
        padding-left: 5%;
        padding-right: 5%;
    }
}

@media only screen and (max-width: 767px) {
    .espa_movil {
        margin-top: 20px;
    }

    .dat_kyc {
        width: 90% !important;
        margin-left: 5% !important;
        margin-right: 5% !important;
    }
}

.fecha {
    padding-top: 1%;
    font-size: 0.8em;
    color: #495463;
    letter-spacing: 0.02em;
    font-weight: 400;
    line-height: 1.3;
}

.subNombre {
    font-size: 12px;
    letter-spacing: 0.02em;
    padding-top: 7px;
    line-height: 1.3;
    font-weight: 400;

}

.nombre {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1.2;
    margin-top: 0;
    color: #495463;

}

.tit_center {
    text-align: center;
}

.tit_tab {
    padding: 0 10px 0 0;
    font-size: 12px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #7668fe;
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

.tit_info {
    margin-bottom: 20px !important;
    color: #342d6e;
    font-size: 1.3em;
    font-weight: 500;
    margin: 0;
    text-align: center;
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

table tr td {
    width: 1%;
    white-space: nowrap;
    padding-right: 15px;
}
</style>