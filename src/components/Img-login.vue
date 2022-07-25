<template>
    <div class="col-7 fondo">
        <div class="centrado">
            <img src="@/assets/xeler_login.png" class="img_login">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImgLogin',
    components:{
        //VueTyper,
        //Money,
        //Loading
    },
}
</script>
<style scoped>
    .img_login{
        width: 70%;
        display: block;
    }
    .fondo{
        background-image: linear-gradient(to right, #7a0fff 0%, #46bdf4 100%);
        background-size: cover;
        background-position: 50% 50%;
        min-height: 100vh
    }
    .centrado{
        display: flex !important;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>