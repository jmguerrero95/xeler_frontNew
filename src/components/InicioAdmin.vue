<template>
    <div class="fondo">
        <div class="container">
            <div class="row espacio">
                <div class="col-md-4 col-12 car">
                    <h4 class="tit_card">Total Vendido</h4>
                    <p class="precio">4.161.382.199</p><span class="tile-data-status tile-data-active">COP</span>
                    <span class="cripto">53.21681 <small>BTC</small> 100.00734 <small>ETH</small> 0.08319 <small>BCH</small> 179.28601 <small>LTC</small> 12.00281 <small>DASH</small></span>
                </div>
                <div class="col-md-4 col-12 card_center">
                    <h4 class="tit_card">Total Comprado</h4>
                    <p class="precio">2.225.373.021</p><span class="tile-data-status tile-data-active">COP</span>
                    <span class="cripto">53.21681 <small>BTC</small> 100.00734 <small>ETH</small> 0.08319 <small>BCH</small> 179.28601 <small>LTC</small> 12.00281 <small>DASH</small></span>
                </div>
                <div class="col-md-4 col-12 card_right">
                    <h4 class="tit_card">Total Usuarios</h4>
                    <p class="precio">1236</p>
                </div>
                <div class="col-md-5 col-12 car_parte2 parte2_left">
                    <div class="row">
                        <div class="col-12">
                            <h4 class="tit_card">Transacciones recientes</h4>
                            <table class="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td scope="col"><span class="tit text">TNX005094</span><br/><span class="text precio2">22 May, 2022 10:04 AM</span></td>
                                        <td scope="col" class="text"><span class="d-none d-sm-block">0.00312 BTC<br/><br/><span class="precio2">93.39 USD</span></span></td>
                                        <td scope="col"><span class="badge bg-primary d-none d-sm-block">Venta</span></td>
                                        <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-check"/></a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="tit text">TNX005094</span><br/><span class="text precio2">22 May, 2022 10:04 AM</span></td>
                                        <td scope="col" class="text"><span class="d-none d-sm-block">0.00312 BTC<br/><br/><span class="precio2">93.39 USD</span></span></td>
                                        <td scope="col"><span class="badge bg-primary d-none d-sm-block">Venta</span></td>
                                        <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-check"/></a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="tit text">TNX005094</span><br/><span class="text precio2">22 May, 2022 10:04 AM</span></td>
                                        <td scope="col" class="text"><span class="d-none d-sm-block">0.00312 BTC<br/><br/><span class="precio2">93.39 USD</span></span></td>
                                        <td scope="col"><span class="badge bg-success d-none d-sm-block">Venta</span></td>
                                        <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-check"/></a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="tit text">TNX005094</span><br/><span class="text precio2">22 May, 2022 10:04 AM</span></td>
                                        <td scope="col" class="text"><span class="d-none d-sm-block">0.00312 BTC<br/><br/><span class="precio2">93.39 USD</span></span></td>
                                        <td scope="col"><span class="badge bg-primary d-none d-sm-block">Venta</span></td>
                                        <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-check"/></a></td>
                                    </tr>
                                    <tr>
                                        <td scope="col"><span class="tit text">TNX005094</span><br/><span class="text precio2">22 May, 2022 10:04 AM</span></td>
                                        <td scope="col" class="text"><span class="d-none d-sm-block">0.00312 BTC<br/><br/><span class="precio2">93.39 USD</span></span></td>
                                        <td scope="col"><span class="badge bg-primary d-none d-sm-block">Venta</span></td>
                                        <td scope="col"><a href="#" class="margen icono"><font-awesome-icon icon="fa-solid fa-check"/></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    
                </div>

                <div class="col-md-7 col-12 car_parte2 parte2_right">
                    <h4 class="tit_card">Gráfico Ventas</h4>
                    <Bar
                    :chart-options="chartOptions"
                    :chart-data="chartData"
                    :chart-id="chartId"
                    :dataset-id-key="datasetIdKey"
                    :plugins="plugins"
                    :css-classes="cssClasses"
                    :styles="styles"
                    :width="width"
                    :height="height"
                    />




                </div>
                <div class="col-12 car_parte2 final">
                    <h4 class="tit_card">Gráfico Ventas</h4>
                    <Bar
                    :chart-options="chartOptions"
                    :chart-data="chartData"
                    :chart-id="chartId"
                    :dataset-id-key="datasetIdKey"
                    :plugins="plugins"
                    :css-classes="cssClasses"
                    :styles="styles"
                    :width="width"
                    :height="height"
                    />




                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  /* eslint-disable */
export default {
    name: 'IncioAdmin',
    components:{
        Bar
        //VueTyper,
        //Money,
        //Loading
    },
    props: {
        chartId: {
          type: String,
          default: 'bar-chart'
        },
        datasetIdKey: {
          type: String,
          default: 'label'
        },
        width: {
          type: Number,
          default: 575
        },
        height: {
          type: Number,
          default: 230
        },
        cssClasses: {
          default: '',
          type: String
        },
        styles: {
          type: Object,
          default: () => {}
        },
        plugins: {
          type: Object,
          default: () => {}
        }
    },
    data () {
        return {
            chartData: {
                labels: [ 'January', 'February', 'March' ],
                datasets: [ { data: [] } ]
            },
            chartOptions: {
                responsive: true
            }
          
        }
    },
}
</script>
<style scoped>
    .precio2{
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
    @media only screen and (max-width: 768px) {
        .car{
            background: white;
            border: 0;
            padding: 2%;
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
            margin-top: 3%;
        }
        .card_right{
            background: white;
            border: 0;
            padding: 2%;
            margin-top: 3%;
        }
        .parte2_right{
            margin-top: 3%;
        }
        .parte2_left{
            margin-top: 3%;
        }
    }

    @media only screen and (min-width: 768px) {
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
    }

    .final{
        margin-top: 3%;
    }
    .espacio{
        padding-top: 70px;
        padding-bottom: 2%;
    }
    
    
    .tit_card{
        color: #342d6e;
        font-size: 1.15em;
        font-weight: 600;
        margin: 0;
        padding-top: 2px;
        font-family: "Roboto",sans-serif;
        margin-bottom: 4%;
    }
    .precio{
        font-size: 32px;
        line-height: 1;
        color: #495463;
        font-weight: 500;
        display: inline;
    }
    .cripto{
        font-size: 19px;
        display: inline-block;
        margin-right: 3px;
        font-weight: 700;
        color: #6e81a9;
        line-height: 1;
        padding-right: 50px;
        margin-top: 1rem;
    }
    small{
        font-size: 80%;
        font-weight: 400;
    }
    .fondo{
        background: #eef2f8;
    }
    .tile-data-status {
        font-size: 14px;
        line-height: 20px;
        border-radius: 15px;
        font-weight: 400;
        margin: 0 12px;
        position: relative;
    }
    .tile-data-active {
        padding: 5px 14px;
        color: #1babfe;
        background: rgba(27,171,254,0.15);
    }
    @media only screen and (max-width: 575px) {
        .row{
            margin-left: 2%;
            margin-right: 2%;
        }
        .precio {
            font-size: 24px;
        }
        .tit_card {
            font-size: 1em;
        }
    }
        

</style>