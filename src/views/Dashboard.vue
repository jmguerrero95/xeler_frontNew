<template>
    <TopBar></TopBar>
    <MenuDashboard></MenuDashboard>
    <div class="dashboard container-fluid">
        <div class="container">
            <div class="row contenedor">
                <div class="col-8 caja">
                    <div class="row">
                        <div class="col-6">
                            <InputGenerico></InputGenerico>
                            <InputGenerico></InputGenerico>
                            <InputGenerico></InputGenerico>
                            <InputGenerico></InputGenerico>
                            <InputGenerico></InputGenerico>
                            <InputGenerico></InputGenerico>
                        </div>
                        <div class="col-6">
                            <InputGenerico></InputGenerico>
                            <InputGenerico></InputGenerico>
                            <InputGenerico></InputGenerico>
                            <InputGenerico></InputGenerico>
                            <InputGenerico></InputGenerico>
                            <InputGenerico></InputGenerico>
                        </div>
                        
                    </div>  
                </div>
                <div class="col-1">
                    
                </div>
                <div class="col-3 caja">
                    b
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import TopBar from "@/components/Topbar.vue";
    import MenuDashboard from "@/components/MenuDashboard.vue";
    import InputGenerico from "@/components/Input-generico.vue";
  /* eslint-disable */
export default {
    name: 'Dashboard',
    components:{
        TopBar,
        MenuDashboard,
        InputGenerico
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
    .dashboard{
        background: #eef2f8;
        padding-top: 2%;
    }
    .caja{
        background: white;
        border-radius: 5px;

    }
</style>