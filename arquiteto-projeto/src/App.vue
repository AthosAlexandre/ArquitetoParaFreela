<template>
  <v-app>
    <Navegacao class="porcima" />
    <router-view />
    <Footer/>
  </v-app>
</template>

<script >
import Navegacao from './components/navegacao/Navegacao.vue';
import Footer from './layouts/default/Footer.vue';

export default {
  name: 'App',
  components: { Navegacao, Footer }
}
  //
</script>

<style scoped>
  
</style>
