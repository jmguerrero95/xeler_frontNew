<template>
  <div>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
       <component :is="Component" :key="$route.path"></component>
     </transition> 
  </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
  .slide-enter-active,
  .slide-leave-active{
    transition: opacity 1s, transform 1s;
  }

  .slide-enter-from,
  .slide-leave-to{
    opacity: 0;
    transform: translateX(-30%);
  }

  @font-face {
    font-family: "Poppins";
    src: local("Poppins"),
     url(../fonts/Poppins/Poppins-Regular.ttf) format("truetype");
  }
  body{
    font-family: "Poppins" !important;
  }
</style>
