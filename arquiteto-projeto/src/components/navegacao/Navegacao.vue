<template>
    <v-container class="d-flex justify-space-between

">
        <div class="container-logo">
            <v-img width="70" src="@/assets/logo.jpg"></v-img>
        </div>

        <div class="container-navegacao">
            <v-list class="bg d-flex ">
                <v-list-item title="HOME"></v-list-item>
                <v-list-item title="BLOG"></v-list-item>
                <v-list-item title="CONTATO"></v-list-item>
            </v-list>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Navegacao',
    data() {
        return {

        }
    },
}
</script>

<style scoped>
.bg {
    background: rgba(21, 21, 21, 0);
    color: white;
}
</style>