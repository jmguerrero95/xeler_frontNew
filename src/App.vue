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
  @font-face {
        font-family: "Roboto";
        src: local("Roboto"),
        url(../fonts/Roboto/Roboto-Regular.ttf) format("truetype");
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"),
        url(../fonts/Roboto/Roboto-Medium.ttf) format("truetype");
        font-style: normal;
        font-weight: 500;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"),
        url(../fonts/Roboto/Roboto-Thin.ttf) format("truetype");
        font-style: normal;
        font-weight: 100;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"),
        url(../fonts/Roboto/Roboto-Light.ttf) format("truetype");
        font-style: normal;
        font-weight: 300;
    }
</style>
