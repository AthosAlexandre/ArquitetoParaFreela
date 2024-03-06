<template>
    <article>
        <section class="img-portfolio">
            <v-container class="porcima">
                <h2 class="text-h3">PORTFOLIO</h2>
            </v-container>
        </section>

        <section class="container-portfolio">
            <v-container class="d-flex justify-space-around flex-column flex-md-row">

                <section class="container-imgs pa-3">
                    <v-row class="d-flex align-center">
                        <v-col v-for="(img, i) in arrayContainerImgs" :key="i" cols="12" :md="img.md">
                            <v-img :src="img.src" class=""></v-img>
                        </v-col>
                    </v-row>
                </section>

                <section class="container-texto-imgs pa-3">
                    <div class="container-texto d-flex flex-column justify-center
                    align-center pa-6">
                        <h2 class="text-h4">Simples & Claro</h2>
                        <p class="mt-4">
                            Nossos projetos são simples e claros, com um toque de modernidade e elegância.
                            Nossos projetos são simples e claros, com um toque de modernidade e elegância.
                            Nossos projetos são simples e claros, com um toque de modernidade e elegância.
                        </p>
                    </div>

                    <div class="container-img mt-6">
                        <v-row class="d-flex align-center">
                            <v-col v-for="(img, i) in arrayTextImgs" :key="i" cols="12" :md="img.md">
                                <v-img :src="img.src" class=""></v-img>
                            </v-col>
                        </v-row>
                    </div>
                </section>
            </v-container>

            <v-expand-transition>
                <v-container>
                    <div v-show="abrirMais">
                        <div class="container-img">
                            <v-row class="d-flex align-center">
                                <v-col v-for="(img, i) in maisImgArray" :key="i" cols="12" :md="img.md">
                                    <v-img :src="img.src" class=""></v-img>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-container>
            </v-expand-transition>

        </section>

        <div class="container-btn d-flex justify-center">
            <v-btn class="bg-grey-darken-2" :text="abrirMais ? 'FECHAR' : 'CARREGAR MAIS'" @click="abrirMais = !abrirMais"></v-btn>
        </div>
    </article>
</template>

<script>
export default {
    name: 'Portfolio',
    data() {
        return {
            abrirMais: false,
            arrayContainerImgs: [
                {
                    id: 1,
                    src: '../../../public/sacada.jpg',
                    md: 4
                },
                {
                    id: 2,
                    src: '../../../public/sacada.jpg',
                    md: 4
                },
                {
                    id: 3,
                    src: '../../../public/sacada.jpg',
                    md: 4
                },
                {
                    id: 4,
                    src: '../../../public/sacada.jpg',
                    md: 6
                },
                {
                    id: 5,
                    src: '../../../public/sacada.jpg',
                    md: 6
                },
                {
                    id: 6,
                    src: '../../../public/sacada.jpg',
                    md: 12
                },
            ],
            arrayTextImgs: [
                {
                    id: 1,
                    src: '../../../public/sacada.jpg',
                    md: 6
                },
                {
                    id: 2,
                    src: '../../../public/sacada.jpg',
                    md: 6
                },
                {
                    id: 3,
                    src: '../../../public/sacada.jpg',
                    md: 4
                },
                {
                    id: 4,
                    src: '../../../public/sacada.jpg',
                    md: 4
                },
                {
                    id: 5,
                    src: '../../../public/sacada.jpg',
                    md: 4
                },
            ],
            maisImgArray: [
                {
                    id: 1,
                    src: '../../../public/sacada.jpg',
                    md: 4
                },
                {
                    id: 2,
                    src: '../../../public/sacada.jpg',
                    md: 4
                },
                {
                    id: 3,
                    src: '../../../public/sacada.jpg',
                    md: 4
                },
                {
                    id: 4,
                    src: '../../../public/sacada.jpg',
                    md: 6
                },
                {
                    id: 5,
                    src: '../../../public/sacada.jpg',
                    md: 6
                },
                {
                    id: 6,
                    src: '../../../public/sacada.jpg',
                    md: 12
                },
            ]
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
    height: 200px;
    position: relative;
    margin-top: 60px;
    padding: 60px;
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

.container-imgs {
    width: 50%;
}

.container-texto-imgs {
    width: 50%;
}

.container-texto {
    height: 350px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.349);
}

@media screen and (max-width: 960px) {
    .container-imgs {
        width: 100%;
    }

    .container-texto-imgs {
        width: 100%;
    }
}
</style>