<template>
	<input class="form-control input_style">
</template>

<script>
export default {
    name: 'InputGenerico',
    components:{
        //VueTyper,
        //Money,
        //Loading
    },
}
</script>
<style scoped>
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
</style>