<template>
    <div class="fondo">
        <div class="container">
            <div class="row espacio">
                <div class="col-12 car_parte2 parte2_left">
                    <div class="row" v-if="type === 'A'">
                        <div class="col-12">
                            <h4 class="tit_card">Transacciones pendientes</h4>
                            <br />
                            <table class="table">
                                <thead>
                                    <th></th>
                                    <th></th>
                                    <th class="tit text">Tranx nº</th>
                                    <th class="tit text">Usuario</th>
                                    <th class="tit text">Cop</th>
                                    <th class="tit text">Crypto</th>
                                    <th class="tit text">Usd</th>
                                    <th class="tit text">Dirección</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="col" class="right"><a href="#" class="margen icono">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </a><img class="verifi" src="@/assets/recibo_ok.png"><img class="verifi"
                                                src="@/assets/banco.png"><img class="verifi" src="@/assets/KYC.png"><img
                                                class="verifi" src="@/assets/orden_tomada.png"></td>
                                        <td><span class="text precio"> 2022-08-21 | 13:56:42</span></td>
                                        <td scope="col"><span class="text">TNX005094</span></td>
                                        <td scope="col"><span class="text precio">TEST</span></td>
                                        <td scope="col" class="text"><span>350.000<br /></span></td>
                                        <td scope="col" class="text"><span>0.00312<br /></span></td>
                                        <td scope="col" class="text"><span>93.00<br /></span></td>
                                        <td scope="col" class="text"><span>2NFKs...7yhXT<br /></span></td>
                                        <td scope="col" class="text">
                                            <b-button id="popover-target-1" class="mas">Detalles</b-button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" class="right"><a href="#" class="margen icono">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </a><img class="verifi" src="@/assets/compra.png"><img class="verifi"
                                                src="@/assets/KYC.png"><img class="verifi"
                                                src="@/assets/orden_tomada.png"></td>
                                        <td><span class="text precio"> 2022-08-21 | 13:56:42</span></td>
                                        <td scope="col"><span class="text">TNX005094</span></td>
                                        <td scope="col"><span class="text precio">TEST</span></td>
                                        <td scope="col" class="text"><span>350.000<br /></span></td>
                                        <td scope="col" class="text"><span>0.00312<br /></span></td>
                                        <td scope="col" class="text"><span>93.00<br /></span></td>
                                        <td scope="col" class="text"><span>2NFKs...7yhXT<br /></span></td>
                                        <td scope="col" class="text">
                                            <b-button id="popover-target-2" class="mas">Detalles</b-button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" class="right"><a href="#" class="margen icono">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </a><img class="verifi" src="@/assets/recibo_ok.png"><img class="verifi"
                                                src="@/assets/banco.png"><img class="verifi"
                                                src="@/assets/compra.png"><img class="verifi"
                                                src="@/assets/KYC.png"><img class="verifi"
                                                src="@/assets/orden_tomada.png"></td>
                                        <td><span class="text precio"> 2022-08-21 | 13:56:42</span></td>
                                        <td scope="col"><span class="text">TNX005094</span></td>
                                        <td scope="col"><span class="text precio">TEST</span></td>
                                        <td scope="col" class="text"><span>350.000<br /></span></td>
                                        <td scope="col" class="text"><span>0.00312<br /></span></td>
                                        <td scope="col" class="text"><span>93.00<br /></span></td>
                                        <td scope="col" class="text"><span>2NFKs...7yhXT<br /></span></td>
                                        <td scope="col" class="text">
                                            <b-button id="popover-target-3" class="mas">Detalles</b-button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" class="right"><a href="#" class="margen icono">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </a><img class="verifi" src="@/assets/recibo_ok.png"><img class="verifi"
                                                src="@/assets/banco.png"><img class="verifi"
                                                src="@/assets/compra.png"><img class="verifi" src="@/assets/KYC.png">
                                        </td>
                                        <td><span class="text precio"> 2022-08-21 | 13:56:42</span></td>
                                        <td scope="col"><span class="text">TNX005094</span></td>
                                        <td scope="col"><span class="text precio">TEST</span></td>
                                        <td scope="col" class="text"><span>350.000<br /></span></td>
                                        <td scope="col" class="text"><span>0.00312<br /></span></td>
                                        <td scope="col" class="text"><span>93.00<br /></span></td>
                                        <td scope="col" class="text"><span>2NFKs...7yhXT<br /></span></td>
                                        <td scope="col" class="text">
                                            <b-button id="popover-target-4" class="mas">Detalles</b-button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" class="right"><a href="#" class="margen icono">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </a><img class="verifi" src="@/assets/recibo_ok.png"><img class="verifi"
                                                src="@/assets/compra.png"><img class="verifi"
                                                src="@/assets/KYC.png"><img class="verifi"
                                                src="@/assets/orden_tomada.png"></td>
                                        <td><span class="text precio"> 2022-08-21 | 13:56:42</span></td>
                                        <td scope="col"><span class="text">TNX005094</span></td>
                                        <td scope="col"><span class="text precio">TEST</span></td>
                                        <td scope="col" class="text"><span>350.000<br /></span></td>
                                        <td scope="col" class="text"><span>0.00312<br /></span></td>
                                        <td scope="col" class="text"><span>93.00<br /></span></td>
                                        <td scope="col" class="text"><span>2NFKs...7yhXT<br /></span></td>
                                        <td scope="col" class="text">
                                            <b-button id="popover-target-5" class="mas">Detalles</b-button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" class="right"><a href="#" class="margen icono">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </a><img class="verifi" src="@/assets/recibo_ok.png"><img class="verifi"
                                                src="@/assets/banco.png"><img class="verifi" src="@/assets/compra.png">
                                        </td>
                                        <td><span class="text precio"> 2022-08-21 | 13:56:42</span></td>
                                        <td scope="col"><span class="text">TNX005094</span></td>
                                        <td scope="col"><span class="text precio">TEST</span></td>
                                        <td scope="col" class="text"><span>350.000<br /></span></td>
                                        <td scope="col" class="text"><span>0.00312<br /></span></td>
                                        <td scope="col" class="text"><span>93.00<br /></span></td>
                                        <td scope="col" class="text"><span>2NFKs...7yhXT<br /></span></td>
                                        <td scope="col" class="text">
                                            <b-button id="popover-target-6" class="mas">Detalles</b-button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" class="right"><a href="#" class="margen icono">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </a><img class="verifi" src="@/assets/recibo_ok.png"><img class="verifi"
                                                src="@/assets/banco.png"><img class="verifi"
                                                src="@/assets/compra.png"><img class="verifi" src="@/assets/KYC.png">
                                        </td>
                                        <td><span class="text precio"> 2022-08-21 | 13:56:42</span></td>
                                        <td scope="col"><span class="text">TNX005094</span></td>
                                        <td scope="col"><span class="text precio">TEST</span></td>
                                        <td scope="col" class="text"><span>350.000<br /></span></td>
                                        <td scope="col" class="text"><span>0.00312<br /></span></td>
                                        <td scope="col" class="text"><span>93.00<br /></span></td>
                                        <td scope="col" class="text"><span>2NFKs...7yhXT<br /></span></td>
                                        <td scope="col" class="text">
                                            <b-button id="popover-target-7" class="mas">Detalles</b-button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" class="right"><a href="#" class="margen icono">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </a><img class="verifi" src="@/assets/recibo_ok.png"><img class="verifi"
                                                src="@/assets/banco.png"><img class="verifi"
                                                src="@/assets/compra.png"><img class="verifi"
                                                src="@/assets/KYC.png"><img class="verifi"
                                                src="@/assets/orden_tomada.png"></td>
                                        <td><span class="text precio"> 2022-08-21 | 13:56:42</span></td>
                                        <td scope="col"><span class="text">TNX005094</span></td>
                                        <td scope="col"><span class="text precio">TEST</span></td>
                                        <td scope="col" class="text"><span>350.000<br /></span></td>
                                        <td scope="col" class="text"><span>0.00312<br /></span></td>
                                        <td scope="col" class="text"><span>93.00<br /></span></td>
                                        <td scope="col" class="text"><span>2NFKs...7yhXT<br /></span></td>
                                        <td scope="col" class="text">
                                            <b-button id="popover-target-8" class="mas">Detalles</b-button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" class="right"><a href="#" class="margen icono">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </a><img class="verifi" src="@/assets/recibo_ok.png"><img class="verifi"
                                                src="@/assets/banco.png"><img class="verifi"
                                                src="@/assets/compra.png"><img class="verifi"
                                                src="@/assets/KYC.png"><img class="verifi"
                                                src="@/assets/orden_tomada.png"></td>
                                        <td><span class="text precio"> 2022-08-21 | 13:56:42</span></td>
                                        <td scope="col"><span class="text">TNX005094</span></td>
                                        <td scope="col"><span class="text precio">TEST</span></td>
                                        <td scope="col" class="text"><span>350.000<br /></span></td>
                                        <td scope="col" class="text"><span>0.00312<br /></span></td>
                                        <td scope="col" class="text"><span>93.00<br /></span></td>
                                        <td scope="col" class="text"><span>2NFKs...7yhXT<br /></span></td>
                                        <td scope="col" class="text">
                                            <b-button id="popover-target-9" class="mas">Detalles</b-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="row espacio-b" v-if="type === 'B'">
                        <div class="col-12">
                            <h4 class="tit_info">Detalles transaccion: TXN3449</h4>
                        </div>

                        <div class="col-lg-12 dat_kyc">
                            <table>
                                <tr>
                                    <td>
                                        <p class="sin_margen"><b>Fecha:</b> <span>29-08-2022 22:01</span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Estado:</b> <span>EN PROCESO</span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Tomada por:</b> <span>WSDRALIA</span></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p class="sin_margen"><b>Usuario:</b> <span>Capihrina22</span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Nombre titular:</b> <span>Xgo 11</span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Numero de cuenta:</b> <span>2562 2261 2152</span></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p class="sin_margen"><b>Banco:</b> <span>Bancolombia</span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Cantidad comprada:</b> <span>$255,000</span></p>
                                    </td>
                                    <td>
                                        <p class="sin_margen"><b>Nombre Cliente:</b> <span>Bernardo Amaya Lopez</span>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="col-12 qr">
                            <img src="@/assets/qr.png" alt="">
                            <br />
                            <small>Click en el qr para abrir en tu wallet</small>

                        </div>



                        <!--<div class="col-lg-5 col-12 dat_kyc">
                            <div class="row">
                                <div class="col-6">
                                    <p class="sin_margen">Fecha: <span>29-08-2022 22:01</span></p>
                                    <p class="sin_margen">Estado: <span>EN PROCESO</span></p>
                                    <p class="sin_margen">Tomada por: <span>WSDRALIA</span></p>
                                    <p class="sin_margen">Usuario: <span>Capihrina22</span></p>
                                </div>
                                <div class="col-6">
                                    <p class="sin_margen">Nombre titular: <span>Xgo 11</span></p>
                                    <p class="sin_margen">Numero de cuenta: <span>2562 2261 2152</span></p>
                                    <p class="sin_margen">Banco: <span>Bancolombia</span></p>
                                    <p class="sin_margen">Cantidad comprada: <span>$255,000</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2"></div>
                        <div class="col-lg-5 col-12 dat_kyc">
                            <div class="row">
                                <div class="col-6">
                                    <table>
                                        <tr>
                                            <td>Tipo de transacción:</td>
                                            <td>Compra</td>
                                        </tr>
                                        <tr>
                                            <td>Metodo de pago:</td>
                                            <td>Banco</td>
                                        </tr>
                                        <tr>
                                            <td>Tipo de pago:</td>
                                            <td>Transferencia</td>
                                        </tr>
                                        <tr>
                                            <td>Moneda:</td>
                                            <td>BTC</td>
                                        </tr>
                                        <tr>
                                            <td>Dirección de envio:</td>
                                            <td>bc135sRt32621s2e32rltsd5</td>
                                        </tr>
                                        <tr>
                                            <td>Cantidad</td>
                                            <td>0.225</td>
                                        </tr>
                                        <tr>
                                            <td>Comisión seleccionada:</td>
                                            <td>0.000021</td>
                                        </tr>
                                        <tr>
                                            <td>Total a enviar:</td>
                                            <td>0.2248</td>
                                        </tr>
                                    </table>

                                </div>
                                <div class="col-6">

                                </div>

                            </div>
                        </div>-->
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
            <li class="quit_esti"><img src="@/assets/rechazo.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Rechazar</a></li>
            <li class="quit_esti"><img src="@/assets/desembolso.svg" alt=""><a class="mini_menu" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" href="#"><em class="ti ti-eye"></em>
                    Desembolso externo</a></li>
            <!--<li class="quit_esti"><img src="@/assets/vista.svg" alt=""><em class="ti ti-eye"></em><button
                    class="mini_menu" v-on:click="type='B'">Ver Detalles</button></li>-->
            <li class="quit_esti"><img src="@/assets/vista.svg" alt="">
                <p v-on:click="type='B'" class="mini_menu"><em class="ti ti-eye"></em> Ver
                    Detalles</p>
            </li>
            <li class="quit_esti"><img src="@/assets/resumen.svg" alt=""><a class="mini_menu" data-bs-toggle="modal"
                    data-bs-target="#exampleModal2" href="#"><em class="ti ti-eye"></em>
                    Resumen</a></li>
        </ul>
    </b-popover>
    <b-popover target="popover-target-2" triggers="focus" placement="bottom">
        <ul class="ul_correct">
            <li class="quit_esti"><img src="@/assets/rechazo.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Rechazar</a></li>
            <li class="quit_esti"><img src="@/assets/desembolso.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Desembolso externo</a></li>
            <!--<li class="quit_esti"><img src="@/assets/vista.svg" alt=""><em class="ti ti-eye"></em><button
                    class="mini_menu" v-on:click="type='B'">Ver Detalles</button></li>-->
            <li class="quit_esti"><img src="@/assets/vista.svg" alt="">
                <p v-on:click="type='B'" class="mini_menu"><em class="ti ti-eye"></em> Ver
                    Detalles</p>
            </li>
            <li class="quit_esti"><img src="@/assets/resumen.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Resumen</a></li>
        </ul>
    </b-popover>
    <b-popover target="popover-target-3" triggers="focus" placement="bottom">
        <ul class="ul_correct">
            <li class="quit_esti"><img src="@/assets/rechazo.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Rechazar</a></li>
            <li class="quit_esti"><img src="@/assets/desembolso.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Desembolso externo</a></li>
            <!--<li class="quit_esti"><img src="@/assets/vista.svg" alt=""><em class="ti ti-eye"></em><button
                    class="mini_menu" v-on:click="type='B'">Ver Detalles</button></li>-->
            <li class="quit_esti"><img src="@/assets/vista.svg" alt="">
                <p v-on:click="type='B'" class="mini_menu"><em class="ti ti-eye"></em> Ver
                    Detalles</p>
            </li>
            <li class="quit_esti"><img src="@/assets/resumen.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Resumen</a></li>
        </ul>
    </b-popover>
    <b-popover target="popover-target-4" triggers="focus" placement="bottom">
        <ul class="ul_correct">
            <li class="quit_esti"><img src="@/assets/rechazo.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Rechazar</a></li>
            <li class="quit_esti"><img src="@/assets/desembolso.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Desembolso externo</a></li>
            <!--<li class="quit_esti"><img src="@/assets/vista.svg" alt=""><em class="ti ti-eye"></em><button
                    class="mini_menu" v-on:click="type='B'">Ver Detalles</button></li>-->
            <li class="quit_esti"><img src="@/assets/vista.svg" alt="">
                <p v-on:click="type='B'" class="mini_menu"><em class="ti ti-eye"></em> Ver
                    Detalles</p>
            </li>
            <li class="quit_esti"><img src="@/assets/resumen.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Resumen</a></li>
        </ul>
    </b-popover>
    <b-popover target="popover-target-5" triggers="focus" placement="bottom">
        <ul class="ul_correct">
            <li class="quit_esti"><img src="@/assets/rechazo.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Rechazar</a></li>
            <li class="quit_esti"><img src="@/assets/desembolso.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Desembolso externo</a></li>
            <!--<li class="quit_esti"><img src="@/assets/vista.svg" alt=""><em class="ti ti-eye"></em><button
                    class="mini_menu" v-on:click="type='B'">Ver Detalles</button></li>-->
            <li class="quit_esti"><img src="@/assets/vista.svg" alt="">
                <p v-on:click="type='B'" class="mini_menu"><em class="ti ti-eye"></em> Ver
                    Detalles</p>
            </li>
            <li class="quit_esti"><img src="@/assets/resumen.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Resumen</a></li>
        </ul>
    </b-popover>
    <b-popover target="popover-target-6" triggers="focus" placement="bottom">
        <ul class="ul_correct">
            <li class="quit_esti"><img src="@/assets/rechazo.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Rechazar</a></li>
            <li class="quit_esti"><img src="@/assets/desembolso.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Desembolso externo</a></li>
            <!--<li class="quit_esti"><img src="@/assets/vista.svg" alt=""><em class="ti ti-eye"></em><button
                    class="mini_menu" v-on:click="type='B'">Ver Detalles</button></li>-->
            <li class="quit_esti"><img src="@/assets/vista.svg" alt="">
                <p v-on:click="type='B'" class="mini_menu"><em class="ti ti-eye"></em> Ver
                    Detalles</p>
            </li>
            <li class="quit_esti"><img src="@/assets/resumen.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Resumen</a></li>
        </ul>
    </b-popover>
    <b-popover target="popover-target-7" triggers="focus" placement="bottom">
        <ul class="ul_correct">
            <li class="quit_esti"><img src="@/assets/rechazo.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Rechazar</a></li>
            <li class="quit_esti"><img src="@/assets/desembolso.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Desembolso externo</a></li>
            <!--<li class="quit_esti"><img src="@/assets/vista.svg" alt=""><em class="ti ti-eye"></em><button
                    class="mini_menu" v-on:click="type='B'">Ver Detalles</button></li>-->
            <li class="quit_esti"><img src="@/assets/vista.svg" alt="">
                <p v-on:click="type='B'" class="mini_menu"><em class="ti ti-eye"></em> Ver
                    Detalles</p>
            </li>
            <li class="quit_esti"><img src="@/assets/resumen.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Resumen</a></li>
        </ul>
    </b-popover>
    <b-popover target="popover-target-8" triggers="focus" placement="bottom">
        <ul class="ul_correct">
            <li class="quit_esti"><img src="@/assets/rechazo.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Rechazar</a></li>
            <li class="quit_esti"><img src="@/assets/desembolso.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Desembolso externo</a></li>
            <!--<li class="quit_esti"><img src="@/assets/vista.svg" alt=""><em class="ti ti-eye"></em><button
                    class="mini_menu" v-on:click="type='B'">Ver Detalles</button></li>-->
            <li class="quit_esti"><img src="@/assets/vista.svg" alt="">
                <p v-on:click="type='B'" class="mini_menu"><em class="ti ti-eye"></em> Ver
                    Detalles</p>
            </li>
            <li class="quit_esti"><img src="@/assets/resumen.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Resumen</a></li>
        </ul>
    </b-popover>
    <b-popover target="popover-target-9" triggers="focus" placement="bottom">
        <ul class="ul_correct">
            <li class="quit_esti"><img src="@/assets/rechazo.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Rechazar</a></li>
            <li class="quit_esti"><img src="@/assets/desembolso.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Desembolso externo</a></li>
            <!--<li class="quit_esti"><img src="@/assets/vista.svg" alt=""><em class="ti ti-eye"></em><button
                    class="mini_menu" v-on:click="type='B'">Ver Detalles</button></li>-->
            <li class="quit_esti"><img src="@/assets/vista.svg" alt="">
                <p v-on:click="type='B'" class="mini_menu"><em class="ti ti-eye"></em> Ver
                    Detalles</p>
            </li>
            <li class="quit_esti"><img src="@/assets/resumen.svg" alt=""><a class="mini_menu" href="#"><em
                        class="ti ti-eye"></em>
                    Resumen</a></li>
        </ul>
    </b-popover>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <a data-bs-dismiss="modal"><img src="@/assets/cerrar.svg" class="img_cerrar" alt="cerrar"></a>
                    <h4 class="centrar">Transaccion : TXN 3449</h4>
                    <div class="row">
                        <div class="col-12 flex">
                            <p class="tx">Ingresa el tx id</p>
                            <InputGenerico class="fixed" value="" placeholder=""></InputGenerico>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <a data-bs-dismiss="modal"><img src="@/assets/cerrar.svg" class="img_cerrar" alt="cerrar"></a>
                    <h4 class="centrar">Resumen Transaccion : TXN 3449</h4>
                    <div class="row">
                        <div class="col-12 flex">
                            <table class="table table-stripped">
                                <tr>
                                    <td>Tipo de transacción: </td>
                                    <td>Compra</td>
                                </tr>
                                <tr>
                                    <td>Metodo de compra: </td>
                                    <td>Banco</td>
                                </tr>
                                <tr>
                                    <td>Tipo de pago: </td>
                                    <td>Transferencia</td>
                                </tr>
                                <tr>
                                    <td>Moneda: </td>
                                    <td>BTC</td>
                                </tr>
                                <tr>
                                    <td>Dirección de envio: </td>
                                    <td>BC135s</td>
                                </tr>
                                <tr>
                                    <td>Cantidad: </td>
                                    <td>0.225</td>
                                </tr>
                                <tr>
                                    <td>Comisión seleccionada: </td>
                                    <td>0.000021</td>
                                </tr>
                                <tr>
                                    <td>Total a enviar: </td>
                                    <td>0.2248</td>
                                </tr>
                            </table>
                        </div>
                        <div class="col-3"></div>
                        <div class="col-6">
                            <img src="@/assets/qr.png" alt="" class="img-fluid">
                            <br />
                            <small>Click en el qr para abrir en tu wallet</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





    <b-modal id="modal-center" hide-header hide-footer centered>
        <a cancel><img src="@/assets/cerrar.svg" alt="cerrar"></a>
        <h3 class="my-4">Transaccion : TXN 3449</h3>
    </b-modal>
</template>
<script>
import BotonGenerico from "@/components/Boton-generico";
import InputGenerico from "@/components/Input-generico.vue";
/* eslint-disable */
export default {
    name: 'TransaccionesPendientesAdmin',
    components: {
        BotonGenerico,
        InputGenerico,
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

    },
}
</script>
<style scoped>
@media (max-width: 576px) {
    .modal-dialog {
        max-width: var(--bs-modal-width);
        margin-right: 25px;
        margin-left: 25px;
    }
}


.tx {
    width: 156px;
}

.fixed {
    height: 29px;
}

.flex {
    display: flex;
}

.centrar {
    text-align: center;
}

table {
    display: block;
    width: 100%;
    overflow-x: auto;
}

.img_cerrar {
    width: 50px;
    position: absolute;
    right: -25px;
    top: -20px;
}

.popover-body {
    padding-bottom: 0 !important;
}

.ul_correct {
    margin: 0;
    padding: 0;
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

.qr {
    padding-top: 5%;
    text-align: center;
}

.espacio-b {
    padding-left: 5%;
    padding-right: 5%;
}

@media only screen and (max-width: 767px) {
    .espa_movil {
        margin-top: 20px;
    }
}

.ajuste {
    margin-top: 5%;
    width: auto !important;
    min-width: auto !important;
}

.centrar {
    text-align: center;
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

.sin_margen {
    margin: 0;
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

.verifi {
    width: 32px;
    margin-left: 1.5%;
}

@media only screen and (max-width: 575px) {
    .container {
        padding-left: 5%;
        padding-right: 5%;
    }

}

.icono {
    font-size: 13px;
    display: inline-block;
    text-align: center;
    width: 32px;
    line-height: 30px;
    border-radius: 50%;
    border: 1px solid #d2dde9;
    color: #00d285;
    border-color: #00d285;
    margin-right: 1.5%;
}

.precio {
    font-size: 12px !important;
    font-weight: 400 !important;
}

.text {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #495463;
    letter-spacing: 0.01em;
    line-height: 1;
    margin-top: 0;
    margin-right: 4px;
}

.tit {
    outline: 0;
    transition: all 0.5s;
    color: #5e55b8;
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
    font-family: "Roboto", sans-serif;
    color: #342d6e;
    font-size: 1.15em;
    font-weight: 500;
    margin: 0;
}

/*.precio{
        font-size: 24px;
        line-height: 1;
        color: #495463;
        font-weight: 500;
    }*/
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
    padding-right: 25px;
}
</style>