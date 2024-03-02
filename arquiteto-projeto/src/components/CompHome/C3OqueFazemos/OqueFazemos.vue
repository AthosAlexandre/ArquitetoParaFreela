<template>
    <article>
        <section class="img-top d-flex" style="padding: 60px;">
            <v-container class="porcima ">
                <h2 class="text-h4">O que nos fazemos</h2>
            </v-container>
        </section>

        <section class="cointainer-cards-oq-fazemos">
            <v-container>
                <v-row class="d-flex justify-center align-center">
                    <v-col v-for="(oqFazemos, i) in arrayOqFazemos" :key="i" cols="auto">
                        <v-card :variant="oqFazemos" class="mx-auto d-flex flex-column justify-center align-center bordeBox dimencao-card" max-width="344">
                            <v-card-item>
                                <div>
                                    <div class="text-overline mb-1 d-flex justify-center">
                                        <v-icon class="iconeMeu" :icon="oqFazemos.icone"></v-icon>
                                    </div>
                                    <div class="text-h6 mb-1 d-flex justify-center text-subtitle-2">
                                        {{ oqFazemos.titulo }}
                                    </div>
                                    <div class="text-caption d-flex justify-center">
                                        {{ oqFazemos.texto }}
                                    </div>
                                </div>
                            </v-card-item>

                            <v-card-actions>
                                <v-btn>
                                    Mais informação
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </article>
</template>

<script>
export default {
    name: 'OqueFazemos',
    data() {
        return {
            arrayOqFazemos: [
                {
                    id: 1,
                    icone: 'mdi-calendar-month-outline',
                    titulo: 'Planejamento',
                    texto: 'Planejamento de projetos de arquitetura e engenharia para residências e empresas'
                },
                {
                    id: 2,
                    icone: 'mdi-lightbulb-outline',
                    titulo: 'Interior',
                    texto: 'Planejamento de projetos de arquitetura e engenharia para residências e empresas'
                },
                {
                    id: 3,
                    icone: 'mdi-camera-outline',
                    titulo: 'Exterior',
                    texto: 'Planejamento de projetos de arquitetura e engenharia para residências e empresas'
                },
                {
                    id: 4,
                    icone: 'mdi-palm-tree',
                    titulo: 'Paisagismo',
                    texto: 'Planejamento de projetos de arquitetura e engenharia para residências e empresas'
                },
                {
                    id: 5,
                    icone: 'mdi-alarm',
                    titulo: 'Decoração',
                    texto: 'Planejamento de projetos de arquitetura e engenharia para residências e empresas'
                },
                {
                    id: 6,
                    icone: 'mdi-pencil-ruler',
                    titulo: 'Design Moderno',
                    texto: 'Planejamento de projetos de arquitetura e engenharia para residências e empresas'
                }
            ]
        };
    },
    components: {
    }
}
</script>

<style scoped>
.img-top {
    background-image: url('@/assets/apartamento-luxo.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 300px;
    position: relative;
}

.img-top::before {
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
.porcima {
    z-index: 2;
    position: relative;
    color: white;
}

.cointainer-cards-oq-fazemos{
    
}

.bordeBox{
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.dimencao-card{
    width: 280px;
    height: 300px;
}

.iconeMeu{
    font-size: 50px;
}
</style>