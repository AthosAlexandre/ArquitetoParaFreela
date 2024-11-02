<template>
    <article class="clientes">
        <section class="img-clientes">
            <v-container class="porcima">
                <h2 class="text-h3">CLIENTES</h2>
            </v-container>
        </section>

        <section class="container-clientes">
            <v-container class="pa-1">
                
                <v-row >
                    <v-col v-for="(empressa, i) in empresasArray" :key="i" cols="12" md="3" class="d-flex justify-center align-center container-logo-impresa">
                        <v-icon class="tamanhoIcon" :icon="empressa.icon">  
                        </v-icon>
                    </v-col>
                </v-row>

            </v-container>
        </section>
    </article>
</template>

<script>
    export default {
        name: 'Clientes',
        data() {
            return {
                empresasArray:[
                    {
                        id: 1,
                        icon: 'mdi-apple'
                    },
                    {
                        id:2,
                        icon: 'mdi-microsoft'
                    },
                    {
                        id:3,
                        icon: 'mdi-microsoft-xbox'
                    },
                    {
                        id:4,
                        icon: 'mdi-sony-playstation'
                    },
                    {
                        id:5,
                        icon: 'mdi-nintendo-switch'
                    },
                    {
                        id:6,
                        icon: 'mdi-instagram'
                    },
                    {
                        id:7,
                        icon: 'mdi-youtube'
                    },
                    {
                        id:8,
                        icon: 'mdi-facebook'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.img-clientes{
    background-image: url(../../../assets/sala.jpg);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 200px;
    position: relative;
    margin-top: 60px;
    padding: 60px;
}

.img-clientes::before {
    content: '';
    background: rgba(21, 21, 21, 0.63);
    /* Cor cinza com 50% de opacidade */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

.porcima {
    z-index: 2;
    position: relative;
    color: white;
}

.container-logo-impresa{

    border: 1px solid #b4aeae;
    padding: 10px;
    height: 250px;
}

.tamanhoIcon{
    font-size: 80px;
    color: #212020;
}

</style>