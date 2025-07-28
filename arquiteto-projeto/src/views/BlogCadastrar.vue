<template>
  <div id="blog-cadastrar">
    <v-container>
      <h1 class="subtitulo text-h4">Cadastrar Artigo</h1>

      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- Título -->
        <v-text-field
          v-model="form.titulo"
          label="Título"
          :rules="[v => !!v || 'Título é obrigatório']"
          required
        ></v-text-field>

        <!-- Subtítulo -->
        <v-text-field
          v-model="form.subtitulo"
          label="Subtítulo"
          :rules="[v => !!v || 'Subtítulo é obrigatório']"
          required
        ></v-text-field>

        <!-- Upload de Imagem -->
        <v-file-input
          v-model="form.imagem"
          label="Arquivo de Imagem"
          accept="image/*"
          :rules="[v => !!v || 'Imagem é obrigatória']"
          required
        ></v-file-input>

        <!-- Resumo para exibir no card -->
        <v-textarea
          v-model="form.resumo"
          label="Resumo (exibido no card)"
          auto-grow
          :rules="[v => !!v || 'Resumo é obrigatório']"
          required
        ></v-textarea>

        <!-- Conteúdo completo do artigo -->
        <v-textarea
          v-model="form.conteudo"
          label="Conteúdo do Artigo"
          auto-grow
          rows="10"
          :rules="[v => !!v || 'Conteúdo é obrigatório']"
          required
        ></v-textarea>

        <!-- Botão de envio -->
        <v-btn
          color="orange-lighten-2"
          class="mt-4"
          @click="submit"
          :disabled="!valid"
        >
          Salvar
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'BlogCadastrar',
  data() {
    return {
      valid: false,
      form: {
        titulo: '',
        subtitulo: '',
        imagem: null,
        resumo: '',
        conteudo: ''
      }
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Aqui você pode enviar 'form' para o backend
        // Lembre-se de tratar o upload do arquivo de imagem
        console.log('Dados do artigo:', this.form)
      }
    }
  }
}
</script>

<style scoped>
#blog-cadastrar {
  border-top: 1px solid rgba(0, 0, 0, 0.363);
  padding-top: 20px;
}
.subtitulo {
  text-align: center;
  margin: 15px;
}
</style>
