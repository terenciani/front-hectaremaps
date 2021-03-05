<template>
    <v-parallax
        class="home-hero"
        height="100vh"
        src="@/assets/background.jpg"
        style="max-height: 100vh;"
    >
        <v-row align="end" justify="center">
            <v-col class="text-center" cols="12">
                <h1 class="display-4 mb-4 text-shadow font-weight-thin">
                    Hectare Maps
                </h1>
                <h1 class="display-1 text-shadow mb-5">
                    Plataforma de processamento de imagens com drones
                </h1>
                <v-btn
                    x-large
                    color="teal"
                    class="mt-5 white--text text-shadow shadow"
                >
                    Enviar Imagens
                    <v-icon right light>
                        mdi-cloud-upload
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    padding-bottom: 100px;
    width: 100%;
    height: 100%;
}
.text-shadow {
    text-shadow: 1px 0px 9px rgba(0, 0, 0, 0.94);
}
.shadow {
    box-shadow: 1px 0px 9px rgba(0, 0, 0, 0.94);
}
</style>
