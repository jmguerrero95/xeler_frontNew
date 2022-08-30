<template>
    <div>
        <TopBar></TopBar>
        <MenuDashboard></MenuDashboard>
        <div class="dashboard container-fluid">
            <div class="container">
                <div class="row contenedor">
                    <div class="col-12 col-lg-8 caja primero">
                        <div class="pasos">
                            <h2 class="card-title card-title-lg">Sistema de Referidos</h2>
                            <div class="row">
                                <div class="col-8">
                                <br/>
                                <p>Invita tus amigos y familiares y recibe bonificaciones. </p>
                                
                                </div>
                                <div class="col-md-4 col-12">
                                    <p class="card-title3">11,171 pts</p>
                                    
                                </div>
                                <div class="col-12">
                                    <h4 class="card-title card-title-sm">URL de Referido</h4>
                                    <br/>
                                    <input type="text" class="copy-address" value="http://104.248.246.251/ref=XEL26259" disabled="">
                                    <p class="card-title2">
                                        <br/>
                                        Bienvenido a nuestro programa de referidos, por cada persona que recomiendes y se inscriba a Xeler.io recibirás <b>10.000 Puntos</b>, estos se abonarán
                                        a tu cuenta cuando el referido haga su primera operación independiente del monto.
                                        El estatus <b>VIP</b> se adquiere por completar entre compras y ventas <b>$50.000.000</b> en nuestra plataforma, la otra forma de obtener este estatus es
                                        conseguir 50 referidos activos. <b>(Que hagan al menos una operación en nuestra plataforma)</b>.
                                        <br>
                                        Operaciones propias: Por operación = 0.2% <b>(ejemplo $1.000.000 * 0.2% = 2.000 puntos). </b> Que se traduce en 0.2% de descuento o beneficio en la tasa de compra o venta,
                                        el estatus se borra si pasas 6 meses sin operaciones en la plataforma.
                                        <br>
                                        Los puntos podrán ser canjeados en nuestra tienda por productos, bonos y por que no satoshis!.
                                        <br>
                                        Actualmente estamos perfeccionando todo en nuestra plataforma para lograr ser mas que un lugar para comprar y vender criptoactivos, por lo tanto todos los puntos y todos los beneficios
                                        de las operaciones que hagas quedarán registrados para cuando habilitemos nuestra tienda de Redenciones.
                                    </p>
                                    <div class="sap sap-gap"></div>
                                    <h4 class="card-title card-title-sm">Lista de Referidos</h4>
                                    <table class="data-table dt-init refferal-table dataTable no-footer" data-items="10" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                        <thead>
                                            <tr class="data-item data-head" role="row"><th class="data-col refferal-name sorting_disabled" rowspan="1" colspan="1"><span>Usuario</span></th><th class="data-col refferal-tokens sorting_disabled" rowspan="1" colspan="1"><span>Ganancias</span></th><th class="data-col refferal-date sorting_disabled" rowspan="1" colspan="1"><span>Fecha de Registro</span></th></tr>
                                        </thead>
                                        <tbody>                             
                                            <tr class="data-item odd" role="row">
                                                <td class="data-col">No tienes referidos aún!</td>
                                                <td class="data-col"></td>
                                                <td class="data-col"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                <div class="col-12 col-lg-4 caja_espa">
                    <div class="sup-b caja_blanca">
                        <p class="tit_kyc">Verificación de Identidad - KYC</p>
                        <p class="parra">Para cumplir con la regulación, el usuario deberá pasar por la verificación de identidad.</p>
                        <p class="parra">No ha enviado sus documentos para verificar su identidad. (KYC).</p>
                        <BotonGenerico class="boton" texto="Click para Proceder"></BotonGenerico>
                    </div>
                </div>
                    <FooterDashboard></FooterDashboard>
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
    import FooterDashboard from "@/components/FooterDashboard";
  /* eslint-disable */
export default {
    name: 'Dashboard',
    components:{
        TopBar,
        MenuDashboard,
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
    @media only screen and (max-width: 991px) {
        .primero {
            margin-top: 70px !important;
        }
    }
    @media only screen and (max-width: 768px) {
        .contenedor{
            padding: 2%;
        }
        .movil{
            background-color: white;
            margin-top: 4%;
        }
    }
    .dashboard{
        background: #eef2f8;
        padding-top: 2%;
        font-family: "Roboto",sans-serif !important;
    }
    .contenedor{
        padding: 2%;
    }
    .caja{
        background: white;
        border-radius: 5px;
        padding: 2%;
        /*margin-left: 5%;*/
    }
    .caja_blanca{
        background: white;
        border-radius: 5px;
        padding: 2%;
    }
    .sup-b{
        padding: 9%;
    }
    .tit_kyc{
        color: #342d6e;
        font-weight: 500;
        margin: 0;
    }
    .tit_card{
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
    .cripto{
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
    .pasos{
        margin-bottom: 15px;
    }
    .kyc{
        margin-top: 5%;
    }
    .card-title {
        color: #342d6e;
        font-size: 1.3em;
        font-weight: 600;
        margin: 0;
    }
    .card-title3 {
        color: #342d6e;
        font-size: 2em;
        font-weight: 500;
        margin: 0;
    }
    .card-title-sm {
        font-size: 1.05em;
        padding-top: 2px;
    }
    .copy-address {
        color: #495463;
        line-height: 20px;
        padding: 12px 50px 12px 40px;
        border-radius: 4px;
        border: 1px solid rgba(211,224,243,0.5);
        width: 100%;
        background: #fff;
    }
    .card-title2 {
        color: #342d6e;
        font-size: 0.95em;
        font-weight: 500;
        margin: 0;
    }
    .sap {
        width: 100%;
        border-bottom: 1px solid #e6effb;
        margin-top: 4%;
        margin-bottom: 4%;
    }
    table.dataTable {
        width: 100%;
        overflow-x: scroll;
    }
    table.dataTable {
        clear: both;
        margin-top: 6px !important;
        margin-bottom: 6px !important;
        max-width: none !important;
        border-collapse: separate !important;
        border-spacing: 0;
    }
    .data-item {
        background: #fff;
        margin-bottom: 3px;
        border-radius: 4px;
        position: relative;
    }
    .data-head .data-col {
        padding: 0 10px 0 0;
        font-size: 12px;
        line-height: 20px;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: #7668fe;
        text-transform: uppercase;
        border-bottom: none;
    }
    .data-col {
        padding: 14px 15px 14px 0;
        border-bottom: 1px solid #e6effb;
    }
    @media only screen and (max-width: 768px) {
        .primero{
            margin-top: 70px !important;
        }
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
        .caja_espa{
            padding-top: 5%;
            padding-bottom: 2%;
            padding-left: 0;
            padding-right: 0;
        }
    }
    .parra{
        font-family: "Roboto",sans-serif !important;
        font-weight: 400;
        font-size: 15px

    }
    .boton{
        padding-top: 2%;
        padding-left: 0%;
        padding-bottom: 2%;
        padding-right: 0%;
        width: 10%;
    }
</style>