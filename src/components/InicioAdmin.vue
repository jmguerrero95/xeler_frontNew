<template>
    <div class="fondo">
        <div class="container">
            <div class="row espacio">
                <div class="col-4 car">
                    <h4 class="tit_card">Total Vendido</h4>
                    <p class="precio">4.161.382.199</p>
                    <span class="cripto">53.21681 <small>BTC</small> 100.00734 <small>ETH</small> 0.08319 <small>BCH</small> 179.28601 <small>LTC</small> 12.00281 <small>DASH</small></span>
                </div>
                <div class="col-4 card_center">
                    <h4 class="tit_card">Total Comprado</h4>
                    <p class="precio">2.225.373.021</p>
                    <span class="cripto">53.21681 <small>BTC</small> 100.00734 <small>ETH</small> 0.08319 <small>BCH</small> 179.28601 <small>LTC</small> 12.00281 <small>DASH</small></span>
                </div>
                <div class="col-4 card_right">
                    <h4 class="tit_card">Total Usuarios</h4>
                    <p class="precio">1236</p>
                </div>
                <div class="col-5 car_parte2 parte2_left">
                    <div class="row">
                        <div class="col-12">
                            <h4 class="tit_card">Transacciones recientes</h4>
                            <table class="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td scope="col">TNX005094<br/>22 May, 2022 10:04 AM</td>
                                        <td scope="col">0.00312 BTC<br/>93.39 USD</td>
                                        <td scope="col"><span class="badge bg-primary">Venta</span></td>
                                    </tr>
                                    <tr>
                                        <td scope="col">TNX005094<br/>22 May, 2022 10:04 AM</td>
                                        <td scope="col">0.00312 BTC<br/>93.39 USD</td>
                                        <td scope="col"><span class="badge bg-primary">Venta</span></td>success
                                    </tr>
                                    <tr>
                                        <td scope="col">TNX005094<br/>22 May, 2022 10:04 AM</td>
                                        <td scope="col">0.00312 BTC<br/>93.39 USD</td>
                                        <td scope="col"><span class="badge bg-success">Venta</span></td>
                                    </tr>
                                    <tr>
                                        <td scope="col">TNX005094<br/>22 May, 2022 10:04 AM</td>
                                        <td scope="col">0.00312 BTC<br/>93.39 USD</td>
                                        <td scope="col"><span class="badge bg-primary">Venta</span></td>
                                    </tr>
                                    <tr>
                                        <td scope="col">TNX005094<br/>22 May, 2022 10:04 AM</td>
                                        <td scope="col">0.00312 BTC<br/>93.39 USD</td>
                                        <td scope="col"><span class="badge bg-primary">Venta</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    
                </div>

                <div class="col-7 car_parte2 parte2_right">
                    <h4 class="tit_card">Gráfico Ventas</h4>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  /* eslint-disable */
export default {
    name: 'IncioAdmin',
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
    .espacio{
        padding-top: 3%;
        padding-bottom: 2%;
    }
    .parte2_right{
        margin-top: 3%;
        width: 56.83333333%;
        margin-left: 1.5%;
    }
    .parte2_left{
        margin-top: 3%;
        width: 40.16666667%;
        margin-right: 1.5%;
    }
    
    .tit_card{
        color: #342d6e;
        font-size: 1.15em;
        font-weight: 500;
        margin: 0;
    }
    .precio{
        font-size: 24px;
        line-height: 1;
        color: #495463;
        font-weight: 500;
    }
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