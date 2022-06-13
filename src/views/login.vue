<template>
    <div class="row">
        <ImgLogin></ImgLogin>
        <div class="col-5">
            <div class="row">
                <div class=col-3>
                    
                </div>
                <div class="col-6">
                    <img src="@/assets/xeler_go.svg" class="img-fluid logo">
                    <h2 class="cabecera">Iniciar Sesión
                    </h2>
                    <p class="parrafo">con tu cuenta XelerGo!</p>
                    <InputGenerico type="text" placeholder="Email"></InputGenerico>
                    <!--<input class="form-control input_style" type="text" placeholder="Email">-->
                    <br/>
                    <InputGenerico type="password" placeholder="Constraseña"></InputGenerico>
                    <!--<input class="form-control input_style" type="text" placeholder="Constraseña">-->
                    <a href="#">Olvidaste la contraseña?</a>
                    <BotonGenerico texto="Ingresar"></BotonGenerico>
                    <!--<button type="submit" class="btn btn-primary btn-block">Ingresar</button>-->
                    <p class="">No tienes una cuenta? <a href="#">Registrate</a></p>
                </div>
                <div class="col-3">
                    
                </div>
                
            </div>
            
        </div>
    </div>
</template>
<script>
    import ImgLogin from "@/components/Img-login.vue";
    import InputGenerico from "@/components/Input-generico.vue";
    import BotonGenerico from "@/components/Boton-generico";
  /* eslint-disable */
export default {
    name: 'Login',
    components:{
        ImgLogin,
        InputGenerico,
        BotonGenerico,
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
    .row{
        width: 100%;
    }
    .btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
    @media (min-width: 480px){
        .btn {
            padding: 8px 20px;
            font-size: 14px;
        }
    }
    .btn-primary {
        background: #7668fe;
        border-color: #7668fe;
    }
    .btn-block {
        display: block;
        width: 100%;
    }
    .btn {
        position: relative;
        color: #fff;
        font-weight: 500;
        padding: 8px 20px;
        font-size: 13px;
        line-height: 24px;
        letter-spacing: 0.01em;
        border-radius: 4px;
        min-width: 160px;
        border: 1px solid;
        display: inline-block;
        transition: all .4s ease;
    }




    .input_style{
        border-radius: 23px;
        border: 1px solid #d2dde9;
        width: 100%;
        padding: 10px 15px;
        line-height: 20px;
        font-size: .9em;
        color: rgba(73,84,99,0.7);
        transition: all .4s;
    }
    .logo{
        width: 35%;
    }
    .cabecera{
        padding-bottom: 23px;
        font-size: 2.8em;
        font-weight: 300;
        letter-spacing: -0.025em;
        color: #342d6e;
        line-height: 1.2;
    }
    .parrafo{
        display: block;
        font-weight: 400;
        font-size: 130%;
        color: #495463;
        letter-spacing: normal;
        margin-top: 10px;

    }
</style>