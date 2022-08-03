<template>
        <div class="col-lg-7 sup">
            <div class="d-flex align-items-center justify-content-center justify-content-lg-start guttar-15px pdb-1-5x pb-lg-2">
                <div class="copyright-text">© 2022 XelerGo!. All Right Reserved.</div>
            </div>
            <ul class="footer-links align-items-center justify-content-center justify-content-lg-start">
                
                <li><a href="https://xeler.customerly.help/" target="_blank">FAQ </a></li>
                <li><a href="http://104.248.246.251/terms-and-condition" target="_blank">Terminos y Condiciones</a></li>
            </ul>
        </div>
        <div class="col-lg-5 d-none d-lg-block text-center order-lg-last text-lg-right pdb-2x pb-lg-0 sup">
            <div class="iconos">
                <a href="#" class="margen icono"><font-awesome-icon icon="fa-brands fa-facebook-f"/></a>
                <a href="#" class="margen icono"><font-awesome-icon icon="fa-brands fa-instagram"/></a>
                <a href="#" class="margen icono"><font-awesome-icon icon="fa-brands fa-twitter"/></a>
                <a href="#" class="margen icono"><font-awesome-icon icon="fa-brands fa-telegram-plane"/></a>
            </div>
        </div>
        <div class="col-lg-5 d-block d-lg-none text-center order-lg-last text-lg-right pdb-2x pb-lg-0 sup_movil">
            <div class="iconos">
                <a href="#" class="margen icono_movil"><font-awesome-icon icon="fa-brands fa-facebook-f"/></a>
                <a href="#" class="margen icono_movil"><font-awesome-icon icon="fa-brands fa-instagram"/></a>
                <a href="#" class="margen icono_movil"><font-awesome-icon icon="fa-brands fa-twitter"/></a>
                <a href="#" class="margen icono_movil"><font-awesome-icon icon="fa-brands fa-telegram-plane"/></a>
            </div>
        </div>
</template>
<script>
export default {
    name: 'FooterDashboard',
    components:{
        //VueTyper,
        //Money,
        //Loading
    },
}
</script>
<style scoped>
    .sup{
        margin-top: 3.5%;
        margin-bottom: 3.5%;
    }
    .sup_movil{
        margin-bottom: 3.5%;
    }
    ul li, ol li {
        list-style: none;
    }
    .copyright-text {
        font-size: 13px;
        color: #758698;
        margin-left: -8px;
    }
    .footer-links {
        display: flex;
        flex-wrap: wrap;
        margin: 3px -15px;
        margin-left: -54px;
    }
    .footer-links li a {
        color: #758698;
    }
    a:link, a:visited {
        text-decoration: none;
    }
    .footer-links li {
        padding: 2px 15px;
        font-size: 13px;
        color: #758698;
    }


    .margen{
        margin-left: 1%;
    }
    #copyright{
        font-size: 13px;
        color: #758698;
        margin-top: 7%;
    }
    .icono{
        font-size: 13px;
        display: block;
        text-align: center;
        width: 32px;
        line-height: 30px;
        border-radius: 50%;
        color: #758698;
        border: 1px solid #d2dde9;
        float: right;
    }
    .icono_movil{
        font-size: 13px;
        display: inline-block;
        text-align: center;
        width: 32px;
        line-height: 30px;
        border-radius: 50%;
        color: #758698;
        border: 1px solid #d2dde9;
    }
    .icono:hover {
        color: #fff;
        background-color: #758698;
        border-color: #758698;
    }
    .icono_movil:hover {
        color: #fff;
        background-color: #758698;
        border-color: #758698;
    }
</style>