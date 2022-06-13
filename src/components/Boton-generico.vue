<template>
	<button type="submit" class="btn btn-primary btn-block">{{texto}}</button>
</template>

<script>
	export default {
	props:["texto"],
    name: 'BotonGenerico',
    components:{
        //VueTyper,
        //Money,
        //Loading
    },
}
	
</script>
<style scoped>
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
</style>