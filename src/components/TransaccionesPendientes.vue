<template>
    <div class="fondo">
        <div class="container">
            <div class="row espacio">
                <div class="col-12 car_parte2 parte2_left">
                    <div class="row">
                        <div class="col-12">
                            <h4 class="tit_card">Transacciones pendientes</h4>
                            <table class="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td scope="col"><span class="tit text">TNX005094</span><br/><span class="text precio">22 May, 2022 10:04 AM</span></td>
                                        <td scope="col" class="text"><span class="d-none d-sm-block">0.00312 BTC<br/><br/><span class="precio">93.39 USD</span></span></td>
                                        <td scope="col"><span class="badge bg-primary d-none d-sm-block">Venta</span></td>
                                        <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-check"/></a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="tit text">TNX005094</span><br/><span class="text precio">22 May, 2022 10:04 AM</span></td>
                                        <td scope="col" class="text"><span class="d-none d-sm-block">0.00312 BTC<br/><br/><br/><span class="precio">93.39 USD</span></span></td>
                                        <td scope="col"><span class="badge bg-primary d-none d-sm-block">Venta</span></td>
                                        <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-check"/></a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="tit text">TNX005094</span><br/><span class="text precio">22 May, 2022 10:04 AM</span></td>
                                        <td scope="col" class="text"><span class="d-none d-sm-block">0.00312 BTC<br/><br/><span class="precio">93.39 USD</span></span></td>
                                        <td scope="col"><span class="badge bg-success d-none d-sm-block">Venta</span></td>
                                        <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-check"/></a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="tit text">TNX005094</span><br/><span class="text precio">22 May, 2022 10:04 AM</span></td>
                                        <td scope="col" class="text"><span class="d-none d-sm-block">0.00312 BTC<br/><br/><span class="precio">93.39 USD</span></span></td>
                                        <td scope="col"><span class="badge bg-primary d-none d-sm-block">Venta</span></td>
                                        <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-check"/></a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="tit text">TNX005094</span><br/><span class="text precio">22 May, 2022 10:04 AM</span></td>
                                        <td scope="col" class="text"><span class="d-none d-sm-block">0.00312 BTC<br/><br/><span class="precio">93.39 USD</span></span></td>
                                        <td scope="col"><span class="badge bg-primary d-none d-sm-block">Venta</span></td>
                                        <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-check"/></a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="tit text">TNX005094</span><br/><span class="text precio">22 May, 2022 10:04 AM</span></td>
                                        <td scope="col" class="text"><span class="d-none d-sm-block">0.00312 BTC<br/><br/><span class="precio">93.39 USD</span></span></td>
                                        <td scope="col"><span class="badge bg-primary d-none d-sm-block">Venta</span></td>
                                        <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-check"/></a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="tit text">TNX005094</span><br/><span class="text precio">22 May, 2022 10:04 AM</span></td>
                                        <td scope="col" class="text"><span class="d-none d-sm-block">0.00312 BTC<br/><br/><span class="precio">93.39 USD</span></span></td>
                                        <td scope="col"><span class="badge bg-primary d-none d-sm-block">Venta</span></td>
                                        <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-check"/></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  /* eslint-disable */
export default {
    name: 'TransaccionesPendientesAdmin',
    components:{
        //VueTyper,
        //Money,
        //Loading
    },
    data () {
        return {
          
        }
    },
}
</script>
<style scoped>
    @media only screen and (max-width: 575px) {
        .container{
            padding-left: 5%;
            padding-right: 5%;
        }

    }
    .icono{
        font-size: 13px;
        display: block;
        text-align: center;
        width: 32px;
        line-height: 30px;
        border-radius: 50%;
        border: 1px solid #d2dde9;
        float: right;
        color: #00d285;
        border-color: #00d285;
    }
    .precio{
        font-size: 12px !important;
        font-weight: 400 !important;
    }
    .text{
        font-family: "Roboto",sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: #495463;
        letter-spacing: 0.01em;
        line-height: 1;
        margin-top: 0;
        margin-right: 4px;
    }
    .tit{
        outline: 0;
        transition: all 0.5s;
        color: #5e55b8;
    }
    .final{
        margin-top: 3%;
    }
    .espacio{
        padding-top: 70px;
        padding-bottom: 2%;
    }
    .parte2_right{
        margin-top: 3%;
        width: 56.83333333%;
        margin-left: 1.5%;
    }
    
    .tit_card{
        font-family: "Roboto",sans-serif;
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
    .cripto{
        font-size: 19px;
        display: inline-block;
        margin-right: 3px;
        font-weight: 700;
    }
    small{
        font-size: 80%;
        font-weight: 400;
    }
    .fondo{
        background: #eef2f8;
    }
    .car{
        background: white;
        border: 0;
        padding: 2%;
        width: 30%;
        margin-right: 3%;
    }
    .car_parte2{
        background: white;
        border: 0;
        padding: 2%;
        /*width: 30%;
        margin-right: 3%;*/
    }
    .card_center{
        background: white;
        border: 0;
        padding: 2%;
    }
    .card_right{
        background: white;
        border: 0;
        padding: 2%;
        margin-left: 3%;
        width: 30%;
    }

</style>