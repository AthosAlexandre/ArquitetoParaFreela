<template>
  <v-btn
  class="whatsapp-button"
  fab              
  :href="whatsappLink"
  target="_blank"
  elevation="4"
>
    <v-icon>mdi-whatsapp</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'BotaoWhats',
  props: {
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: '',
    },
  },
  computed: {
    whatsappLink() {
      const base = 'https://api.whatsapp.com/send';
      const phoneParam = `phone=${this.phone.replace(/[^0-9]/g, '')}`;
      const textParam = this.message ? `&text=${encodeURIComponent(this.message)}` : '';
      return `${base}?${phoneParam}${textParam}`;
    },
  },
};
</script>


<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 70px !important;        /* largura fixa */
  height: 70px !important;       /* mesma altura */
  min-width: 70px !important;    /* override do Vuetify */
  padding: 0 !important;         /* tira o padding interno */
  border-radius: 50% !important; /* garante o círculo */
  background-color: #25D366 !important;
  color: white !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  font-size: 32px !important;    /* aumenta o ícone */
}
</style>
