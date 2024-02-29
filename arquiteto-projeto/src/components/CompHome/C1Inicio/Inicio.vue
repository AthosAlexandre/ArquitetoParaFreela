<template>
    <div class="img-fundo d-flex flex-column 
 align-center">
        <Navegacao class="porcima"/>
            <v-container class="d-flex flex-column justify-center align-center tamanho-container">
                <div class="porcima">
                    <h1>Bem-vindo ao Arquiteto Projeto</h1>
                </div>
                <div class="porcima">
                    <h4>O melhor lugar para você encontrar o seu projeto</h4>
                </div>
            </v-container>
    </div>
</template>

<script>
import Navegacao from '@/components/navegacao/Navegacao.vue'

export default {
    name: 'Inicio',
    data() {
        return {

        }
    },
    components: {
        Navegacao
    }
}
</script>

<style scoped>
.img-fundo {
    background-image: url('@/assets/casa-luxo.jpeg');
    background-size: cover;
    background-position: center;
    height: 90vh;
    width: 100%;
    position: relative;
}

.img-fundo::before {
    content: '';
    background: rgba(21, 21, 21, 0.733);
    /* Cor cinza com 50% de opacidade */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}
.porcima{
    color: white;
    z-index: 2;
    position: relative;
}
.tamanho-container{
    height: 100%;
}
</style>