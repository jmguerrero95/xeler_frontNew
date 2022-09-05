<template>
    <TopBar></TopBar>
    <div class="fondo">
        <div class="container">
            <div class="row espacio">
                <div class="col-12 car_parte2 parte2_left">
                    <div class="row">
                        <div class="col-12">
                            <h4 class="tit_card">Lista Verificaciones</h4>
                            <br/>
                             
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import TopBar from "@/components/Topbar.vue";
  /* eslint-disable */
export default {
    name: 'KycDetails',
    components:{
        TopBar,
        //VueTyper,
        //Money,
        //Loading
    },
    mounted (){
        $(function() {
          $('[data-toggle="popover"]').popover({
                html: true,
            content: function() {
              return $('#popover-content').html();
            }
          });
        })
    },
    data () {
        return {
          
        }
    },
}
</script>
<style scoped>
    a{
        text-decoration: none;
    }
    .espacio{
        padding-top: 70px;
        padding-bottom: 2%;
    }
    .car_parte2{
        background: white;
        border: 0;
        padding: 2%;
        /*width: 30%;
        margin-right: 3%;*/
    }

</style>