
require('./bootstrap');
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import VeeValidate from 'vee-validate';
import VueQrcodeReader from "vue-qrcode-reader";
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('es6-promise').polyfill();
var axios = require('axios');
import Swal from 'sweetalert2';
import ClipboardJS from 'clipboard';
import VueScrollTo from 'vue-scrollto';
require('./particles');
Vue.use(BootstrapVue)

Vue.component('calculadora-whatsapp', require('../componentes/CalculadoraWhatsapp.vue').default);
Vue.component('navegacion', require('../componentes/Navegacion.vue').default);
Vue.component('detalles-transaccion', require('../componentes/admin/DetallesTransaccion.vue').default);
Vue.component('transacciones-revivir', require('../componentes/admin/TransaccionesRevivir.vue').default);
Vue.component('transacciones-pendientes', require('../componentes/admin/TransaccionesPendientes.vue').default);
Vue.component('transacciones-aprobadas', require('../componentes/admin/TransaccionesAprobadas.vue').default);
Vue.component('transacciones-todas', require('../componentes/admin/TransaccionesTodas.vue').default);
Vue.component('buscar', require('../componentes/admin/Buscar.vue').default);
Vue.component('contabilidad', require('../componentes/admin/Contabilidad.vue').default);
Vue.component('contabilidad-otros', require('../componentes/admin/ContabilidadOtros.vue').default);
Vue.component('referidos', require('../componentes/admin/Referidos.vue').default);
Vue.component('perfil-usuario', require('../componentes/admin/PerfilUsuario.vue').default);
Vue.component('calculator', require('../componentes/admin/CalculadoraAdmin.vue').default);
Vue.component('agregar-efectivo', require('../componentes/admin/AgregarEfectivo.vue').default);
Vue.component('dashboard', require('../componentes/admin/Dashboard.vue').default);
Vue.component('cuentas-efectivo', require('../componentes/admin/CuentasEfectivo.vue').default);
Vue.component('Venta', require('../componentes/Venta.vue').default);
Vue.component('perfil', require('../componentes/Perfil.vue').default);
Vue.component('verificacion', require('../componentes/Verificacion.vue').default);
Vue.component('detalles', require('../componentes/DetallesVenta.vue').default);
Vue.component('detalles-compra', require('../componentes/DetallesTransaccionCompra.vue').default);
Vue.component('Calculadora', require('../componentes/Calculadora.vue').default);
Vue.component('Compra', require('../componentes/Compra.vue').default);

Vue.use(VueQrcodeReader);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB819UUrxog6lwdzP8kvKkEAzevC4kLZp4',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },

})
//Vue.use(CircularCountDownTimer);
Vue.use(require('vue-resource'));
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

Vue.use(VeeValidate);


var url_wallet = 'usuario/ajax/wallet';
var path = window.location.pathname;
var pagina = path.split("/").pop();

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.toast = toast;

window.Fire = new Vue();

const app = new Vue({
    el:'#principal',
});

$('body').scrollspy({ target: '#mainnav' })

function winwidth() {
    return $(window).width()
}

/* if(pagina == '/register'){


} */

function borrar_actividad(){
    var e = $("#activity_action").val();
    $(document).on("click", ".borra-individual", function() {
                var c = $(this).data("id");
                //console.log(c);
        var r =  confirm("Está seguro de borrarlo?\nNo se podrá recuperar luego");
        if(r === true){
        axios.post('usuario/ajax/borrar_actividad/'+c)
            .then((res)=>{
                if(res.data.mensaje === 'Borrado con éxito'){
                    Swal.fire('Hecho', res.data.mensaje,'success');
                    ("all" == c ? $("#activity-log tr").fadeOut(1e3, function() {
                        $(this).remove(), $("#activity-log").hide()
                    }) : $(".activity-delete").parents("tr.activity-" + c).fadeOut(1e3, function() {
                        $(this).remove()
                    }))
                }else{
                    Swal.fire('Error',res.data.mensaje,'error');
                }
                //console.log(res.data);
            }, ()=>{
                console.log("Error")
            })
        } else {
            return;
        }
    });
}

function borrar_todas_actividades(){
    $(document).on("click", ".borrar-todas-actividades", function() {
        var c = $(this).data("id");
        //console.log(c);
        var r =  confirm("Está seguro de borrar todo?\nNo se podrán recuperar luego");
        if(r === true){
        axios.post('usuario/ajax/borrar_todas_actividades')
            .then((res)=>{
                if(res.data.mensaje === 'Borradas con éxito'){
                    Swal.fire('Hecho', res.data.mensaje,'success');
                    ("all" == c ? $("#activity-log tr").fadeOut(1e3, function() {
                        $(this).remove(), $("#activity-log").hide()
                    }) : $(".activity-delete").parents("tr.activity-" + c).fadeOut(1e3, function() {
                        $(this).remove()
                    }))
                }else{
                    Swal.fire('Error',res.data.mensaje,'error');
                }
                //console.log(res.data);
            }, ()=>{
                console.log("Error")
            })
        } else {
            return;
        }
    });
}

function copytoclipboard(a, b, c) {
    var d = document.queryCommandSupported("copy"),
        e = a,
        f = b;
    e.parent().find(f).removeAttr("disabled").select(), !0 === d ? (document.execCommand("copy"), c.text("Copied to Clipboard").fadeIn().delay(1e3).fadeOut(), e.parent().find(f).attr("disabled", "disabled")) : window.prompt("Copy to clipboard: Ctrl+C or Command+C, Enter", text)
}

function feedback(a, b) {
    "success" === b ? $(a).parent().find(".copy-feedback").text("Copiado").fadeIn().delay(1e3).fadeOut() : $(a).parent().find(".copy-feedback").text("Error al copiar").fadeIn().delay(1e3).fadeOut()
}



$(document).on('click','a.tranx_reject',function(b){
    var name = '';
    b.preventDefault(),
    swal({
        title: "Está seguro?",
        text: "Ingresa una nota",
        content: "input",
        icon: "warning",
        buttons: {
            cancel: "Cancelar",
            confirm: true,
        }
      })
      .then((value) => {
        name = value;
      }).then(b => {
          var c = $(this),
        e = $(this).data('id');
        $.post('/admin/ajax/transaccion/update',{
            req_type: 'rechazado',
            _token: csrf_token,
            nota: name,
            estado: 5,
            tnx_id: e
        }).done(b => {
            console.log('aqui llegó')
            toast.fire({type:'success', title:b.message});
        })
      })
})

$(document).on('click','a.wallet-activo',function (p){
    p.preventDefault(),
    swal({
        title: "Está seguro?",
        text: "Le enviaremos un código de verificación a su celular",
        icon: "warning",
        buttons: {
            cancel: "Cancelar",
            confirm: true,
        }
      })
      .then(p => {
          var c = $(this),
          f = $(this).data("uid");
        p && $.post('/solicitarCodigo/',{
            _token: csrf_token
        }).done(p => {
            toastr.clear(), toastr.options = {
                closeButton: true,
                positionClass: "toast-bottom-center",
                showDuration: "1000",
                hideDuration: "10000",
                timeOut: "2000",
                extendedTimeOut: "1000"
            }, toastr.success(p.message)
            
        })
      })
});

$(document).on('click','a.moneda-activo',function (p){
    p.preventDefault(),
    swal({
        title: "Está seguro?",
        text: "Esto activará o desactivará esta moneda",
        icon: "warning",
        buttons: {
            cancel: "Cancelar",
            confirm: true,
        }
      })
      .then(p => {
          var c = $(this),
          f = $(this).data("uid");
        p && $.post('/admin/coin/active_desactive/'+f,{
            _token: csrf_token,
             bank_id: f
        }).done(p => {
            toastr.clear(), toastr.options = {
                closeButton: true,
                positionClass: "toast-bottom-center",
                showDuration: "1000",
                hideDuration: "10000",
                timeOut: "2000",
                extendedTimeOut: "1000"
            }, toastr.success(p.message)

            setTimeout(() => {
                window.location = '/admin/settings/';
            }, 5000);
        })
      })
});

$(document).on('click','a.otros-activo',function (p) {
    p.preventDefault(),
    swal({
        title: "Está seguro?",
        text: "Esto activará o desactivará esta cuenta",
        icon: "warning",
        buttons: {
            cancel: "Cancelar",
            confirm: true,
        }
      })
      .then(p => {
          var c = $(this),
          f = $(this).data("uid");
        p && $.post('/admin/cuenta_otros/active_desactive/'+f,{
            _token: csrf_token,
             bank_id: f
        }).done(p => {
            toastr.clear(), toastr.options = {
                closeButton: true,
                positionClass: "toast-bottom-center",
                showDuration: "1000",
                hideDuration: "10000",
                timeOut: "2000",
                extendedTimeOut: "1000"
            }, toastr.success(p.message)

            setTimeout(() => {
                window.location = '/admin/cuentas_otros';
            }, 5000);
        })
      })
});

$(document).on('click','a.bank-activo',function (p) {
    p.preventDefault(),
    swal({
        title: "Está seguro?",
        text: "Esto activará o desactivará este banco",
        icon: "warning",
        buttons: {
            cancel: "Cancelar",
            confirm: true,
        }
      })
      .then(p => {
          var c = $(this),
          f = $(this).data("uid");
        p && $.post('/admin/banco/active_desactive/'+f,{
            _token: csrf_token,
             bank_id: f
        }).done(p => {
            toastr.clear(), toastr.options = {
                closeButton: true,
                positionClass: "toast-bottom-center",
                showDuration: "1000",
                hideDuration: "10000",
                timeOut: "2000",
                extendedTimeOut: "1000"
            }, toastr.success(p.message)

            setTimeout(() => {
                window.location = '/admin/settings/bancos';
            }, 5000);
        })
      })
});


$('#other_type').on('change', function() {

    if(this.value === 'DAVIPLATA'
        || this.value === 'NEQUI'
        || this.value === 'AHORRO A LA MANO'
        || this.value === 'COBRU'
        || this.value === 'MOVIIRED'
        || this.value === 'BALOTO'
        || this.value === 'EFECTY'
        || this.value === 'TRANSFIYA'
        || this.value === 'PSE'
        ){
            $('#num_other').show();
    } else {
        $('#num_other').hide();
    }
    console.log( this.value );
});

$('#bank_name').on('change', function() {

    if(this.value === 'BANCOLOMBIA'){
        //$('#bank_number')
        $('#bank_number').keypress(function(e) {

            var verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(/[^0-9]/);
            if (verified || e.delegateTarget.value.length>10 || e.ctrlKey ==true) { if(e.which!=8 ){e.preventDefault();}}

            }).on('paste',function(e){ e.preventDefault();});
    }
    console.log( this.value );


});

$('#country').on('change', function(){
    if(this.value === 'Colombia'){
        $('#los_departamentos').show();
        $('#departamento').on('change', function(){
            var deptid = $(this).val();
            $.ajax({
                url: 'mostrar_ciudades',
                type: 'get',
                data: {depart:deptid},
                dataType: 'json',
                success:function(response){
                    $('#la_ciudad').show();
                    var len = response.length;

                    $("#ciudad").empty();
                    for( var i = 0; i<len; i++){
                        var id = response[i]['id'];
                        var name = response[i]['municipio'];

                        $("#ciudad").append("<option value='"+id+"'>"+name+"</option>");

                    }
                }
            });
        });
    } else {
        $('#los_departamentos').hide();
        $('#la_ciudad').hide();
        /* var ciudad = document.getElementById("ciudad");
        ciudad.removeAttribute("required");
        var departamento = document.getElementById("telefono");  */
        $('#ciudad').removeAttr('required');
        $('#departamento').removeAttr('required');
    }
});

$(document).on('click','a.other-activo',function (p) {
    p.preventDefault(),
    swal({
        title: "Está seguro?",
        text: "Esto activará o desactivará este banco",
        icon: "warning",
        buttons: {
            cancel: "Cancelar",
            confirm: true,
        }
      })
      .then(p => {
          var c = $(this),
          f = $(this).data("uid");
        p && $.post('/admin/otros/active_desactive/'+f,{
            _token: csrf_token,
             other_id: f
        }).done(p => {
            toastr.clear(), toastr.options = {
                closeButton: true,
                positionClass: "toast-bottom-center",
                showDuration: "1000",
                hideDuration: "10000",
                timeOut: "2000",
                extendedTimeOut: "1000"
            }, toastr.success(p.message)

            setTimeout(() => {
                window.location = '/admin/settings/otros';
            }, 5000);
        })
      })
});



$(document).on('click','a.ticket_close',function (p) {
    p.preventDefault(),
    swal({
        title: "Está seguro?",
        text: "Esto cerrará el ticket y enviará Email al usuario",
        icon: "warning",
        buttons: {
            cancel: "Cancelar",
            confirm: true,
        }
      })
      .then(p => {
          var c = $(this),
          f = $(this).data("uid");
        p && $.post('/admin/tickets/close_ticket/'+f,{
            _token: csrf_token,
            ticket_id: f
        }).done(p => {
            toastr.clear(), toastr.options = {
                closeButton: true,
                positionClass: "toast-bottom-center",
                showDuration: "1000",
                hideDuration: "10000",
                timeOut: "2000",
                extendedTimeOut: "1000"
            }, toastr.success(p.message)

            setTimeout(() => {
                window.location = '/admin/tickets';
            }, 5000);
        })
      })
});

$(document).on('click','a.ticket_close_user',function (p) {
    p.preventDefault(),
    swal({
        title: "Está seguro?",
        text: "Esto cerrará el ticket",
        icon: "warning",
        buttons: {
            cancel: "Cancelar",
            confirm: true,
        }
      })
      .then(p => {
          var c = $(this),
          f = $(this).data("uid");
        p && $.post('/tickets/close_ticket/'+f,{
            _token: csrf_token,
            ticket_id: f
        }).done(p => {
            toastr.clear(), toastr.options = {
                closeButton: true,
                positionClass: "toast-bottom-center",
                showDuration: "1000",
                hideDuration: "10000",
                timeOut: "2000",
                extendedTimeOut: "1000"
            }, toastr.success(p.message)

            setTimeout(() => {
                window.location = '/tickets_support';
            }, 5000);
        })
      })
});


$(document).on('click','a.add_time',function(b){
    b.preventDefault(),
    swal({
        title: "Está seguro?",
        text: "Esto añadirá 10 minutos a la hora de auto cancelación",
        icon: "warning",
        buttons: {
            cancel: "Cancelar",
            confirm: true,
        }
      })
      .then(b => {
          var c = $(this),
        e = $(this).data('id');
        b && $.post('/admin/ajax/transaccion/update',{
            req_type: 'add_time',
            _token: csrf_token,
            tnx_id: e
        }).done(b => {
            toast.fire({type:'success', title:b.message});
        })
      })
})


$(document).on("click", "a.kyc_reject", function(b) {
    b.preventDefault(), swal({
        title: "Está seguro?",
        text: "Una vez rechazado, el cliente recibirá un correo electrónico para volver a enviar los documentos KYC!",
        icon: "warning",
        buttons: {
            cancel: "Cancelar",
            confirm: true,
        },
    }).then(b => {
        var c = $(this),
            e = $(this).data("id"),
            f = $(".data-item-" + e);
        b && $.post('/admin/ajax/kyc/update', {
            req_type: "update_kyc_rechazado",
            _token: csrf_token,
            estado: 1,
            kyc_id: e
        }).done(b => {
            toast.fire({type:'success', title:b.message});
            f.fadeOut(1e3, function() {
                $(this).remove()
            })
            //c.fadeOut(300)
        })
    })
})

$(document).on("click", "a.user-action", function(b) {
    b.preventDefault(), swal({
        title: "Está seguro?",
        text: "Una vez suspendido, el cliente no podrá iniciar sesión!",
        icon: "warning",
        buttons: {
            cancel: "Cancelar",
            confirm: true,
        },
    }).then(b => {
        var c = $(this),
            e = $(this).data("id"),
            f = $(this).data("uid");
            //f = $(".data-item-" + e);
        b && $.post('/admin/ajax/user/update', {
            req_type: "update_user_suspendido",
            _token: csrf_token,
            estado: 0,
            kyc_id: f
        }).done(b => {
            toast.fire({type:'success', title:b.message});

            /* f.fadeOut(1e3, function() {
                $(this).remove()
            }) */
            //c.fadeOut(300)
        })
    })
})

$('#clock').countdown('2020/10/10 12:34:56')
.on('update.countdown', function(event) {
  var format = '%H:%M:%S';
  if(event.offset.totalDays > 0) {
    format = '%-d day%!d ' + format;
  }
  if(event.offset.weeks > 0) {
    format = '%-w week%!w ' + format;
  }
  $(this).html(event.strftime(format));
})
.on('finish.countdown', function(event) {
  $(this).html('This offer has expired!')
    .parent().addClass('disabled');

});

function formatDate(d) {
    Number.prototype.padLeft = function(base,chr){
        var  len = (String(base || 10).length - String(this).length)+1;
        return len > 0? new Array(len).join(chr || '0')+this : this;
     }
    var d = new Date,
        dformat = [ d.getFullYear(),
                    d.getDate().padLeft(),
                    (d.getMonth()+1).padLeft()
                    ].join('-')+
                    ' ' +
                  [ d.getHours().padLeft(),
                    d.getMinutes().padLeft(),
                    d.getSeconds().padLeft()].join(':');


        return dformat;
}

$('[data-countdown]').each(function() {
    var $this = $(this);
    var finalDate = $(this).data('countdown');

    if( (new Date(finalDate).getTime() < new Date().getTime()))
    {
        $this.html('Conteo detenido');
        $this.attr('style','color: #dc3545');
    } else {
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('Finaliza en %H:%M:%S'));
         })
         $this.on('finish.countdown', function(event){
            $this.html('Conteo detenido');
            $this.attr('style','color: #dc3545');
         })
    }

  });


$(".user-wallet").on('click',function(event){
    $.ajax({
        url: url_wallet,
        dataType: 'html',
        success: function(response){
            $('.modal-content').html(response);
        }
    });
    $('.modal').modal('show');

});

$(".cel_verificado").on('click',function(event){
    $.ajax({
        url: 'usuario/ajax/cel_confirmado',
        dataType: 'html',
        success: function(response){
            $('.modal-content').html(response);
        }
    });
    $('.modal').modal('show');

});

$(".email_verificado").on('click',function(event){
    $.ajax({
        url: 'usuario/ajax/email_confirmado',
        dataType: 'html',
        success: function(response){
            $('.modal-content').html(response);
        }
    });
    $('.modal').modal('show');

});


$("#como_comprar").on('click',function(event){
    $.ajax({
        url: 'usuario/ajax/como_comprar',
        dataType: 'html',
        success: function(response){
            $('.modal-content').html(response);
        }
    });
    $('.modal').modal('show');

});

$("#faq").on('click',function(event){
    $.ajax({
        url: 'usuario/ajax/terminos_y_condiciones',
        dataType: 'html',
        success: function(response){
            $('.modal-content').html(response);
        }
    });
    $('.modal').modal('show');

});


$(document).ready(function(){
    /* if (pagina == 'home'){
        //los_precios();
        if(!primer_vez)
            $('.verificacion').hide();
        else
            la_verificacion()
    } */
});

function la_verificacion()
{
    var el_div = $('.verificacion');
    //$('.verificacion > div').remove();
    //$(el_div+">div").empty();
    el_div.show();
    var div_vacio = "";

    $.get('usuario/ajax/verificacion_class',function(res){
        console.log(res.cel_verificado);
        div_vacio = div_vacio + '<div class="card-innr">';
        div_vacio = div_vacio + '<div class="user-account-status">';
        div_vacio = div_vacio + '<h5 class="card-title card-title-sm">Nivel de verificación '+ res.nivel_verificacion+'</h5>';
        div_vacio = div_vacio + '<div class="gaps-1-5x"></div>';
        div_vacio = div_vacio + '<ul class="btn-grp">';
        if(res.email_verificado === 1)
            div_vacio = div_vacio + '<li class="email_verificado"><a href="javascript:void(0)" class="btn btn-xs btn-auto btn-success">Email Verificado</a></li>';
        else
            div_vacio = div_vacio + '<li class="email_verificado"><a href="javascript:void(0)" class="btn btn-xs btn-auto btn-danger">Email No Verificado</a></li>';
        if(res.cel_verificado)
            div_vacio = div_vacio + '<li class="cel_verificado"><a href="javascript:void(0)" class="btn btn-xs btn-auto btn-success">Celular Verificado</a></li>';
        else
            div_vacio = div_vacio + '<li class="cel_verificado"><a href="javascript:void(0)" class="btn btn-xs btn-auto btn-success">Celular No Verificado</a></li>';
        div_vacio = div_vacio + '</ul>';
        div_vacio = div_vacio + '</div>';
        div_vacio = div_vacio + '<div class="gaps-2x"></div>';
        div_vacio = div_vacio + '</div>';

        $(el_div).append(div_vacio);
    });

}



/* $(".payment-btn").click(function(e){
    var token = document.head.querySelector('meta[name="csrf-token"]');
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    e.preventDefault();
    var codigo = $("#codigo_cel").val();
    axios.post('usuario/ajax/confirmar_cel',{codigo:codigo
    }).then((response)=>{
        if(response.data.mensaje === 'Código confirmado con éxito'){
            //primera_vez = true;
            console.log('presionado submit');
            Swal.fire('Hecho', response.data.mensaje,'success');
           $('.modal').modal('hide');
           la_verificacion();
        }else{
            Swal.fire('Error',response.data.mensaje,'error');
        }
    }).catch((error)=>{
        console.log(error.error);
    });
}); */


function los_precios()
{
    var monedas = $("#monedas");
    var div_monedas = "";
    $.get( "https://cors-anywhere.herokuapp.com/https://ticker.xeler.io/v1/ticker", function(res) {
        $(monedas).empty();
        $.each(res.data, function (index, data) {
            div_monedas = div_monedas + '<div class="col-6">';
            div_monedas = div_monedas + '<div class="payment-item pay-option">';
            div_monedas = div_monedas + '<input class="pay-option-check pay-method" type="radio" id="pay'+data.symbol.toLowerCase()+'" name="paymethod" value="'+data.symbol.toLowerCase()+'">';
            div_monedas = div_monedas + '<label class="pay-option-label" for="pay'+data.symbol.toLowerCase()+'">';
            div_monedas = div_monedas + '<span class="pay-title">';
            if(data.symbol === 'BCH')
                div_monedas = div_monedas + '<em class="pay-icon cf cf-btc-alt pay-icon-btc"></em>';
            else
                div_monedas = div_monedas + '<em class="pay-icon cf cf-'+data.symbol.toLowerCase()+' pay-icon-'+data.symbol.toLowerCase()+'"></em>';
            div_monedas = div_monedas + '<span class="pay-cur">'+ data.name +'</span>';
            div_monedas = div_monedas + '</span>';
            div_monedas = div_monedas + '<span class="pay-amount">'+data.buy_cash.toLocaleString('es-CO')+' COP</span>';
            div_monedas = div_monedas + '</label>';
            div_monedas = div_monedas + '</div>';
            div_monedas = div_monedas + '</div>';
        })
        $(monedas).append(div_monedas);
      }).fail(function() {
          alert( "error" );
    });
}

function modal_fix() {
    var a = $(".modal"),
        b = $("body");
    a.on("shown.bs.modal", function() {
        b.hasClass("modal-open") || b.addClass("modal-open")
    })
}

function stick_nav_() {
    var a = $(".is-sticky"),
        b = $(".topbar"),
        c = $(".topbar-wrap");
    if (0 < a.length) {
        var d = a.offset();
        $(window).scroll(function() {
            var e = $(window).scrollTop(),
                f = b.height();
            e > d.top ? !a.hasClass("has-fixed") && (a.addClass("has-fixed"), c.css("padding-top", 0)) : a.hasClass("has-fixed") && (a.removeClass("has-fixed"), c.css("padding-top", 0))
        })
    }
}

function toggle_tigger_() {

    $(".toggle-tigger").on("click",function(e){
        var me = $(this);
        me.toggleClass("active");
    });
}

function toggle_nav_() {
    var a = $(".toggle-nav"),
        b = $(".navbar");
    0 < a.length && a.on("click", function(c) {
        a.toggleClass("active"), b.toggleClass("active"), c.preventDefault()
    }), $(document).on("click", "body", function(c) {
        a.is(c.target) || 0 !== a.has(c.target).length || b.is(c.target) || 0 !== b.has(c.target).length || (a.removeClass("active"), b.removeClass("active"))
    }), activeNav(b), $(window).on("resize", function() {
        activeNav(b)
    })
}

function activeNav(a) {
    991 > winwidth() ? a.delay(500).addClass("navbar-mobile") : a.delay(500).removeClass("navbar-mobile")
}

function switch_toggle_() {
    var a = $(".switch-toggle"),
        b = $(".switch-toggle-link");
    0 < a.length && a.each(function() {
        $(this).on("change", function() {
            var a = $(this),
                c = a.data("switch");
            a.is(":checked") ? ($(".switch-content." + c).addClass("switch-active").slideDown(300), switch_link(b, $(this), "remove")) : !a.is(":checked") && ($(".switch-content." + c).removeClass("switch-active").slideUp(300), switch_link(b, $(this), "add"))
        }), $(this).is(":checked") ? ($(".switch-content." + $(this).data("switch")).addClass("switch-active").slideDown(100), switch_link(b, $(this), "remove")) : ($(".switch-content." + $(this).data("switch")).removeClass("switch-active").slideUp(100), switch_link(b, $(this), "add"))
    }), 0 < b.length && b.each(function() {
        $(this).on("click", function(a) {
            var b = $(this),
                c = b.data("switch");
            if (b.hasClass("link-disable")) return !1;
            $(".switch-content." + c).toggleClass("switch-active").slideToggle(300);
            a.preventDefault()
        })
    })
}

function countdown_() {
    var a = $(".countdown-clock");
    0 < a.length && a.each(function() {
        var a = $(this),
            b = a.attr("data-date");
        a.countdown(b).on("update.countdown", function(a) {
            $(this).html(a.strftime("<div><span class=\"countdown-time countdown-time-first\">%D</span><span class=\"countdown-text\">Day</span></div><div><span class=\"countdown-time\">%H</span><span class=\"countdown-text\">Hour</span></div><div><span class=\"countdown-time\">%M</span><span class=\"countdown-text\">Min</span></div><div><span class=\"countdown-time countdown-time-last\">%S</span><span class=\"countdown-text\">Sec</span></div>"))
        })
    })
}

function bs_modal_toggle(a, b = !0) {
    var c = a.parents("div.modal");
    0 < c.length && b && c.modal("toggle")
}

function bs_modal_hide(a, b = "hide", c = ".modal") {
    0 < $(a).parents(c).length && $(a).parents(c).modal(b)
}

function toggle_section_modal_() {
    var a = $(".toggle-tigger");
    a.on("click", function(a) {
        var b = $(this);
        b.toggleClass("active").parent().find(".toggle-content").slideToggle(), a.preventDefault()
    })
}

function toggle_content_() {
    var a = $(".toggle-content-tigger");
    a.on("click", function(a) {
        var b = $(this);
        b.toggleClass("active").parent().find(".toggle-content").slideToggle(), a.preventDefault()
    })
}

function tooltip_() {
    var a = $("[data-toggle=\"tooltip\"]");
    0 < a.length && a.tooltip()
}

function date_time_picker_() {
    var a = $(".date-picker"),
        b = $(".date-picker-dob"),
        c = $(".time-picker");
    0 < a.length && a.each(function() {
        $(this).datepicker({
            format: "mm-dd-yyyy",
            maxViewMode: 2,
            clearBtn: !0,
            autoclose: !0,
            todayHighlight: !0
        })
    }), b.each(function() {
        $(this).datepicker({
            format: "yyyy-mm-dd",
            startView: 2,
            maxViewMode: 2,
            clearBtn: !0,
            autoclose: !0
        })
    });
    var d = $(".custom-date-picker");
    0 < d.length && d.each(function() {
        $(this).datepicker({
            format: "mm-dd-yyyy",
            maxViewMode: 2,
            clearBtn: !0,
            autoclose: !0,
            todayHighlight: !0,
            startDate: new Date
        })
    }), 0 < c.length && c.each(function() {
        $(this).parent().addClass("has-timepicker"), $(this).timepicker({
            timeFormat: "hh:mm p",
            interval: 15,
            change: function() {
                btn_actived($(this).closest("form").find("button[type=submit]"))
            }
        })
    })
}



function selects_() {
    var a = $(".select");
    0 < a.length && a.each(function() {
        var a = $(this).data("dd-class") ? $(this).data("dd-class") : "";
        $(this).select2({
            theme: "flat",
            dropdownCssClass: a
        })
    });
    var b = $(".select-flat");
    0 < b.length && b.each(function() {
        var a = $(this).data("dd-class") ? $(this).data("dd-class") : "";
        $(this).select2({
            theme: "flat",
            dropdownCssClass: a
        })
    });
    var c = $(".select-bordered");
    0 < c.length && c.each(function() {
        var a = $(this).data("dd-class") ? $(this).data("dd-class") : "";
        $(this).select2({
            theme: "flat bordered",
            dropdownCssClass: a
        })
    })
}

function data_percent_() {
    var a = $("[data-percent]");
    0 < a.length && a.each(function() {
        var a = $(this),
            b = a.data("percent");
        a.css("width", b + "%")
    })
}

function input_file_() {
    var a = $(".input-file");
    0 < a.length && a.each(function() {
        var a = $(this),
            b = $(this).next(),
            c = b.text();
        a.on("change", function() {
            var d = a.val();
            b.html(d), b.is(":empty") && b.html(c)
        })
    })
}

function image_popop_() {
    var a = $(".image-popup");
    0 < a.length && a.magnificPopup({
        type: "image",
        preloader: !0,
        removalDelay: 400,
        mainClass: "mfp-fade"
    })
}

function datatable_(){
    var a=$(".dt-init");
    0<a.length&&a.each(function(){
        var a=$(this),
        b=a.data("items")?a.data("items"):5;
        a.DataTable({
            ordering:!1,
            autoWidth:!1,
            dom:"<t><\"row align-items-center\"<\"col-sm-6 text-left\"p><\"col-sm-6 text-sm-right\"i>>",
            pageLength:b,
            pagingType:"simple",
            bPaginate:$(".data-table tbody tr").length>b,
            iDisplayLength:b,
            language:{
                search:"",
                searchPlaceholder:"Buscar",
                info:"_START_ - _END_ de _TOTAL_",
                infoEmpty:"No records",
                infoFiltered:"( Total _MAX_  )",
                zeroRecords: "Ninguna coincidencia encontrada",
                paginate:{
                    first:"Primera",
                    last:"Ultima",
                    next:"Siguiente",
                    previous:"Anterior"
                }
            }
        })
    });
    var b=$(".dt-filter-init");
    0<b.length && b.each(function(){
        var a=$(this),
        b=a.data("items")?a.data("items"):6,
        c=a.DataTable({
            ordering:!1,
            autoWidth:!1,
            dom:"<\"row justify-content-between pdb-1x\"<\"col-9 col-sm-6 text-left\"f><\"col-3 text-right\"<\"data-table-filter relative d-inline-block\">>><t><\"row align-items-center\"<\"col-sm-6 text-left\"p><\"col-sm-6 text-sm-right\"i>>",
            pageLength:b,
            pagingType:"simple",
            bPaginate:$(".data-table tbody tr").length>b,
            iDisplayLength:b,
            language:{
                search:"",
                searchPlaceholder:"Buscar",
                info:"_START_ - _END_ de _TOTAL_",
                infoEmpty:"No records",
                zeroRecords: "Ninguna coincidencia encontrada",
                infoFiltered:"( Total _MAX_  )",
                paginate:{
                    first:"Primera",
                    last:"Ultima",
                    next:"Siguiente",
                    previous:"Anterior"
                }
            }
        }),
        d=$(".data-filter");
        d.on("change",function(){
            var a=$(this).attr("name")&&"filter"!=$(this).attr("name")?$(this).attr("name"):"filter-data",
            b=$(this).val();
            console.log(a,b),
            c.columns("."+a).search(b?b:"",!0,!1).draw()
        })
    })
}

function drop_toggle_() {
    var a = $(".drop-toggle");
    0 < a.length && a.on("click", function(a) {
        991 > winwidth() && ($(this).parent().children(".navbar-dropdown").slideToggle(400), $(this).parent().siblings().children(".navbar-dropdown").slideUp(400), $(this).parent().toggleClass("current"), $(this).parent().siblings().removeClass("current"), a.preventDefault())
    })
}

function form_validate_() {
    var a = $(".form-validate");
    0 < a.length && a.each(function() {
        var a = $(this);
        a.validate()
    })
}

(function(a) {
    'use strict';
    var b = $("body"),
        c = $(document);
    "ontouchstart" in document.documentElement || b.addClass("no-touch"), toggle_section_modal_(),stick_nav_(), data_percent_(), countdown_(), selects_(), toggle_content_(), toggle_tigger_(), toggle_nav_(), tooltip_(), date_time_picker_(), switch_toggle_(), input_file_(), image_popop_(), datatable_(), modal_fix(), drop_toggle_(), form_validate_(),borrar_actividad(),borrar_todas_actividades();var d=new ClipboardJS(".copy-clipboard");d.on("success",function(a){feedback(a.trigger,"success"),a.clearSelection()}).on("error",function(a){feedback(a.trigger,"fail")});

    var e = window.location.href,
        f = a(".navbar a");
    0 < f.length && f.each(function() {
        e === this.href && $(this).closest("li").addClass("active").parent().closest("li").addClass("active")
    });
    var g = $(".page-overlay");
    a.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $("meta[name=\"csrf-token\"]").attr("content")
        }
    }), $(document).ajaxStart(function() {
        g.addClass("is-loading")
    }), a(document).ajaxStop(function() {
        g.removeClass("is-loading")
    });
    var h = $("#ajax-modal"),
        i = $(".close-modal"),
        j = $(".modal-backdrop");
    i.on("click", function(b) {
        b.preventDefault(), $(this).parents(".modal").modal("hide"), j.remove()
    })
})(jQuery);

//import particlesJS from 'particlesjs';
var NioApp = (function (jQ, win, doc){
    "use strict";
    var NioApp = {AppInfo: {name: "Xeler.io", package: "1.6.0", version: "1.0.2", author: "Calimba"} },
        components = {docReady: [], docReadyDefer: [], winLoad: [], winLoadDefer: []};

    jQ(doc).ready(docReady);
    jQ(win).on("load", winLoad);

    function docReady(stmt){
        stmt = (typeof stmt === typeof undefined) ? jQ : stmt;
        components.docReady.concat(components.docReadyDefer).forEach(function(component){ component(stmt); });
    }

    function winLoad(stmt){
        stmt = (typeof stmt === "object") ? jQ : stmt;
        components.winLoad.concat(components.winLoadDefer).forEach(function(component){ component(stmt); });
    }

    NioApp.components   = components;
    NioApp.docReady 	= docReady;
    NioApp.winLoad    	= winLoad;

    return NioApp;
}(jQuery, window, document));


/* var x = a("a.user-wallet");
    x.on("click", function(c) {
        c.preventDefault(), 5 < user_wallet_address.length && a.post(user_wallet_address, {
            _token: csrf_token
        }).done(a => {
            cl(a), b.html(a), init_inside_modal(), 0 < b.children(".modal").length && b.children(".modal").modal("show")
        }).fail(function(a, b, c) {
            show_toast("error", "Something is wrong!\n" + c), _log(a, b, c)
        })
    }); */

NioApp = function (NioApp, $, window, document) {
    "use strict";
	// Defined Variables
    var $win		= $(window),
		$doc		= $(document),
        $body		= $('body'),
        $body_m = $('body'),
        $header		= $('.header-main');
    //var $win = $(window), $doc = $(document), $body_m = $('body'), $navbar = $('.navbar'), $num = $navbar.height();

	var _navBreak	= 992,
		_mobBreak	= 768,
		_mobMenu	= 'menu-mobile',
		_has_fixed	= 'has-fixed',
		_is_shrink	= 'is-shrink',
        _currentURL	= window.location.href,
        _headerHT	= ($header.innerHeight() - 2),
        _splitURL	= _currentURL.split("#");

	// is exists @v1.0
	$.fn.exists = function () {
        return this.length > 0;
    };

	// Return Check @v1.0
	NioApp.Win = {};
	NioApp.Win.height = $(window).height();
	NioApp.Win.width = $(window).width();

	// getStatus @v1.0
	NioApp.getStatus = {};
	NioApp.getStatus.isRTL = ($body.hasClass('has-rtl') || $body.attr('dir') === 'rtl') ? true : false;
	NioApp.getStatus.isTouch = (("ontouchstart" in document.documentElement)) ? true : false;
	NioApp.getStatus.isMobile = (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i)) ? true : false;
	NioApp.getStatus.asMobile = (NioApp.Win.width < _mobBreak) ? true : false;

	// Update on Resize
	$win.on('resize',function(){
		NioApp.Win.height = $(window).height();
		NioApp.Win.width = $(window).width();
		NioApp.getStatus.asMobile = (NioApp.Win.width < _mobBreak) ? true : false;
	});

	//// Utilities ////
	///////////////////
	NioApp.Util = {};
	// ClassInit !Util @v1.0
	NioApp.Util.classInit = function() {
		var hastouch = function () {
				if (NioApp.getStatus.isTouch===true) {
					$body.addClass("has-touch");
				} else {
					$body.addClass("no-touch");
				}
			},
			mobileview = function () {
				if (NioApp.getStatus.asMobile===true) {
					$body.addClass('as-mobile');
				} else {
					$body.removeClass('as-mobile');
				}
			},
            hasrtl = function () {
                if($body.attr('dir') === 'rtl') {
                    $body.addClass('has-rtl');
                    NioApp.getStatus.isRTL = true;
                }
            };
		hastouch(); mobileview(); hasrtl();
		$(window).on('resize', mobileview);
	};
    NioApp.components.docReady.push(NioApp.Util.classInit);

	// BackTop !Util @v1.0
	NioApp.Util.backTop = function () {
		var $backtop = $('.backtop');

        if ($backtop.exists()) {
              var scrollOffsetFromTop = 800;
              if ($win.scrollTop() > scrollOffsetFromTop) {
                  $backtop.fadeIn("slow");
              } else {
                  $backtop.fadeOut("slow");
              }

              $backtop.on("click", function (e) {
                  $('body,html').stop().animate({
                      scrollTop: 0
                  }, 1500, 'easeInOutExpo');
                  e.preventDefault();
              });
          }
    };
	NioApp.components.docReady.push(NioApp.Util.backTop);

    // Browser Check !Util @v1.0
    NioApp.Util.browser = function() {
        var isChrome = (navigator.userAgent.indexOf("Chrome") !== -1) ? 1 : 0,
        isFirefox = (navigator.userAgent.indexOf("Firefox") !== -1) ? 1 : 0,
        isSafari = (navigator.userAgent.indexOf("Safari") !== -1) ? true : false,
        isIE = ((navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode)) ? 1 : 0,
        isEdge = !isIE && !!window.StyleMedia,
        isOpera = (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) ? 1 : 0;

        if(isChrome) {
            $body.addClass('chrome');
        } else if (isFirefox){
            $body.addClass('firefox');
        } else if (isIE){
            $body.addClass('ie');
        } else if (isEdge){
            $body.addClass('edge');
        } else if (isOpera){
            $body.addClass('opera');
        } else if (isSafari){
            $body.addClass('safari');
        }
    };
	NioApp.components.winLoad.push(NioApp.Util.browser);

	// HeaderSticky !Util @v1.0
	NioApp.Util.headerSticky = function () {
		var $is_sticky = $('.is-sticky');

        var stickyInit = {};

        stickyInit.hasFixed = function () {
            if ($is_sticky.exists() ) {
                var navm = $is_sticky.offset();
                $win.on('scroll', function(){
                    var _top = $win.scrollTop();
                    if(_top > navm.top){
                        if(!$is_sticky.hasClass(_has_fixed)) {
                            $is_sticky.addClass(_has_fixed);
                        }
                    } else {
                        if($is_sticky.hasClass(_has_fixed)) {
                            $is_sticky.removeClass(_has_fixed);
                        }
                    }
                });
            }
        };
        stickyInit.hasShrink = function () {
            if($is_sticky.hasClass(_is_shrink)) {
                _headerHT = ($header.height() + 16 - 2);
            }
        };

        stickyInit.hasFixed(); stickyInit.hasShrink();
        $win.on('resize', function() {
            _headerHT = ($is_sticky.hasClass(_is_shrink)) ? ($header.height() + 16 - 2) : ($header.innerHeight() - 2);
        });

	};
	NioApp.components.docReady.push(NioApp.Util.headerSticky);

	// imageBG !Util @v1.0
	NioApp.Util.imageBG = function () {
		var $imagebg = $(".bg-image");

		if($imagebg.exists()) {
			$imagebg.each(function(){
				var $this = $(this), $that = $this.parent(), overlay = $this.data('overlay'), opacity = $this.data('opacity'), image = $this.children('img').attr('src');
				var overlay_type = (typeof overlay!=='undefined' && overlay) ? overlay : false;
				var opacity_value = (typeof opacity!=='undefined' && opacity) ? opacity : false;

				// If image found
				if (typeof image!=='undefined' && image !==''){
					if (!$that.hasClass('has-bg-image')) {
						$that.addClass('has-bg-image');
					}
					if ( overlay_type ) {
						if (!$this.hasClass('overlay-'+overlay_type)) {
							$this.addClass('overlay');
							$this.addClass('overlay-'+overlay_type);
						}
					} else {
						if (!$this.hasClass('overlay-fall')) {
							$this.addClass('overlay-fall');
						}
					}
					if ( opacity_value ) {
						$this.addClass('overlay-opacity-'+opacity_value);
					}
					$this.css("background-image", 'url("'+ image +'")').addClass('bg-image-loaded');
				}
			});
		}
	};
	NioApp.components.docReady.push(NioApp.Util.imageBG);

	NioApp.Util.Ovm = function () {
		var $elm_ovm = $('.nk-ovm'), $elm_ovm_mask = $('.nk-ovm[class*=mask]');
		if($elm_ovm.exists()) {
			$elm_ovm.each(function(){
				if (!$(this).parent().hasClass('has-ovm')) { $(this).parent().addClass('has-ovm');}
			});
		}
        if($elm_ovm_mask.exists()) {
			$elm_ovm_mask.each(function(){
				if (!$(this).parent().hasClass('has-mask')) { $(this).parent().addClass('has-mask');}
			});
		}
	};

	NioApp.components.docReady.push(NioApp.Util.Ovm);

	// progressBar @v1.1
    NioApp.Util.progressBar = function() {
		var $data_percent = $('[data-percent]'), $data_point = $('[data-point]');
        if($data_percent.exists()){
            $data_percent.each(function() {
                $(this).css('width', $(this).data('percent') + '%');
            });
        }
        // @since v1.6
        if($data_point.exists()){
            $data_point.each(function() {
                $(this).css('left', $(this).data('point') + '%');
            });
        }
        if($data_point.exists() && NioApp.getStatus.isRTL === true){
            $data_point.each(function() {
                $(this).css('right', $(this).data('point') + '%');
                $(this).css('left', 'auto');
            });
        }
	};
	NioApp.components.docReady.push(NioApp.Util.progressBar);

    // inputAnimation @v1.0
    NioApp.Util.inputAnimate = function(){
		var $inputline = $('.input-line');

        if ($inputline.exists()) {
            $inputline.each(function(){
                var $self = $(this), selfval = $self.val(), inputCls = 'input-focused';

                if(selfval) {
                    $self.parent().addClass(inputCls);
                }
                $self.on('focus', function(){
                    $(this).parent().addClass(inputCls);
                });
                $self.on('blur', function(){
                    $(this).parent().removeClass(inputCls);
                    var afterblur = $(this).val();
                    if(afterblur) {
                        $(this).parent().addClass(inputCls);
                    }
                });

            });
        }
    };
	NioApp.components.docReady.push(NioApp.Util.inputAnimate);

    // Dropdown @v1.0
    NioApp.Util.toggler = function(){
		var _trigger = '.toggle-tigger', _toggle = '.toggle-class';

        if ($(_trigger).exists()) {
            $doc.on('click', _trigger, function(e){
                var $self = $(this);
                $(_trigger).not($self).removeClass('active');
                $(_toggle).not($self.parent().children()).removeClass('active');
                $self.toggleClass('active').parent().find(_toggle).toggleClass('active');
                e.preventDefault();
            });
        }

        $doc.on('click', 'body', function(e){
        var $elm_tig = $(_trigger), $elm_tog = $(_toggle);
            if (!$elm_tog.is(e.target) && $elm_tog.has(e.target).length===0 &&
                !$elm_tig.is(e.target) && $elm_tig.has(e.target).length===0) {
                    $elm_tog.removeClass('active');
                    $elm_tig.removeClass('active');
            }
        });
    };
	NioApp.components.docReady.push(NioApp.Util.toggler);

	// accordionActive @v1.0
    NioApp.Util.accordionActive = function() {
        var $accordion_item = $('.accordion-item'),
            $accordion_title = $('.accordion-title');

        if($accordion_item.exists()){
            $accordion_item.each(function() {
                var $self = $(this), $that = $self.find('.accordion-title');
                if(!$that.hasClass('collapsed')){
                    $self.addClass('current');
                } else {
                     $self.removeClass('current');
                }
            });
        }

        if($accordion_title.exists()){
            $accordion_title.on('click',function() {
                var $self = $(this);
                $self.parent().siblings().removeClass('current');
                $self.parent().addClass('current');
            });
        }
	};
	NioApp.components.docReady.push(NioApp.Util.accordionActive);

	// scrollAnimation !Util @v1.0
    NioApp.Util.scrollAnimation = function () {
		var $animated = $('.animated');

        if($().waypoint && $animated.exists()){
			$animated.each(function(){
				var aniWay = $(this), typ = aniWay.data("animate"), dur = aniWay.data("duration"), dly = aniWay.data("delay");
				aniWay.waypoint(function(){
					aniWay.addClass("animated "+typ).css("visibility", "visible");
					if(dur){
						aniWay.css('animation-duration', dur+'s');
					}
					if(dly){
						aniWay.css('animation-delay', dly+'s');
					}
				}, { offset: '95%' });
			});
        }
    };
	NioApp.components.winLoad.push(NioApp.Util.scrollAnimation);

	// Mainmenu/Nav @v1.0
	NioApp.MainMenu = function() {
		var $navbar_toggle       = $('.navbar-toggle'),
			$main_navbar         = $('.header-navbar'),
			$main_navbar_classic = $('.header-navbar-classic'),
			$menu_toggle         = $('.menu-toggle'),
			$menu_link           = $('.menu-link'),
			_main_menu           = '.header-menu',
			_menu_drop           = '.menu-drop',
			_open_nav            = 'open-nav',
			_nav_overlay         = '.header-navbar-overlay',
			_open_menu           = 'menu-shown';

		var MenuInit = {};

		// navToggle @v1.0
		MenuInit.Overlay = function () {
			if($main_navbar.exists() ){
                $main_navbar.append('<div class="header-navbar-overlay"></div>');
            }
        };
		MenuInit.navToggle = function () {
			if($navbar_toggle.exists() ){
				$navbar_toggle.on('click', function(e){
                    var $self = $(this), _self_toggle = ($self.data('menu-toggle'));
                        $self.toggleClass('active');
                    if($main_navbar_classic.exists()) {
                       $('#' + _self_toggle).slideToggle().toggleClass(_open_menu);
                    }else{
                       $('#' + _self_toggle).parent().toggleClass(_open_menu);
                    }
					e.preventDefault();
				});
			}
		};
		// navClose @v1.0
		MenuInit.navClose = function () {
            $(_nav_overlay).on('click', function(){
                $navbar_toggle.removeClass('active');
                $main_navbar.removeClass(_open_menu);
            });
			$doc.on('click', 'body', function(e){
				if (!$menu_toggle.is(e.target) && $menu_toggle.has(e.target).length===0 && !$header.is(e.target) && $header.has(e.target).length===0 && $win.width() < _navBreak)  {
					$navbar_toggle.removeClass('active');
					$main_navbar_classic.find(_main_menu).slideUp();
                    $main_navbar.removeClass(_open_menu);
				}
			});
		};

		// menuToggle @v1.0
		MenuInit.menuToggle = function () {
			if ($menu_toggle.exists()) {
				$menu_toggle.on("click",function(e){
					var $parent = $(this).parent();
					if ($win.width() < _navBreak) {
						$parent.children(_menu_drop).slideToggle(400);
						$parent.siblings().children(_menu_drop).slideUp(400);
						$parent.toggleClass(_open_nav);
						$parent.siblings().removeClass(_open_nav);
					}
					e.preventDefault();
				});
			}
		};
		// mobileNav @v1.0
		MenuInit.mobileNav = function() {
			if($win.width() < _navBreak){
				$main_navbar.delay(500).addClass(_mobMenu);
			}else{
				$main_navbar.delay(500).removeClass(_mobMenu);
				$main_navbar.removeClass(_open_menu);
			}
		};
		// currentPage @v1.0
		MenuInit.currentPage = function() {
			if ($menu_link.exists()) {
				$menu_link.each(function() {
					if (_currentURL === (this.href) && (_splitURL[1]!=="")) {
						$(this).closest("li").addClass("active").parent().closest("li").addClass("active");
					}
				});
			}
		};
		// Initialing
		MenuInit.Overlay(); MenuInit.navToggle(); MenuInit.navClose();
        MenuInit.menuToggle(); MenuInit.mobileNav(); MenuInit.currentPage();
        $win.on('resize', function(){
            MenuInit.mobileNav();
        });
	};
	NioApp.components.docReady.push(NioApp.MainMenu);


    // OnePageScroll @v1.0
    NioApp.OnePageScroll = function() {
        var _scroll_tigger = '.menu-link';
        $('a'+ _scroll_tigger +'[href*="#"]:not([href="#"])').on("click", function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var toHash = this.hash, toHashN = (this.hash.slice(1)) ? $('[name=' + this.hash.slice(1) + ']') : false;
                var $toHash = toHash.length ? $(toHash) : toHashN;
                if ($toHash.length) {
                    $('.navbar-toggle').removeClass('active');
                    $('.header-navbar').removeClass('menu-shown');
                    $('html, body').delay(150).animate({
                        scrollTop: ($toHash.offset().top - _headerHT)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });
    };
	NioApp.components.docReady.push(NioApp.OnePageScroll);

    //scrollAct @v1.0
    NioApp.scrollAct = function() {
        $body.scrollspy({
            target: '#header-menu',
            offset: (_headerHT + 2),
        });
    };
	NioApp.components.docReady.push(NioApp.scrollAct);

	//// Plugins ////
	/////////////////
	NioApp.Plugins = {};

	// Count Down !Plugin @v1.0
	NioApp.Plugins.countdown = function () {
		var $count = $('.countdown');
        if ($count.exists()) {
            $count.each(function() {
                var $self = $(this), datetime = $self.attr("data-date");
                var _day_text = ($self.data('day-text')) ? $self.data('day-text') : 'Days';
                var _hour_text = ($self.data('hour-text')) ? $self.data('hour-text') : 'Hours';
                var _min_text = ($self.data('min-text')) ? $self.data('min-text') : 'Min';
                var _sec_text = ($self.data('sec-text')) ? $self.data('sec-text') : 'Sec';
                $self.countdown(datetime).on('update.countdown', function(event) {
                    $(this).html(event.strftime('<div class="countdown-item"><span class="countdown-time countdown-time-first">%D</span><span class="countdown-text">' + _day_text + '</span></div>' + '<div class="countdown-item"><span class="countdown-time">%H</span><span class="countdown-text">' + _hour_text + '</span></div>' + '<div class="countdown-item"><span class="countdown-time">%M</span><span class="countdown-text">' + _min_text + '</span></div>' + '<div class="countdown-item"><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">' + _sec_text + '</span></div>'));
                });
            });
        }
    };
	NioApp.components.docReady.push(NioApp.Plugins.countdown);

    // Carousel !Plugin @v1.1
    NioApp.Plugins.carousel = function () {
		var $carousel = $('.has-carousel');
		if ($carousel.exists()) {
			$carousel.each(function () {
                var $self = $(this);
                var cim = ($self.data('items')) ? $self.data('items') : 4;
                var cim_t_l = ($self.data('items-tab-l')) ? $self.data('items-tab-l') : (cim > 3 ? (cim - 1) : cim);
                var cim_t_p = ($self.data('items-tab-p')) ? $self.data('items-tab-p') : (cim_t_l > 2 ? (cim_t_l - 1) : cim_t_l);
                var cim_m = ($self.data('items-mobile')) ? $self.data('items-mobile') : (cim_t_p > 1 ? (cim_t_p - 1) : cim_t_p);
                var cim_xm = ($self.data('items-mobile-s')) ? $self.data('items-mobile-s') : cim_m;
                var c_timeout =($self.data('timeout')) ? $self.data('timeout') : 6000;
                var c_auto =($self.data('auto')) ? $self.data('auto') : false;
                var c_loop =($self.data('loop')) ? $self.data('loop') : false;
                var c_dots = ($self.data('dots')) ? $self.data('dots') : false;
                var c_navs = ($self.data('navs')) ? $self.data('navs') : false;
                var c_ctr = ($self.data('center')) ? $self.data('center') : false;
                var c_mgn = ($self.data('margin')) ? $self.data('margin') : 30;
                if(cim <= 1){ cim = cim_t_l = cim_t_p = cim_m = 1;}

                $self.addClass('owl-carousel').owlCarousel({
                    navText: ["<em class='ti ti-angle-left'></em>","<em class='ti ti-angle-right'></em>"],
                    items: cim,
                    loop: c_loop,
                    nav: c_navs,
                    dots: c_dots,
                    margin: c_mgn,
                    center: c_ctr,
                    autoplay: c_auto,
                    autoplayTimeout: c_timeout,
                    autoplaySpeed: 600,
                    rtl: NioApp.getStatus.isRTL,
                    responsive:{
                        0:{ items:cim_xm },
                        576:{ items:cim_m },
                        768:{ items: cim_t_p },
                        992:{ items: cim_t_l },
                        1200:{ items: cim }
                    },
                    onInitialized: function() {
                        if($().waypoint) { Waypoint.refreshAll(); }
                    }
                });

                if ($self.data('blank')===true) {
                    fixing_blank($self);
                    $win.on('resize', function() {
                        fixing_blank($self);
                    });
                }
			});
        }
        function fixing_blank (_this) {
            var _self = $(_this);
            if(!_self.hasClass('blank-added') && $win.width() > 575) {
                _self.trigger('add.owl.carousel', ['<div class="item-blank"></div>']);
                _self.addClass('blank-added').removeClass('blank-removed');
                _self.trigger('refresh.owl.carousel');
            } else if (!_self.hasClass('blank-removed') && $win.width() < 576 && _self.hasClass('blank-added') ) {
                _self.trigger('remove.owl.carousel', -1);
                _self.addClass('blank-removed').removeClass('blank-added');
                _self.trigger('refresh.owl.carousel');
            }
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.carousel);

	// Select2 !Plugin @v1.0
	NioApp.Plugins.select2 = function () {
		var $select = $(".select");
		if ($select.exists()) {
			$select.each(function(){
				var $self = $(this),
                    _theme = ($self.data('select2-theme')) ? $self.data('select2-theme') : 'bordered',
                    _place = ($self.data('select2-placehold')) ? $self.data('select2-placehold') : 'Select an option';
				$self.select2({ placeholder: _place, theme: "default select-" + _theme });
			});
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.select2);

    // Validator !Plugin @v1.0
	NioApp.Plugins.validform = function () {
		var $form = $(".form-validate");
        if( !$().validate ) {
            console.log('jQuery Form Validate not Defined.');
            return true;
        }
		if ($form.exists()) {
			$form.each(function(){
                var $self = $(this);
				$self.validate();
                $self.find('.select').on('change', function() { $(this).valid(); });
			});
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.validform);

	// Form Validation !Plugin @v1.0
	NioApp.Plugins.submitform = function () {
		var $form = $('.nk-form-submit');

        if( !$().validate && !$().ajaxSubmit ) {
            console.log('jQuery Form and Form Validate not Defined.');
            return true;
        }

        if ($form.exists()) {
            $form.each(function(){
                var $self = $(this), _result = $self.find('.form-results');
                $self.validate({
                    ignore: [],
                    invalidHandler: function () { _result.slideUp(400); },
                    submitHandler: function(form) {
                    _result.slideUp(400);
                    $(form).ajaxSubmit({
                        target: _result, dataType: 'json',
                        success: function(data) {
                            var type = (data.result==='error') ? 'alert-danger' : 'alert-success';
                            _result.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(data.message).slideDown(400);
                            if (data.result !== 'error') { $(form).clearForm().find('input').removeClass('input-focused'); }
                        }
                    });
                    }
                });
                $self.find('.select').on('change', function() { $(this).valid(); });
            });
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.submitform);

	// Parallax !Plugin @v1.0
	NioApp.Plugins.parallax = function () {
		var $parallax = $("[data-parallax]");

		if ($parallax.exists()) {
			$parallax.each(function(){
				var $self = $(this);
				if ($self.data('parallax')===true){
					$self.addClass('plx-bg');
					$self.parent().addClass('has-plx');
				}
			});
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.parallax);

    // Popup !Plugin @v1.0
	NioApp.Plugins.popup = function () {
		var $content_popup = $('.content-popup'),
			$video_popup     = $('.video-popup'),
			$image_popup     = $('.image-popup');

		var popupInit = {};
		popupInit.content_popup = function () {
			if ($content_popup.exists()) {
				$content_popup.each(function(){
					$(this).magnificPopup({
						type: 'inline',
						preloader: true,
						removalDelay: 400,
						mainClass: 'mfp-fade content-popup'
					});
				});
			}
		};
		popupInit.video_popup = function () {
			if ($video_popup.exists()) {
				$video_popup.each(function(){
					$(this).magnificPopup({
						type: 'iframe',
						removalDelay: 160,
						preloader: true,
						fixedContentPos: false,
						callbacks: {
							beforeOpen: function() {
								this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
								this.st.mainClass = this.st.el.attr('data-effect');
							}
						},
					});
				});
			}
		};
        popupInit.image_popup = function () {
			if ($image_popup.exists()) {
				$image_popup.each(function(){
					$(this).magnificPopup({
						type: 'image',
						mainClass: 'mfp-fade image-popup'
					});
				});
			}
		};
		popupInit.content_popup();
		popupInit.video_popup();
		popupInit.image_popup();
	};
    NioApp.components.docReady.push(NioApp.Plugins.popup);

    /* var $particles_js = $('#particles-js');
	if ($particles_js.length > 0 ) {
		particlesJS('particles-js',
		// Update your personal code.
        {
		"particles": {
			"number": {
				"value": 100,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#00c0fa"
			},
			"shape": {
				"type": "images",
				"opacity": 0.20,
				"stroke": {
					"width": 0,
					"color": "#2b56f5"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "images/xeler_ico1.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.30,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.12,
					"sync": false
				}
			},
			"size": {
				"value": 6,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.08,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#2b56f5",
				"opacity": 0.30,
				"width": 1.3
			},
			"move": {
				"enable": true,
				"speed": 3,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
				"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
			"retina_detect": true
		}
		// Stop here.
      );
	} */

    // particlesJS !Plugin @v1.0
	/* NioApp.Plugins.particles = function () {
        var $particles_bg = $('.particles-bg');
        if ($particles_bg.exists()) {
            $particles_bg.each(function(){
                var $self = $(this), $self_id = $self.attr('id'),
                    _default_color     = ($self.data('default-color')) ? $self.data('default-color') : '#fff',
                    _shape_stroke_color= ($self.data('shape-stroke-color')) ? $self.data('shape-stroke-color') : '#fff',
                    _line_linked_color = ($self.data('line-linked-color')) ? $self.data('line-linked-color') : '#fff';
                particlesJS($self_id, {
                "particles": {
                    "number": {
                        "value": 40,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": _default_color,
                    },
                    "shape": {
                        "type": "circle",
                        "opacity": 0.10,
                        "stroke": {
                            "width": 0,
                            "color": _shape_stroke_color,
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.10,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.12,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 6,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.08,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": _line_linked_color,
                        "opacity": 0.2,
                        "width": 1.3
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                        "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                    "retina_detect": true
                }
                // Stop here.
              );
            });
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.particles); */

    // Scrollify !Plugin @v1.0 @since v1.6
	NioApp.Plugins.scrollify = function () {
        var $fullscreen = $('.mode-fullscreen');
        if ($fullscreen.exists()) {
            $.scrollify({
                section : ".section-full",
                interstitialSection : "",
                scrollSpeed: 1100,
                scrollbars: true,
                updateHash: false,
                touchScroll:true,
                setHeights: true,
                offset : 0,
                afterResize:function() {
                    $.scrollify({
                        setHeights: true
                    })
                },
                before:function() {
                    $('.section-full').removeClass('section-active section-rendered');
                    $.scrollify.current().addClass('section-active');
                    setTimeout(function() {
                        $('.section-full').removeClass('animate-start');
                        $.scrollify.current().addClass('animate-start');
                    }, 900);
                },
                afterRender:function() {
                    $.scrollify.current().addClass('section-active section-rendered');
                    setTimeout(function() {
                        $.scrollify.current().addClass('animate-start');
                    }, 900);
                }
            });
            $('.section-content').css('padding-top', _headerHT / 2);
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.scrollify);


	// activeAnimate !Util @v1.0 @since v1.6
    NioApp.Util.wordSplit = function () {
		var $word_mask = $('.word-split'), $elem_mask = $('.element-wrap'), $animate = $('.animate');

        if($word_mask.exists()){
			$word_mask.each(function(){
				var $self = $(this), _words = $self.text().split(' '), join_words = '', wd_dly = ($self.data('delay') > 0) ? $self.data('delay') : 1;
                $.each(_words, function(i, v) {
                    join_words += '<div class="word-x"><span style="transition-delay: '+wd_dly+'s">'+v+' </span></div>';
                });
                $self.html(join_words);
			});
        }

        if($elem_mask.exists()){
			$elem_mask.each(function(){
				var $self = $(this), _element = $self.html(), el_dly = ($self.data('delay') > 0) ? $self.data('delay') : 1;
                $self.html('<div class="element-x"><span style="transition-delay: '+el_dly+'s">'+_element+' </span></div>');
			});
        }

        if($animate.exists()){
			$animate.each(function(){
				var $self = $(this), self_dly = ($self.data('delay') > 0) ? $self.data('delay') : 1;
                if($self.hasClass('key')){
                    $self.css('animation-delay', ''+self_dly+'s');
                }else{
                    $self.css('transition-delay', ''+self_dly+'s');
                }
			});
        }

    };
	NioApp.components.winLoad.push(NioApp.Util.wordSplit);

	return NioApp;
}(NioApp, jQuery, window, document);