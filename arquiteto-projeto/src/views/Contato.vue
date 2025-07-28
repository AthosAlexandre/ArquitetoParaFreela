<template>
  <v-main class="contato">
    <v-container>
      <h2 class="subtitulo text-h4">Fale Conosco</h2>
      <form action="https://formspree.io/f/xwpbnyjp" method="POST" @submit.prevent="submit">
        <!-- Campos ocultos do Formspree -->
        <input type="hidden" name="_replyto" :value="email.value.value" />
        <input type="hidden" name="_subject" value="Mensagem de Fale Conosco" />

        <v-text-field
          name="name"
          v-model="name.value.value"
          :counter="10"
          :error-messages="name.errorMessage.value"
          label="Nome"
        />

        <v-text-field
          name="phone"
          v-model="phone.value.value"
          :counter="7"
          :error-messages="phone.errorMessage.value"
          label="Celular"
        />

        <v-text-field
          name="email"
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="E-mail"
        />

        <v-textarea
          name="message"
          v-model="texto.value.value"
          :error-messages="texto.errorMessage.value"
          label="Sua Mensagem"
        />

        <v-btn class="me-4" type="submit">Enviar</v-btn>
        <v-btn @click="handleReset" type="button">Apagar</v-btn>
      </form>
    </v-container>
  </v-main>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'

// Configura vee-validate
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name (value) {
      if (value?.length >= 2) return true
      return 'O nome precisa ter pelo menos 3 caracteres.'
    },
    phone (value) {
      if (/^[0-9-]{7,}$/.test(value)) return true
      return 'O número de telefone precisa ter pelo menos 7 dígitos.'
    },
    email (value) {
      const re = /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]+$/i
      if (re.test(value)) return true
      return 'Deve ser um e-mail válido.'
    },
    texto (value) {
      if (value?.length >= 2) return true
      return 'O texto precisa ter pelo menos 3 caracteres.'
    }
  }
})

const name  = useField('name')
const phone = useField('phone')
const email = useField('email')
const texto = useField('texto')

// URL do seu formulário no Formspree
const FORMSPREE_URL = 'https://formspree.io/f/xwpbnyjp'

const submit = handleSubmit(async (values, { evt }) => {
  try {
    // Cria FormData a partir do <form>
    const formEl = evt.target
    const formData = new FormData(formEl)

    // Adiciona os campos validados
    formData.set('nome',  values.name)
    formData.set('Celular', values.phone)
    formData.set('menssage', values.texto)

    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })

    if (!res.ok) throw new Error('Erro no envio')

    alert('Enviado com sucesso! Obrigado pelo contato.')
    handleReset()
  } catch (err) {
    console.error(err)
    alert('Não foi possível enviar. Tente novamente mais tarde.')
  }
})
</script>

<style scoped>
.contato {
  border-top: 1px solid rgba(0, 0, 0, 0.363);
}
.subtitulo {
  text-align: center;
  margin: 15px;
}
</style>
