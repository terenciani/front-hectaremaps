<template>
    <v-parallax
        :src="videoData.background ? `${host}${videoData.background}` : ''"
        height="650"
    >
        <v-container class="py-5">
            <v-row align="center" justify="center">
                <v-col cols="12" class="display-2 text-center mb-5"
                    >Equipamentos de Última Geração</v-col
                >
                <v-col cols="12" md="8">
                    <v-card
                        color="teal lighten-2"
                        dark
                        v-if="videoSources.length > 0"
                    >
                        <vue-video :sources="videoSources"></vue-video>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-parallax>
</template>

<script>
import config from '../../config';
import vueVideo from 'vue-video';
export default {
    name: 'HomeVideo',
    components: {
        vueVideo
    },
    data: () => ({
        host: config.apiHost + '/assets/'
    }),
    computed: {
        videoData() {
            return this.$store.getters.getVideo
                ? this.$store.getters.getVideo
                : {};
        },
        videoSources() {
            if (this.videoData?.src == '') return [];
            return [
                {
                    src: `${this.host}${this.videoData.src}`,
                    type: 'video/mp4'
                }
            ];
        }
    }
};
</script>

<style scoped>
.v-parallax__xs {
    height: 100% !important;
}
</style>
