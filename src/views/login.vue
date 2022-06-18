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
                    <br/>
                    <!--<input class="form-control input_style" type="text" placeholder="Constraseña">-->
                    <router-link to="/reset"><a href="#" class="olvido">Olvidaste la contraseña?</a></router-link>
                    <router-link to="/dashboard"><BotonGenerico texto="Ingresar" class="boton"></BotonGenerico></router-link>
                    <!--<button type="submit" class="btn btn-primary btn-block">Ingresar</button>-->
                    <p class="">No tienes una cuenta? <router-link to="/register"><a href="#">Registrate</a></router-link></p>
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
        margin-top: 43%;
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