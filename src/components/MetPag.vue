<template>
    <div class="fondo">
        <div class="container">
            <div class="row espacio">
                <div class="col-12 car_parte2 parte2_left">
                    <div class="row" v-if="type === 'A'">
                        <div class="col-12">
                            <h4 class="tit_card">Metodos de pago</h4>
                            <br />
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="card">
                                        <div class="img_met">
                                            <img src="@/assets/pay-manual-admin.png" class="img_pago" alt="pago">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Special title treatment</h5>
                                            <p class="card-text">With supporting text below as a natural lead-in to
                                                additional content.</p>
                                            <a href="#" class="margen icono">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card">
                                        <div class="img_met">
                                            <img src="@/assets/pay-manual-admin.png" class="img_pago" alt="pago">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Special title treatment</h5>
                                            <p class="card-text">With supporting text below as a natural lead-in to
                                                additional content.</p>
                                            <a href="#" class="margen icono">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card">
                                        <div class="img_met">
                                            <img src="@/assets/pay-bank-admin.png" class="img_pago" alt="pago">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Special title treatment</h5>
                                            <p class="card-text">With supporting text below as a natural lead-in to
                                                additional content.</p>
                                            <a href="#" class="margen icono">
                                                <font-awesome-icon icon="fa-solid fa-check" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />





                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--POPOVERS-->
</template>
<script>
import BotonGenerico from "@/components/Boton-generico";
import InputGenerico from "@/components/Input-generico.vue";
/* eslint-disable */
export default {
    name: 'MetPag',
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

.card-body {
    text-align: center;
}


@media (max-width: 767px) {
    .img_pago {
        width: 90% !important;
    }
}

@media (max-width: 575px) {
    .card {
        margin-top: 30px;
        margin-bottom: 30px;
    }
}

.img_pago {
    width: 200px;
}

.img_met {
    position: relative;
    background-color: #f8fbff;
    border-bottom: 1px solid #e6effb;
    text-align: center;
}

.fondo {
    background: #eef2f8;
}

.espacio {
    padding-top: 70px;
    padding-bottom: 2%;
}

.car_parte2 {
    background: white;
    border: 0;
    padding: 2%;
    /*width: 30%;
        margin-right: 3%;*/
}

.tit_card {
    color: #342d6e;
    font-size: 1.15em;
    font-weight: 500;
    margin: 0;
}
</style>