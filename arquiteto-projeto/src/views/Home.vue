<template>
  <Inicio />
  <FraseDeEfeito />
  <OqueFazemos />
  <Portfolio />
  <Clientes/>
  <CrescerSucesso />
  <Premios/>
  <BotaoWhats 
    phone="+552196522-1613"
    message="Olá! Gostaria de mais informações."
  />
</template>

<script>
import BotaoWhats from '@/components/CompHome/BotaoWhatsApp/BotaoWhats.vue';
import Inicio from '@/components/CompHome/C1Inicio/Inicio.vue';
import FraseDeEfeito from '@/components/CompHome/C2FraseDeEfeito/FraseDeEfeito.vue';
import OqueFazemos from '@/components/CompHome/C3OqueFazemos/OqueFazemos.vue';
import Portfolio from '@/components/CompHome/C4Portfolio/Portfolio.vue';
import Clientes from '@/components/CompHome/C5Clientes/Clientes.vue';
import CrescerSucesso from '@/components/CompHome/C6CrescerSucesso/CrescerSucesso.vue';
import Premios from '@/components/CompHome/C7Premios/Premios.vue';

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
    Portfolio,
    Clientes,
    BotaoWhats,
    CrescerSucesso,
    Premios,
}
}
  
</script>
