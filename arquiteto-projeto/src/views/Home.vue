<template>
  <Inicio />
  <FraseDeEfeito />
  <OqueFazemos />
  <Portfolio />
</template>

<script>
import Inicio from '@/components/CompHome/C1Inicio/Inicio.vue';
import FraseDeEfeito from '@/components/CompHome/C2FraseDeEfeito/FraseDeEfeito.vue';
import OqueFazemos from '@/components/CompHome/C3OqueFazemos/OqueFazemos.vue';
import Portfolio from '@/components/CompHome/C4Portfolio/Portfolio.vue';

export default {
    name: 'Home',
    data() {
        return {
          
        };
    },
    components: {
    Inicio,
    FraseDeEfeito,
    OqueFazemos,
    Portfolio
}
}
  
</script>
