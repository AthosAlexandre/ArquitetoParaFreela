<template>
  <Inicio />
  <FraseDeEfeito />
</template>

<script>
import Inicio from '@/components/CompHome/C1Inicio/Inicio.vue';
import FraseDeEfeito from '@/components/CompHome/C2FraseDeEfeito/FraseDeEfeito.vue';

export default {
    name: 'Home',
    data() {
        return {};
    },
    components: { 
      Inicio,
      FraseDeEfeito  
    }
}
  
</script>
