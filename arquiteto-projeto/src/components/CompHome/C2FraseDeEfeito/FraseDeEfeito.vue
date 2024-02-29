<template>
    <v-container>
        <article class="d-flex align-center flex-column flex-lg-row ">
            <section class="container-texto pa-6">
                <h2 class="text-h5">Dê vida ao seu sonho arquitetônico: Onde inovação encontra beleza.</h2>

                <p>Em cada traço, cada linha, e cada espaço em branco, encontramos a essência da sua visão. Na nossa busca pela excelência arquitetônica, combinamos técnicas inovadoras com uma paixão inabalável pela estética.
                De projetos residenciais a comerciais, transformamos suas ideias em espaços reais e inspiradores.
                Descubra como podemos tornar seus sonhos uma realidade em cada detalhe, cada curva e cada ângulo. Seja bem-vindo à jornada de criação que redefine os limites da arquitetura moderna.</p>
            </section>

            <figure class="d-flex container-img flex-column flex-lg-row justify-center align-center">
                <v-img class="img rounded-lg elevation-10" width="200" src="@/assets/cachorro-com-taca.jpg"></v-img>
                <v-img class="img rounded-lg elevation-10" width="200" src="@/assets/cozinha.jpg"></v-img>
            </figure>
        </article>
    </v-container>
</template>

<script>
export default {
    name: 'FraseDeEfeito',
    data() {
        return {

        }
    },
    components: {

    }
}
</script>

<style scoped>
p {
    margin-top: 15px;
}

.container-texto {
    width: 60%;
}

.container-img {
    width: 40%;

}

.container-img .img {
    margin: 10px;
}

@media (max-width: 600px) {
    .container-texto {
        width: 100%;
    }

    .container-img {
        width: 100%;
    }
}
</style>