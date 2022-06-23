<template>
    <div class="row">
        <ImgLogin></ImgLogin>
        <div class="col-5">
            <div class="row">
                <div class=col-3>
                    
                </div>
                <div class="col-6">
                    <img src="@/assets/xeler_go.svg" class="img-fluid logo">
                    <h2 class="cabecera">Registrate
                    </h2>
                    <p class="parrafo">Crea una nueva cuenta en XelerGo!</p>
                    <InputGenerico type="text" placeholder="Usuario"></InputGenerico>
                    <!--<input class="form-control input_style" type="text" placeholder="Email">-->
                    <br/>
                    <InputGenerico type="text" placeholder="Primer Nombre"></InputGenerico>
                    <br/>
                    <InputGenerico type="text" placeholder="Segundo Nombre"></InputGenerico>
                    <br/>
                    <InputGenerico type="text" placeholder="Primer Apellido"></InputGenerico>
                    <br/>
                    <InputGenerico type="text" placeholder="Segundo Apellido"></InputGenerico>
                    <br/>
                    <InputGenerico type="text" placeholder="Celular"></InputGenerico>
                    <br/>
                    <InputGenerico type="text" placeholder="Email"></InputGenerico>
                    <br/>
                    <InputGenerico type="password" placeholder="Constraseña"></InputGenerico>
                    <br/>
                    <InputGenerico type="password" placeholder="Repite la contraseña"></InputGenerico>
                    <br/>

                    <!--<input class="form-control input_style" type="text" placeholder="Constraseña">-->
                    <BotonGenerico texto="Crear cuenta" class="boton"></BotonGenerico>
                    <!--<button type="submit" class="btn btn-primary btn-block">Ingresar</button>-->
                    <p class="">Ya tienes cuenta?<router-link to="/login"><a href="#"> Inicia sesión</a></router-link></p>
                    <br/>
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
    name: 'Register',
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
        margin-top: 10%;
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