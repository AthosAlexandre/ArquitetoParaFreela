<template>
  <v-footer
    class="footer-root py-6"
    color="grey-darken-4"
  >
    <v-container>
      <!-- 1) alinhe verticalmente com a prop align -->
      <v-row
        align="center"
        justify="space-around"
        no-gutters
      >
        <!-- 2) remova mb-6, adicione justify-center -->
        <v-col
          cols="12"
          md="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <h3 class="subtitle-1 font-weight-medium mb-2">Nossas Redes Sociais</h3>
          <div class="d-flex ga-3 justify-center">
            <v-btn
              v-for="rede in redesSociais"
              :key="rede.icon"
              :icon="rede.icon"
              density="comfortable"
              variant="text"
              :href="rede.link"
              target="_blank"
            />
          </div>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <h3 class="subtitle-1 font-weight-medium mb-1">Endereço</h3>
          <div class="d-flex align-center">
            <v-icon small class="mr-1">mdi-map-marker</v-icon>
            Rua das Flores, 123 – Centro, São Paulo (SP)
          </div>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <h3 class="subtitle-1 font-weight-medium mb-1">Contato</h3>
          <div class="d-flex align-center">
            <v-icon small class="mr-1">mdi-email</v-icon>
            contato@empresa.com.br
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>


<script>
export default {
  name: "Footer",
  data() {
    return {
      redesSociais: [
        { icon: "mdi-facebook", link: "https://www.facebook.com" },
        { icon: "mdi-twitter", link: "https://www.twitter.com" },
        { icon: "mdi-linkedin", link: "https://www.linkedin.com" },
        { icon: "mdi-instagram", link: "https://www.instagram.com" },
      ],
    };
  },
};
</script>

<style scoped>
.footer-root {
  width: 100%;
  padding: 0 24px;
}

/* Ajuste de espaçamento vertical entre colunas somente em telas pequenas */
@media (max-width: 960px) {
  .footer-root .v-col {
    margin-bottom: 24px;
  }
}
</style>
