<template>
    <div class="row">
        <ImgLogin></ImgLogin>
        <div class="col-5">
            <div class="row">
                <div class=col-3>
                    
                </div>
                <div class="col-6 contenido">
                    <div>
                        <img src="@/assets/xeler_go.svg" class="img-fluid logo">
                    </div>
                    <div>
                        <h2 class="cabecera">Recupera la contraseña</h2>
                        <p class="parrafo">de tu cuenta XelerGo!</p>
                        <InputGenerico type="text" placeholder="Email"></InputGenerico>
                        <!--<input class="form-control input_style" type="text" placeholder="Email">-->
                        <br/>
                        <!--<input class="form-control input_style" type="text" placeholder="Constraseña">-->
                        <router-link to="/login"><a href="#">Volver al login</a></router-link>
                        <BotonGenerico texto="Ingresar" class="boton"></BotonGenerico>
                        <!--<button type="submit" class="btn btn-primary btn-block">Ingresar</button>-->
                        <p class="">No tienes una cuenta? <router-link to="/register"><a href="#">Registrate</a></router-link></p>
                    </div>
                    <div>
                        <RedesSociales></RedesSociales>
                    </div>
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
    import RedesSociales from "@/components/RedesSociales";
  /* eslint-disable */
export default {
    name: 'Reset',
    components:{
        ImgLogin,
        InputGenerico,
        BotonGenerico,
        RedesSociales
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
    .contenido{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .boton{
        margin-top: 8%;
        margin-bottom: 8%;
    }
    .olvido{
        margin-bottom: 5%;
    }
    .row{
        width: 100%;
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
        width: 60%;
        margin-top: 15%;
    }
    .cabecera{
        font-size: 2.8em;
        font-weight: 300;
        letter-spacing: -0.025em;
        color: #342d6e;
        line-height: 1.2;
        /*margin-top: 43%;*/
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