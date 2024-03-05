<template>
    <article class="clientes">
        <section class="img-clientes">
            <v-container class="porcima">
                <h2 class="text-h3">CLIENTES</h2>
            </v-container>
        </section>

        <section class="container-clientes">
            <v-container>
                
            </v-container>
        </section>
    </article>
</template>

<script>
    export default {
        name: 'Clientes',
        data() {
            return {
                
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
    height: 300px;
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

</style>