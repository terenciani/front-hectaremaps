<template>
    <v-parallax
        class="home-hero"
        height="100vh"
        :src="heroData.background ? `${host}${heroData.background}` : ''"
        style="max-height: 100vh;"
    >
        <v-row
            :align="$vuetify.breakpoint.xs ? 'center' : 'end'"
            justify="center"
        >
            <v-col class="text-center" cols="12">
                <h1 class="display-3 mb-4 text-shadow font-weight-thin">
                    {{ heroData.title }}
                </h1>
                <h1 class="subtitle-1 text-shadow mb-5">
                    {{ heroData.subtitle }}
                </h1>
                <v-btn
                    x-large
                    color="teal"
                    class="mt-5 white--text text-shadow shadow"
                    to="/admin?servicerequest"
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
import config from '../../config';

export default {
    name: 'HomeHero',
    data: () => ({
        host: config.apiHost + '/assets/'
    }),
    computed: {
        heroData() {
            return this.$store.getters.getHero
                ? this.$store.getters.getHero
                : {};
        }
    }
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
.v-parallax__xs {
    height: 100% !important;
}
</style>
