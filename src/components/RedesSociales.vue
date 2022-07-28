<template>
    <div class="caja_sociales">
        <div class="iconos">
            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f"/></a>
            <a href="#" class="margen"><font-awesome-icon icon="fa-brands fa-instagram"/></a>
            <a href="#" class="margen"><font-awesome-icon icon="fa-brands fa-twitter"/></a>
            <a href="#" class="margen"><font-awesome-icon icon="fa-brands fa-telegram-plane"/></a>
        </div>
        <br/>
        <div id="copyright" class="copyright2"><p>© 2022 XelerGo!. All Right Reserved.</p></div>
    </div>
</template>

<script>
export default {
    name: 'RedesSociales',
    components:{
        //VueTyper,
        //Money,
        //Loading
    },
}
</script>
<style scoped>
    a{
        font-size: 13px;
        display: block;
        text-align: center;
        width: 32px;
        line-height: 30px;
        border-radius: 50%;
        color: #758698;
        border: 1px solid #d2dde9;
        float: left;
    }
    .margen{
        margin-left: 1%;
    }
    #copyright{
        font-size: 13px;
        color: #758698;
        margin-top: 7%;
    }
    
</style>