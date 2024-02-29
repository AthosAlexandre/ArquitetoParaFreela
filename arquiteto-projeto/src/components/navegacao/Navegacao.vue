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

        
            <v-app-bar-nav-icon class="bota-aparecer" @click="isAbrir = !isAbrir"></v-app-bar-nav-icon>
        

        <v-navigation-drawer v-model="isAbrir" location="right" >
            <v-app-bar-nav-icon location="top center" class="bota-aparecer" @click="isAbrir = !isAbrir"></v-app-bar-nav-icon>
            <v-list>
                <v-list-item title="HOME"></v-list-item>
                <v-list-item title="BLOG"></v-list-item>
                <v-list-item title="CONTATO"></v-list-item>
            </v-list>
        </v-navigation-drawer>

    </v-container>
</template>

<script>
export default {
    name: 'Navegacao',
    data() {
        return {
            isAbrir: false
        }
    },
}
</script>

<style scoped>
.bg {
    background: rgba(21, 21, 21, 0);
    color: white;
}

.bota-aparecer{
    display: none;
}

@media screen and (max-width: 600px){
    .bota-aparecer{
        display: block;
    }
    .container-navegacao{
        display: none;
    }
    
}
</style>