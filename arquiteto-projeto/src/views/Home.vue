<template>
  <Inicio />
  <FraseDeEfeito />
  <OqueFazemos />
</template>

<script>
import Inicio from '@/components/CompHome/C1Inicio/Inicio.vue';
import FraseDeEfeito from '@/components/CompHome/C2FraseDeEfeito/FraseDeEfeito.vue';
import OqueFazemos from '@/components/CompHome/C3OqueFazemos/OqueFazemos.vue';

export default {
    name: 'Home',
    data() {
        return {
          
        };
    },
    components: {
    Inicio,
    FraseDeEfeito,
    OqueFazemos
}
}
  
</script>
