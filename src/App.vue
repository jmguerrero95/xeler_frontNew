<template>
  <div>
    <!--<div class="loader">
      <svg version="1.1" id="Capa_1" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108.4 72.9" style="" xml:space="preserve">
          <path class="st0 OPVNtoBT_0" d="M58.9,55.4l-5.8-4.6h11.5L58.9,55.4L58.9,55.4z M39.1,39.9L56,53.6l-13.6-6C42.3,47.6,39.1,39.9,39.1,39.9z
               M47.7,26.3l3.2,0L44.2,18L47.7,26.3z M38.9,38.9l9.2,0l8.6-12.4L43,14.8l-8,18.9L38.9,38.9L37,34l6.1-17.3l8.3,9.9l-3.8,0
              L38.9,38.9L38.9,38.9z M39,39.4l13.4,11.1l-4.3-11.1C48.1,39.4,39,39.4,39,39.4z M78.6,39.9L62,53.6l13.4-6L78.6,39.9L78.6,39.9z
               M70,26.3l-3.2,0l6.7-8.3L70,26.3L70,26.3z M78.8,38.9l-9.2,0L61,26.5l13.7-11.7l8,18.9L78.8,38.9l2-4.9l-6.1-17.3l-8.3,9.9l3.8,0
              L78.8,38.9L78.8,38.9z M78.2,39.7L65.3,50.5l4.1-10.8C69.5,39.7,78.2,39.7,78.2,39.7z M64.6,50.5l4.4-11l-10.2,11H64.6z M60.5,27.8
              l7.2,10.8L59,48.4l-8.7-9.5l7.1-11.2L60.5,27.8L60.5,27.8z M53.1,50.5l-4.4-11l10.2,11H53.1z"></path>
      </svg>
    </div>-->


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
    opacity: 0.2;
    /*transform: translateX(-30%);*/
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





    .loader {
  z-index: -999;

  color: white;
  font-size: 32px;
  overflow: hidden;
  position: fixed;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#Capa_1{
  width: 80%;
}
.OPVNtoBT_0{
        stroke-dasharray:608 610;
        stroke-dashoffset:609;
        -webkit-animation: color-change-2x 2s linear infinite alternate both;
        animation:OPVNtoBT_draw 7000ms linear 1000ms forwards, color-change-2x 2s linear infinite alternate both;
    }

    .st0{
        fill-rule:evenodd;
        clip-rule:evenodd;
        fill:none;stroke:#2b56f5;
        stroke-width:0.25;
        stroke-miterlimit:10;
    }
    @keyframes OPVNtoBT_draw{100%{stroke-dashoffset:0;}}@keyframes OPVNtoBT_fade{0%{stroke-opacity:1;}96.72131147540983%{stroke-opacity:1;}100%{stroke-opacity:0;}}

        @-webkit-keyframes color-change-2x {
          0% {
            fill:none;stroke:#2b56f5;
          }
          100% {
            fill:none;stroke:#713d94;
          }
        }
        @keyframes color-change-2x {
          0% {
            fill:none;stroke:#2b56f5;
          }
          100% {
            fill:none;stroke:#713d94;
          }
        }
</style>
