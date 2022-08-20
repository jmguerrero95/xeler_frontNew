<template>
    <div class="fondo">
        <div class="container">
            <div class="row espacio">
                <div class="col-12 car_parte2 parte2_left">
                    <div class="row">
                        <div class="col-12">
                            <h4 class="tit_card">Contabilidad</h4>
                            <div class="row">
                                <div class="col-12 col-md-9">
                                    <br/>
                                    <p>Otras Cuentas</p>
                                    <select class="form-select" aria-label="Default select example">
                                      <option selected>Seleccione</option>
                                      <option value="1">Cuenta 1</option>
                                      <option value="2">Cuenta 2</option>
                                      <option value="3">Cuenta 3</option>
                                      <option value="4">Cuenta 4</option>
                                      <option value="5">Cuenta 5</option>
                                      <option value="6">Cuenta 6</option>
                                      <option value="7">Cuenta 7</option>
                                      <option value="8">Cuenta 8</option>
                                      <option value="9">Cuenta 9</option>
                                      <option value="10">Cuenta 10</option>
                                    </select>
                                    <div class="row fechas">
                                        <div class="col-md-6 col-12">
                                            <p>Fecha desde</p>
                                            <InputGenerico type="text" placeholder="Fecha 1"></InputGenerico>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <p>Fecha hasta</p>
                                            <InputGenerico type="text" placeholder="Fecha 2"></InputGenerico>
                                        </div>
                                        <div class="col-2 fechas">
                                            <BotonGenerico texto="Buscar" class="boton"></BotonGenerico>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import InputGenerico from "@/components/Input-generico.vue";
    import BotonGenerico from "@/components/Boton-generico";
  /* eslint-disable */
export default {
    name: 'ManejoCuentas',
    components:{
        InputGenerico,
        BotonGenerico,
        //VueTyper,
        //Money,
        //Loading
    },
    data () {
        return {
          
        }
    },
}
</script>
<style scoped>
    .fechas{
        margin-top: 5%;
    }
    .final{
        margin-top: 3%;
    }
    .espacio{
        padding-top: 70px;
        padding-bottom: 2%;
    }
    .parte2_right{
        margin-top: 3%;
        width: 56.83333333%;
        margin-left: 1.5%;
    }
    
    .tit_card{
        color: #342d6e;
        font-size: 1.15em;
        font-weight: 500;
        margin: 0;
    }
    .precio{
        font-size: 24px;
        line-height: 1;
        color: #495463;
        font-weight: 500;
    }
    .cripto{
        font-size: 19px;
        display: inline-block;
        margin-right: 3px;
        font-weight: 700;
    }
    small{
        font-size: 80%;
        font-weight: 400;
    }
    .fondo{
        background: #eef2f8;
    }
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

</style>