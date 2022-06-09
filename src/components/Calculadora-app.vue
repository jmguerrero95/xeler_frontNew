<template>
    <div>
        <div class="header-txt">
            <div class="row">
                <div class="col-md-12 text-center text-lg-left">

                    <div class="banner-caption">
                        <p class="lead">Xeler go es la plataforma más rápida y eficiente para comprar y vender <vue-typer
  :text='["Bitcoin","Ethereum","BitcoinCash","Litecoin","Dash"]'
  :repeat='Infinity'
  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='70'
  :type-delay='70'
  :pre-erase-delay='2000'
  :erase-delay='250'
  erase-style='select-all'
  :erase-on-complete='false'
  caret-animation='blink'
></vue-typer> en Colombia.</p>
                    </div>
                </div>
            </div>
            <br>
            <loading :active.sync="isLoading"
            color="#7a0fff"
            :opacity=0
            loader="spinner"
        :is-full-page="fullPage"></loading>
            <!--<div class="row" v-if="bloqued">
                <div class="col-md-12 text-center text-lg-left">
                    <p class="lead">Volvemos en: {{ days | twoDigits }}:{{ hours | twoDigits }}:{{ minutes | twoDigits }}:{{ seconds | twoDigits }}</p>
                </div> 
            </div>-->
            <div class="row" v-if="!bloqued">
                <div class="col-xs-6" style="margin-left: 25px">
                    <div class="field-wrap">
                        <label class="switch2">
                            <input type="checkbox" id="togBtn2" v-model="switch1" @click="toggle()">
                            <div class="slider2 round2"></div>
                        </label>
                    </div>
                </div>
                    <div class="col-xs-6" style="margin-left: 140px" v-if="ocultar">
                         <div class="field-wrap">
                            <label class="switch">
                                <input type="checkbox" id="togBtn" v-model="switch2" @click="toggle2()">
                                <div class="slider round"></div>
                            </label>
                         </div>
                    </div>
                </div>
        
            <div class="row">
                <div class="col-sm-4">
                    <div class="input-field">
                        <label class="input-title">Monedas</label>
                        <select class="form-control custom-control2" v-model="moneda" @change="sortBy()" name="moneda">
                            <option value="btc">BTC</option>
                            <option value="eth">ETH</option>
                            <option value="bch">BCH</option>
                            <option value="ltc">LTC</option>
                            <option value="dash">DASH</option>
                        </select>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="input-field">
                        <label class="input-title">Crypto</label>
                        <input name="crypto" type="text" class="form-control custom-control2"
                        :value="crypto"  @input='evt=>crypto=evt.target.value' v-on:keyup="updatePesos" @keypress="esNumeroEntero($event)"
                        @click="es_cripto">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="input-field">
                        <label class="input-title">Pesos</label>
                        <money v-model="pesos" v-bind="money" @keyup.native="updateCrypto"
                                class="form-control custom-control2" @click.native="es_fiat"></money>
                    </div>
                </div>
                <p class="nueva" v-if="mostrar">Equivalente a ~ {{ parseInt(cantidad_dolar).toFixed(2) }} USD</p>
            </div>
        </div>
    </div>
</template>

<script>
//import 'es6-promise/auto'
//import { VueTyper } from 'vue-typer'
import swal from 'sweetalert';
import axios from 'axios'
//import { parse } from 'path';
//import {Money} from 'v-money'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Swal from 'sweetalert2';
export default {
    name: 'Calculadora',
    components:{
        //VueTyper,
        //Money,
        Loading
    },
    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            unIntervalo: null,
            date: null,
            dt: new Date(),
            diff: 0,
            deadline: '',
            intervalo: null,
            intervalo: null,
            bloqued: false,
            fiat: false,
            virtual: false,
            isLoading: false,
            fullPage: false,
            crypto: 0,
            pesos: 0,
            moneda: 'btc',
            cantidad_dolar: 0,
            trm: '',
            valor: '',
            el_valor: 0,
            cantidad_dolar: '',
            crypto_oficial: '',
            compra_o_venta: '',
            icono: '',
            preciobtc: 0,
            precioeth: 0,
            preciobch: 0,
            precioltc: 0,
            preciodash: 0,
            oficialpreciobtc: 0,
            oficialprecioeth: 0,
            oficialpreciobch: 0,
            oficialprecioltc: 0,
            oficialpreciodash: 0,
            ocultar: true,
            mostrar: false,
            metodo: '',
            metodo2: '',
            efectivo_banco: 'efectivo%20en%20Bogota',
            picked: '',
            switch1: true,
            switch2: true,
            fecha_desbloqueo: null,
            money: {
                decimal: ',',
                thousands: ',',
                prefix: 'COP ',
                suffix: '',
                precision: 0,
                masked: false
            },
            la_cripto: {
                suffix: '',
                precision: 0,
                masked: false
            }
        }
    },
    filters:{
        toFixed: function (crypto) {
            var self = this
            if(self.pesos.length)
                return crypto.toFixed(5);
        },
        dotoFixed: function(dolar,limite){
            return dolar.toFixed(limite);
        },
        twoDigits(value) {
            if ( value.toString().length <= 1 ) {
                return '0'+value.toString()
            }
            return value.toString()
        }
    },
    computed: {
        computed () {
        return this.crypto.toFixed(5);
        },
        seconds() {
                return Math.trunc(this.diff) % 60
            },
        minutes() {
            return Math.trunc(this.diff / 60) % 60
        },
        hours() {
            return Math.trunc(this.diff / 60 / 60) % 24
        },
        days() {
            return Math.trunc(this.diff / 60 / 60 / 24)
        }
  },
    watch:{
        now(value) {
            this.diff = this.date - this.now;
            if(this.diff <= 0 || this.stop){
                this.diff = 0;
                this.bloqued = false
                // Remove interval
                clearInterval(this.intervalo2);
            } else {
                this.bloqued = true
            }
        },
        precioeth: function(newValue, oldValue) {
            if(this.moneda === 'eth')
                this.el_valor = newValue
        },
        preciobtc: function(nuevoValorbtc,viejoValorbtc){
            if(this.moneda === 'btc')
                this.el_valor = nuevoValorbtc
        },
        preciobch: function(nuevoValorbch,viejoValorbch){
            if(this.moneda === 'bch')
                this.el_valor = nuevoValorbch
        },
        precioltc: function(nuevoValorltc,viejoValorltc){
            if(this.moneda === 'ltc')
                this.el_valor = nuevoValorltc
        },
        preciodash: function(nuevoValordash,viejoValordash){
            if(this.moneda === 'dash')
                this.el_valor = nuevoValordash
        },
        crypto: function(newValue) {
            if(this.crypto.length){
                var result = newValue.replace(/,/g, '.');
                //const result2 = newValue.replace(/^0+/, '0.');
                (newValue < 1) ? ("0." + newValue) : newValue;
                this.$nextTick(() => this.crypto = result);
                //this.$nextTick(() => this.crypto = result2);
            }
        },
    },
    methods: {
        esNumeroEntero(evt) {
            var keyCode = (evt.keyCode ? evt.keyCode : evt.which);

            // only allow number and one dot
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
                evt.preventDefault();
            }
        },
        onlyNumber ($event) {
        //console.log($event.keyCode); //keyCodes value
        var keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
            $event.preventDefault();
        }
        },
        homeScreen(){
            window.onload = (e) => {
                var deferredPrompt;
                window.addEventListener('beforeinstallprompt', (e) => {
                // Prevent Chrome 67 and earlier from automatically showing the prompt
                e.preventDefault();
                // Stash the event so it can be triggered later.
                deferredPrompt = e;
                });
                // Show the prompt
                deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                deferredPrompt.userChoice
                .then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                    } else {
                    console.log('User dismissed the A2HS prompt');
                    }
                    deferredPrompt = null;
                });
            }
        },
        /*obtenerCalculadora(){
            axios.get('obtenerCalculadora')
            .then((res) => {
                this.fecha_desbloqueo = res.data.fecha_desbloqueo
                this.conteo()
            })
        },*/
        parseDateString (dateString) {
            var matchers = [];
            matchers.push(/^[0-9]*$/.source);
            matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
            matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
            matchers = new RegExp(matchers.join("|"));
            if (dateString instanceof Date) {
                return dateString;
            }
            if (String(dateString).match(matchers)) {
                if (String(dateString).match(/^[0-9]*$/)) {
                    dateString = Number(dateString);
                }
                if (String(dateString).match(/\-/)) {
                    dateString = String(dateString).replace(/\-/g, "/");
                }
                return new Date(dateString);
            } else {
                throw new Error("Couldn't cast `" + dateString + "` to a date object.");
            }
        },
        /*conteo(){
            var elTiempo = this.fecha_desbloqueo;
            this.date = this.parseDateString(elTiempo) / 1000;
            if (!this.date) {
                throw new Error("Invalid props value, correct the 'deadline' or 'end'");
            }

            this.intervalo = setInterval(() => {
                this.now = Math.trunc((new Date()).getTime() / 1000);
            }, 1000);

        },*/
        getWeekDay(date){
            var weekdays = new Array(
                "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"
            );
            var day = date.getDay();
            return weekdays[day];
        },
        bloquear(){
            var fecha = new Date()
            var hora = (fecha.getHours() < 10 ? '0' : '') + fecha.getHours() +  ":" + (fecha.getMinutes() < 10 ? '0' : '') + fecha.getMinutes() + ":" + (fecha.getSeconds() < 10 ? '0' : '' ) + fecha.getSeconds();

            if(this.getWeekDay(fecha) === 'Lunes' && hora >= '17:00:00'){
                this.bloqued = true
            } else if(this.getWeekDay(fecha) === 'Martes' && hora >= '17:00:00'){
                this.bloqued = true
            } else if(this.getWeekDay(fecha) === 'Miercoles' && hora >= '17:00:00'){
                this.bloqued = true
            } else if(this.getWeekDay(fecha) === 'Jueves' && hora >= '17:00:00'){
                this.bloqued = true
            } else if(this.getWeekDay(fecha) === 'Viernes' && hora >= '17:00:00'){
                this.bloqued = true
            } else if(this.getWeekDay(fecha) === 'Sabado' && hora >= '13:00:00'){
                this.bloqued = true
            } else if(this.getWeekDay(fecha) === 'Domingo'){
                this.bloqued = true
            } else {
                this.bloqued = false
            }

        },
        es_cripto(){
            this.virtual = true
            this.fiat = false
        },
        es_fiat(){
            this.virtual = false
            this.fiat = true
        },
        onChange(event) {
            console.log(event.target.value)
        },
        toggle(){
            this.isLoading = true;
            this.switch1 = !this.switch1
            if(this.switch1){
                this.metodo = 'Comprarnos'
                this.metodo2 = 'Comprarles'
                this.icono = '✅'
                this.compra_o_venta = 'por%20valor%20de'
                this.ocultar = !this.ocultar
                this.usuario_2()
            } else {
                this.metodo = 'Vendernos'
                this.metodo2 = 'Venderles'
                this.icono = '⭕'
                this.compra_o_venta = 'para%20recibir'
                this.efectivo_banco = ''
                this.ocultar = !this.ocultar
                this.usuario_3()
            }
        },
        toggle2(){
            this.isLoading = true;
            this.switch2 = !this.switch2
            if(!this.switch2){
                this.usuario_4()
                this.metodo = 'Comprarnos'
                this.metodo2 = 'Comprarles'
                this.compra_o_venta = 'por%20valor%20de'
                this.efectivo_banco = 'banco'
                if(this.virtual){
                    this.updatePesos()
                } else if(this.fiat){
                    this.updateCrypto()
                }

            } else {
                this.usuario_4()
                this.efectivo_banco = 'efectivo%20en%20Bogota'
                if(this.virtual){
                    this.updatePesos()
                } else if(this.fiat){
                    this.updateCrypto()
                }

            }
        },
        sortBy: function() {
            if(this.moneda === 'btc')
            {
                this.isLoading = true;
                //this.usuario_2()
                this.el_valor = this.preciobtc;
                this.crypto_oficial = this.oficialpreciobtc
                this.isLoading = false;
                if(this.virtual){
                    this.updatePesos()
                } else if(this.fiat){
                    this.updateCrypto()
                }
            } else if(this.moneda === 'eth'){
                //this.usuario_2()
                this.isLoading = true;
                this.el_valor = this.precioeth;
                this.crypto_oficial = this.oficialprecioeth
                this.isLoading = false;
                if(this.virtual){
                    this.updatePesos()
                } else if(this.fiat){
                    this.updateCrypto()
                }
            } else if(this.moneda === 'bch'){
                //this.usuario_2()
                this.isLoading = true;
                this.el_valor = this.preciobch;
                this.crypto_oficial = this.oficialpreciobch
                this.isLoading = false;
                if(this.virtual){
                    this.updatePesos()
                } else if(this.fiat){
                    this.updateCrypto()
                }
            } else if(this.moneda === 'ltc'){
                //this.usuario_2()
                this.isLoading = true;
                this.el_valor = this.precioltc;
                this.crypto_oficial = this.oficialprecioltc
                this.isLoading = false;
                if(this.virtual){
                    this.updatePesos()
                } else if(this.fiat){
                    this.updateCrypto()
                }
            } else if(this.moneda === 'dash'){
                //this.usuario_2()
                this.isLoading = true;
                this.el_valor = this.preciodash;
                this.crypto_oficial = this.oficialpreciodash
                this.isLoading = false;
                if(this.virtual){
                    this.updatePesos()
                } else if(this.fiat){
                    this.updateCrypto()
                }
            }
            //console.log(this.moneda);
        },
        updateCrypto(){
                var division;
                var valor_oficial = this.crypto_oficial / this.trm
                this.mostrar = true
                division = this.pesos / this.el_valor
                this.crypto = division.toFixed(5)
                this.cantidad_dolar = this.crypto * valor_oficial
         },
         ponerCero(){
             this.crypto = '',
             this.pesos = ''
         },
         pad() {
            return (this.crypto < 1) ? ("0." + this.crypto) : this.crypto;
         },
         updatePesos(){
                this.mostrar = true
                var valor_oficial = this.crypto_oficial / this.trm
                this.pesos = this.crypto * this.el_valor
                this.cantidad_dolar = this.crypto * valor_oficial
        },

        usuario_2(){
            axios.get('https://ticker.xeler.io/v1/ticker')
            .then((res) => {
                this.isLoading = false;
                //this.conteo()
                if(this.switch1){
                    this.metodo = 'Comprarnos'
                    this.metodo2 = 'Comprarles'
                    this.icono = '✅'
                    this.compra_o_venta = 'por%20valor%20de'
                    this.preciobtc = res.data.data[0].buy_cash;
                    this.precioeth = res.data.data[1].buy_cash;
                    this.preciobch = res.data.data[2].buy_cash;
                    this.precioltc = res.data.data[3].buy_cash;
                    this.preciodash = res.data.data[4].buy_cash;
                    this.oficialpreciobtc = res.data.data[0].oficial;
                    this.oficialprecioeth = res.data.data[1].oficial;
                    this.oficialpreciobch = res.data.data[2].oficial;
                    this.oficialprecioltc = res.data.data[3].oficial;
                    this.oficialpreciodash = res.data.data[4].oficial;
                    this.trm = res.data.data[0].trm
                } else if(!this.switch2){

                    this.preciobtc = res.data.data[0].buy;
                    this.precioeth = res.data.data[1].buy;
                    this.preciobch = res.data.data[2].buy;
                    this.precioltc = res.data.data[3].buy;
                    this.preciodash = res.data.data[4].buy;

                    } else if(this.switch2){

                    this.preciobtc = res.data.data[0].buy_cash;
                    this.precioeth = res.data.data[1].buy_cash;
                    this.preciobch = res.data.data[2].buy_cash;
                    this.precioltc = res.data.data[3].buy_cash;
                    this.preciodash = res.data.data[4].buy_cash;




                } else {
                    this.metodo = 'Vendernos'
                    this.metodo2 = 'Venderles'
                    this.icono = '⭕'
                    this.compra_o_venta = 'para%20recibir'
                    this.preciobtc = res.data.data[0].sell;
                    this.precioeth = res.data.data[1].sell;
                    this.preciobch = res.data.data[2].sell;
                    this.precioltc = res.data.data[3].sell;
                    this.preciodash = res.data.data[4].sell;
                    this.trm = res.data.data[0].trm
                }

                if(this.moneda === 'btc')
                {
                   this.crypto_oficial = this.oficialpreciobtc
                   this.el_valor = this.preciobtc;
                } else if(this.moneda === 'eth'){
                   this.crypto_oficial = this.oficialprecioeth
                   this.el_valor = this.precioeth;
                } else if(this.moneda === 'bch'){
                   this.crypto_oficial = this.oficialpreciobch
                   this.el_valor = this.preciobch;
                } else if(this.moneda === 'ltc'){
                   this.crypto_oficial = this.oficialprecioltc
                   this.el_valor = this.precioltc;
                } else if(this.moneda === 'dash'){
                   this.crypto_oficial = this.oficialpreciodash
                   this.el_valor = this.preciodash;
                }

                if(this.virtual){
                    this.updatePesos()
                } else if(this.fiat){
                    this.updateCrypto()
                }



            }, () => {
                console.log("Error")
              //this.has_error = true
            })
          },

          usuario_3(){
            axios.get('https://ticker.xeler.io/v1/ticker')
            .then((res) => {
                this.isLoading = false;
                if(this.switch1){
                    this.metodo = 'Comprarnos'
                    this.metodo2 = 'Comprarles'
                    this.icono = '✅'
                    this.compra_o_venta = 'por%20valor%20de'
                    this.preciobtc = res.data.data[0].buy_cash;
                    this.precioeth = res.data.data[1].buy_cash;
                    this.preciobch = res.data.data[2].buy_cash;
                    this.precioltc = res.data.data[3].buy_cash;
                    this.preciodash = res.data.data[4].buy_cash;
                    this.trm = res.data.data[0].trm


                } else {
                    this.metodo = 'Vendernos'
                    this.metodo2 = 'Venderles'
                    this.icono = '⭕'
                    this.compra_o_venta = 'para%20recibir'
                    this.preciobtc = res.data.data[0].sell;
                    this.precioeth = res.data.data[1].sell;
                    this.preciobch = res.data.data[2].sell;
                    this.precioltc = res.data.data[3].sell;
                    this.preciodash = res.data.data[4].sell;
                    this.trm = res.data.data[0].trm
                }

                if(this.moneda === 'btc')
                {
                    this.crypto_oficial = res.data.data[0].oficial
                   this.el_valor = this.preciobtc;
                } else if(this.moneda === 'eth'){
                   this.crypto_oficial = res.data.data[1].oficial
                   this.el_valor = this.precioeth;
                } else if(this.moneda === 'bch'){
                   this.crypto_oficial = res.data.data[2].oficial
                   this.el_valor = this.preciobch;
                } else if(this.moneda === 'ltc'){
                   this.crypto_oficial = res.data.data[3].oficial
                   this.el_valor = this.precioltc;
                } else if(this.moneda === 'dash'){
                   this.crypto_oficial = res.data.data[4].oficial
                   this.el_valor = this.preciodash;
                }

                if(this.virtual){
                    this.updatePesos()
                } else if(this.fiat){
                    this.updateCrypto()
                }

            }, () => {
                console.log("Error")
              //this.has_error = true
            })
          },

          usuario_4(){
            axios.get('https://ticker.xeler.io/v1/ticker')
            .then((res) => {
                this.isLoading = false;
                if(!this.switch2){
                    this.metodo = 'Comprarnos'
                    this.metodo2 = 'Comprarles'
                    this.icono = '✅'
                    this.compra_o_venta = 'por%20valor%20de'
                    this.preciobtc = res.data.data[0].buy;
                    this.precioeth = res.data.data[1].buy;
                    this.preciobch = res.data.data[2].buy;
                    this.precioltc = res.data.data[3].buy;
                    this.preciodash = res.data.data[4].buy;
                    this.trm = res.data.data[0].trm
                } else {
                    this.preciobtc = res.data.data[0].buy_cash;
                    this.precioeth = res.data.data[1].buy_cash;
                    this.preciobch = res.data.data[2].buy_cash;
                    this.precioltc = res.data.data[3].buy_cash;
                    this.preciodash = res.data.data[4].buy_cash;
                }

                if(this.moneda === 'btc')
                {
                    this.crypto_oficial = res.data.data[0].oficial
                   this.el_valor = this.preciobtc;
                } else if(this.moneda === 'eth'){
                   this.crypto_oficial = res.data.data[1].oficial
                   this.el_valor = this.precioeth;
                } else if(this.moneda === 'bch'){
                   this.crypto_oficial = res.data.data[2].oficial
                   this.el_valor = this.preciobch;
                } else if(this.moneda === 'ltc'){
                   this.crypto_oficial = res.data.data[3].oficial
                   this.el_valor = this.precioltc;
                } else if(this.moneda === 'dash'){
                   this.crypto_oficial = res.data.data[4].oficial
                   this.el_valor = this.preciodash;
                }
                if(this.virtual){
                    this.updatePesos()
                } else if(this.fiat){
                    this.updateCrypto()
                }

            }, () => {
                console.log("Error")
              //this.has_error = true
            })
          },
    },
    mounted() {
        this.bloqued = true
        //this.obtenerCalculadora()
        //this.conteo()
        this.usuario_2()
       // this.homeScreen()
        /* vue  */
        //console.log(this.bloquear())

    },
    beforeMount() {
        this.unIntervalo = setInterval(()=>{
                //this.obtenerCalculadora()
            },6000)
    },
}
</script>

<style scoped>
/* input {
  border-image-source: linear-gradient(to right, #7a0fff 0%, #46bdf4 100%);
  border-width: 5pt;
  border-image-slice: 1;
} */

.mrar-5 {
    margin-right: 5px
}

.btn-whatsapp{
    margin-top: 3%;
    background-image: linear-gradient(to right, #46bdf4 0%, #2b56f5 100%);
    color:#ffffff
}

.input-switch{
    position:absolute;
    height:1px;
    width:1px;
    opacity:0
}
.input-switch ~ label:not(.error){
    line-height:20px;
    padding-top:5px;
    padding-bottom:5px;
    cursor:pointer;
    padding-left:48px;
    min-height:30px;
    min-width:48px;
    border-radius:12px;
    margin-bottom:0;
    display:flex;
    align-items:center;
    position:relative;
    font-size:14px;
    color:#fff
}
.input-switch ~ label:not(.error).no-text{
    padding-left:56px
}
.input-switch ~ label:not(.error):before,.input-switch ~ label:not(.error):after{
    position:absolute;
    content:'';
    transition:all .4s
}
.input-switch ~ label:not(.error):before{
    left:0;
    top:50%;
    transform:translateY(-50%);
    height:20px;
    width:40px;
    border-radius:15px;
    background:#7a0fff
}
.input-switch ~ label:not(.error):after{
    left:2px;
    top:50%;
    transform:translateY(-50%);
    height:16px;
    width:16px;
    border-radius:50%;
    background:#fff
}
.input-switch ~ label:not(.error) span{
    transition:all .4s;
    opacity:1
}
.input-switch ~ label:not(.error) span.over{
    position:absolute;
    left:48px
}
.input-switch ~ label:not(.error) span:last-child{
    opacity:0
}
.input-switch:disabled ~ label{
    opacity:.5
}
.input-switch:checked ~ label:before{
    background:#46bdf4
}
.input-switch:checked ~ label:after{
    left:22px
}
.input-switch:checked ~ label span{
    opacity:0
}
.input-switch:checked ~ label span:last-child{
    opacity:1
}
.input-switch ~ .error{
    left:-4px;
    top:-26px;
    bottom:auto;
    right:auto
}

.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #ffffff;
    background-color: transparent;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 23px;
    /* background:
    linear-gradient(#fff,#fff) content-box,
    linear-gradient(to right, #46bdf4 0%, #2b56f5 100%) border-box; */
    /* background: linear-gradient(to right, #46bdf4 0%, #2b56f5 100%); */
    /* border-image-slice: 1;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; */
}

.form-control::after {
    position: absolute;
    top: -4px; bottom: -4px;
    left: -4px; right: -4px;
    background: linear-gradient(to right, #46bdf4 0%, #2b56f5 100%);
    content: '';
    z-index: -1;
    border-radius: 23px;
}
.nueva{
    padding-right: 15px;
    padding-left: 15px;
}

input, select {
    border-image-source: linear-gradient(to right, #46bdf4 0%, #2b56f5 100%);
    border-image-slice: 1;
    border-radius: 23px;
  /* background-color: transparent;
  background-image: linear-gradient(to right, #46bdf4 0%, #2b56f5 100%); */
}

.input {
    position:relative;
    font-size: 1.5em;
    background: linear-gradient(21deg, #10abff, #1beabd);
    padding: 3px;
    display: inline-block;
    border-radius: 9999em;
}

.switch {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 34px;
  animation-name: shake;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
}

@keyframes shake {
  0% {left: 0}
  1% {left: -3px}
  2% {left: 5px}
  3% {left: -8px}
  4% {left: 8px}
  5% {left: -5px}
  6% {left: 3px}
  7% {left: 0}
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FF12DD;
  -webkit-transition: .4s;
  transition: .4s;
   border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #0FCA09;
}

input:focus + .slider {
  box-shadow: 0 0 1px #FF12DD;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(55px);
}

/*------ ADDED CSS ---------*/
.slider:after
{
 content:'Banco';
 color: white;
 display: block;
 font-weight: bold;
 position: absolute;
 transform: translate(-50%,-50%);
 top: 50%;
 left: 50%;
 padding-left: 15px;
 font-size: 10px;
 font-family: "Poppins", sans-serif;
}

input:checked + .slider:after
{
  content:'Efectivo';
  padding-right: 40px;
  font-weight: bold
}




.switch2 {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 34px;
}

.switch2 input {display:none;}

.slider2 {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #10abff;
  -webkit-transition: .4s;
  transition: .4s;
   border-radius: 34px;
}

.slider2:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider2 {
  background-color: #7a0fff;
}

input:focus + .slider2 {
  box-shadow: 0 0 1px #2b56f5;
}

input:checked + .slider2:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(55px);
}

/*------ ADDED CSS ---------*/
.slider2:after
{
 content:'Vender';
 color: white;
 font-weight: bold;
 display: block;
 position: absolute;
 transform: translate(-50%,-50%);
 top: 50%;
 left: 50%;
 padding-left: 20px;
 /* right: 38px; */
 font-size: 10px;
 font-family: "Poppins", sans-serif;
}

input:checked + .slider2:after
{
   content:'Comprar';
   padding-right: 45px;
   font-weight: bold;
}
select option{
    color: black;
}
/* select.form-control {
  color: black;
} */
</style>
