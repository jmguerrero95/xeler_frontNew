<template>
    <div>
        <TopBar></TopBar>
        <MenuDashboard></MenuDashboard>
        <div class="dashboard container-fluid">
            <div class="container d-none d-lg-block">
                <div class="row contenedor">
                    <div class="col-12 col-lg-8 caja primero">
                        <div class="pasos">
                            <span class="tit_card">PASO 1</span>
                            <h4 class="card-title">Venta Rápida</h4>
                            <p>Seleccióna la Moneda y monto que deseas Vender, luego de seleccionar podrás elegir el
                                método de pago.</p>
                            <div class="row">
                                <div class="col-6 col-lg-6">
                                    <button class="bitcoin cripto">
                                        <div class="row">
                                            <div class="col-6 flex"><img width="30px" height="30px"
                                                    src="@/assets/bitcoin.png"><span class="pay-cur">Bitcoin</span>
                                            </div>
                                            <div class="col-6">89.104.190 COP</div>
                                        </div>
                                    </button>
                                </div>
                                <div class="col-6 col-lg-6">
                                    <button class="cripto ethereum">
                                        <div class="row">
                                            <div class="col-6 flex"><img width="30px" height="30px"
                                                    src="@/assets/ethereum.png"><span class="pay-cur">Ethereum</span>
                                            </div>
                                            <div class="col-6">7.032.894 COP</div>
                                        </div>
                                    </button>
                                </div>
                                <div class="col-6 col-lg-6">
                                    <button class="cripto bit_cash">
                                        <div class="row">
                                            <div class="col-6 flex"><img width="30px" height="30px"
                                                    src="@/assets/bch.png"><span class="pay-cur">Bitcoin Cash</span>
                                            </div>
                                            <div class="col-6">538.759 COP</div>
                                        </div>
                                    </button>
                                </div>
                                <div class="col-6 col-lg-6">
                                    <button class="cripto litecoin">
                                        <div class="row">
                                            <div class="col-6 flex"><img width="30px" height="30px"
                                                    src="@/assets/litecoin.png"><span class="pay-cur">Litecoin</span>
                                            </div>
                                            <div class="col-6">235.514 COP</div>
                                        </div>
                                    </button>
                                </div>
                                <div class="col-6 col-lg-6">
                                    <button class="cripto tether">
                                        <div class="row">
                                            <div class="col-6 flex"><img width="30px" height="30px"
                                                    src="@/assets/tether.png"><span class="pay-cur">Tether</span></div>
                                            <div class="col-6">4390 COP</div>
                                        </div>
                                    </button>
                                </div>
                                <div class="col-6 col-lg-6">
                                    <button class="cripto dash">
                                        <div class="row">
                                            <div class="col-6 flex"><img width="30px" height="30px"
                                                    src="@/assets/dash.png"><span class="pay-cur">Dash</span></div>
                                            <div class="col-6">235.514 COP</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="pasos">
                            <span class="tit_card">PASO 2</span>
                            <h4 class="card-title">Método de venta</h4>
                            <p>Selecciona el método de Venta y se mostrará el formulario para ingresár el monto a
                                vender, cuando dés click en confirmar se mostrarán los datos donde debes envíar el pago.
                            </p>
                            <div class="row">
                                <div class="col-6 col-lg-3">
                                    <button class="pagos"><span class="pay-cur-pagos">EFECTIVO</span></button>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <button class="pagos"><span class="pay-cur-pagos">BANCO</span></button>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <button class="pagos"><span class="pay-cur-pagos">OTRO</span></button>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <button class="pagos"><span class="pay-cur-pagos">PSE</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="pasos">
                            <span class="tit_card">PASO 3</span>
                            <h4 class="card-title">Monto a vender</h4>
                            <p>Ingrese la cantidad a calcular. La calculadora ayuda a convertir la moneda requerida.</p>
                            <div class="row">
                                <div class="col-5">
                                    <InputGenerico type="text" placeholder="COP"></InputGenerico>
                                </div>
                                <div class="col-5">
                                    <InputGenerico type="text" placeholder="BTC"></InputGenerico>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 d-none d-lg-block">
                        <div class="caja sup-b">
                            <p class="tit_kyc">Verificación de Identidad - KYC</p>
                            <p>Para cumplir con la regulación, el usuario deberá pasar por la verificación de identidad.
                            </p>
                            <p>No ha enviado sus documentos para verificar su identidad. (KYC).</p>
                            <BotonGenerico class="boton" texto="Click para Proceder"></BotonGenerico>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 d-lg-none caja kyc">
                        <div class="sup-b">
                            <p class="tit_kyc">Verificación de Identidad - KYC</p>
                            <p>Para cumplir con la regulación, el usuario deberá pasar por la verificación de identidad.
                            </p>
                            <p>No ha enviado sus documentos para verificar su identidad. (KYC).</p>
                            <BotonGenerico class="boton" texto="Click para Proceder"></BotonGenerico>
                        </div>
                    </div>
                    <FooterDashboard></FooterDashboard>
                </div>
            </div>
            <div class="row contenedor d-lg-none sup">
                <div class="col-12 col-lg-8 caja primero">
                    <div class="pasos">
                        <span class="tit_card">PASO 1</span>
                        <h4 class="card-title">Venta Rápida</h4>
                        <p>Seleccióna la Moneda y monto que deseas Vender, luego de seleccionar podrás elegir el método
                            de pago.</p>
                        <div class="row">
                            <div class="col-6 col-lg-6">
                                <button class="bitcoin cripto">
                                    <div class="row">
                                        <div class="col-6 flex"><img width="30px" height="30px"
                                                src="@/assets/bitcoin.png"><span class="pay-cur">Bitcoin</span>
                                        </div>
                                        <div class="col-6 correc">89.104.190 COP</div>
                                    </div>
                                </button>
                            </div>
                            <div class="col-6 col-lg-6">
                                <button class="cripto ethereum">
                                    <div class="row">
                                        <div class="col-6 flex"><img width="30px" height="30px"
                                                src="@/assets/ethereum.png"><span class="pay-cur">Ethereum</span>
                                        </div>
                                        <div class="col-6 correc">7.032.894 COP</div>
                                    </div>
                                </button>
                            </div>
                            <div class="col-6 col-lg-6">
                                <button class="cripto bit_cash">
                                    <div class="row">
                                        <div class="col-6 flex"><img width="30px" height="30px"
                                                src="@/assets/bch.png"><span class="pay-cur">Bitcoin Cash</span>
                                        </div>
                                        <div class="col-6 correc">538.759 COP</div>
                                    </div>
                                </button>
                            </div>
                            <div class="col-6 col-lg-6">
                                <button class="cripto litecoin">
                                    <div class="row">
                                        <div class="col-6 flex"><img width="30px" height="30px"
                                                src="@/assets/litecoin.png"><span class="pay-cur">Litecoin</span>
                                        </div>
                                        <div class="col-6 correc">235.514 COP</div>
                                    </div>
                                </button>
                            </div>
                            <div class="col-6 col-lg-6">
                                <button class="cripto tether">
                                    <div class="row">
                                        <div class="col-6 flex"><img width="30px" height="30px"
                                                src="@/assets/tether.png"><span class="pay-cur">Tether</span></div>
                                        <div class="col-6 correc">4390 COP</div>
                                    </div>
                                </button>
                            </div>
                            <div class="col-6 col-lg-6">
                                <button class="cripto dash">
                                    <div class="row">
                                        <div class="col-6 flex"><img width="30px" height="30px"
                                                src="@/assets/dash.png"><span class="pay-cur">Dash</span></div>
                                        <div class="col-6 correc">235.514 COP</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="pasos">
                        <span class="tit_card">PASO 2</span>
                        <h4 class="card-title">Método de Venta</h4>
                        <p>Selecciona el método de Venta y se mostrará el formulario para ingresár el monto a Vender,
                            cuando dés click en confirmar se mostrarán los datos donde debes envíar el pago.</p>
                        <div class="row">
                            <div class="col-6 col-lg-4">
                                <button class="pagos"><span class="pay-cur-pagos">EFECTIVO</span></button>
                            </div>
                            <div class="col-6 col-lg-4">
                                <button class="pagos"><span class="pay-cur-pagos">BANCO</span></button>
                            </div>
                            <div class="col-6 col-lg-4">
                                <button class="pagos"><span class="pay-cur-pagos">OTRO</span></button>
                            </div>
                            <div class="col-6 col-lg-4">
                                <button class="pagos"><span class="pay-cur-pagos">PSE</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="pasos">
                        <span class="tit_card">PASO 3</span>
                        <h4 class="card-title">Monto a Vender</h4>
                        <p>Ingrese la cantidad a calcular. La calculadora ayuda a convertir la moneda requerida.</p>
                        <div class="row">
                            <div class="col-5">
                                <InputGenerico type="text" placeholder="COP"></InputGenerico>
                            </div>
                            <div class="col-5">
                                <InputGenerico type="text" placeholder="BTC"></InputGenerico>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 d-none d-lg-block">
                    <div class="caja sup-b">
                        <p class="tit_kyc">Verificación de Identidad - KYC</p>
                        <p>Para cumplir con la regulación, el usuario deberá pasar por la verificación de identidad.</p>
                        <p>No ha enviado sus documentos para verificar su identidad. (KYC).</p>
                        <BotonGenerico class="boton" texto="Click para Proceder"></BotonGenerico>
                    </div>
                </div>
                <div class="col-12 col-lg-4 d-lg-none caja kyc">
                    <div class="sup-b">
                        <p class="tit_kyc">Verificación de Identidad - KYC</p>
                        <p>Para cumplir con la regulación, el usuario deberá pasar por la verificación de identidad.</p>
                        <p>No ha enviado sus documentos para verificar su identidad. (KYC).</p>
                        <BotonGenerico class="boton" texto="Click para Proceder"></BotonGenerico>
                    </div>
                </div>
                <FooterDashboard></FooterDashboard>
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
    components: {
        TopBar,
        MenuDashboard,
        InputGenerico,
        BotonGenerico,
        FooterDashboard
        //VueTyper,
        //Money,
        //Loading
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
}
</script>
<style scoped>
.pagos {
    width: 100%;
    background: white;
    border: 1px solid #5043E9;
    border-radius: 8px;
    padding: 5px 10px;
    cursor: pointer;
    transition: all .4s ease;
    text-align: center;
    margin-bottom: 15px;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    -moz-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
}

.pay-cur-pagos {
    font-size: 14px;
    line-height: 30px;
    font-weight: 700;
}

.bitcoin {
    border-radius: 8px !important;
    border: 1px solid #DA9021 !important;
    background-color: white !important;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    -moz-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
}

.ethereum {
    border-radius: 8px !important;
    border: 1px solid #809FB8 !important;
    background-color: white !important;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    -moz-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
}

.bit_cash {
    border-radius: 8px !important;
    border: 1px solid #619F51 !important;
    background-color: white !important;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    -moz-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
}

.litecoin {
    border-radius: 8px !important;
    border: 1px solid #4481B2 !important;
    background-color: white !important;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    -moz-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
}

.dash {
    border-radius: 8px !important;
    border: 1px solid #0090FF !important;
    background-color: white !important;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    -moz-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
}

.tether {
    border-radius: 8px !important;
    border: 1px solid #26A07B !important;
    background-color: white !important;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    -moz-box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
    box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 1);
}

.flex {
    display: flex;
}

.pay-cur {
    margin-left: 15%;
    font-size: 14px;
    line-height: 30px;
    font-weight: 700;
}

.pay-icon {
    font-size: 22px;
    line-height: 30px;
    width: 30px;
    text-align: center;
}

@media only screen and (max-width: 991px) {
    .primero {
        margin-top: 70px !important;
    }
}

@media only screen and (max-width: 635px) {
    .correc {
        font-size: 12px;
    }

    .pay-cur {
        font-size: 12px;
        line-height: inherit;
        font-weight: 700;
    }

    .pay-icon {
        font-size: 19px;
        line-height: 30px;
        width: 30px;
        text-align: center;
    }
}

.dashboard {
    background: #eef2f8;
    padding-top: 2%;
    font-family: "Roboto", sans-serif !important;
}

.contenedor {
    padding: 2%;
}

.caja {
    background: white;
    border-radius: 5px;
    padding: 2%;
    /*margin-left: 5%;*/
}

.tit_card {
    text-transform: uppercase;
    color: #7668fe !important;
    letter-spacing: 0.1em;
    display: block;
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    margin-bottom: 4px;
}

.card-title {
    color: #342d6e;
    font-size: 1.4em;
    font-weight: 500;
    margin: 0;
}

.cripto {
    width: 100%;
    background: #e6effb;
    border: 2px solid #e6effb;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all .4s ease;
    text-align: center;
    margin-bottom: 15px;
}

.pasos {
    margin-bottom: 15px;
}

.sup-b {
    padding: 9%;
}

.kyc {
    margin-top: 5%;
}
</style>