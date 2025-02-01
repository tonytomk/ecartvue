<template>
  <div class="dashboard">
    <header-component></header-component>
    <main-component></main-component>
    <footer-component></footer-component>
  </div>
</template>
<script lang="ts">
import HeaderComponent from './components/Header/HeaderComponent.vue'
import MainComponent from '@/components/Main/MainComponent.vue';
import FooterComponent from '@/components/Footer/FooterComponent.vue';
import { defineComponent } from 'vue';
export default defineComponent ({
name:"App",
components: { HeaderComponent, MainComponent, FooterComponent },
setup()
 {
  console.log("hi");
 }

})
</script>
<style lang="scss">

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
 // color: #2c3e50;
}
* {
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
}
body { 
 // background-image: linear-gradient(to right, #cccc00, #808000);
//  background-repeat: repeat;
//  overflow-y: hidden;
  height: 100%;
  .rupee {
  content: "\20B9";
  }
}
.dashboard {
  height: 100%;
 .header {
    background: linear-gradient(to left bottom, #14e0e7 40%, #048ece 50%);
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    .main-header {
      font-size: 2rem;
      padding: 1.5rem;
    }
  }
}

</style>
