<template>
    <article>
        <section class="img-portfolio" style="padding: 60px;">
            <v-container class="porcima">
                <h2 class="text-h4">Portfolio</h2>
            </v-container>
        </section>
    </article>
</template>

<script>
export default {
    name: 'Portfolio',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.img-portfolio {
    background-image: url(../../../assets/sacada.jpg);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 300px;
    position: relative;
    margin-top: 60px;
}

.img-portfolio::before {
    content: '';
    background: rgba(21, 21, 21, 0.589);
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