<template>
    <v-parallax
        class="home-hero"
        height="100vh"
        :src="heroData.background ? `${host}${heroData.background}` : ''"
        style="max-height: 100vh;"
    >
        <v-row
            :align="$vuetify.breakpoint.xs ? 'center' : heroData.position"
            justify="center"
            class="pt-5"
        >
            <v-col class="text-center" cols="12">
                <div
                    class="d-flex flex-column justify-space-between align-center"
                    v-if="heroData.showlogo"
                >
                    <v-img
                        max-width="200"
                        centered
                        :src="`${host}icon/logo`"
                    ></v-img>
                </div>
                <h1 class="display-3 mb-4 text-shadow font-weight-regular">
                    {{ heroData.title }}
                </h1>
                <h1 class="display-1 text-shadow mb-5 font-weight-light">
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
                : { position: 'bottom' };
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
</style>
