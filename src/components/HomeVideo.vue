<template>
    <v-parallax
        :src="require('@/assets/bg_video.jpg')"
        height="650"
        class="py-5"
    >
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="12" class="display-2 text-center mb-5"
                    >Equipamentos de Última Geração</v-col
                >
                <v-col cols="12" md="8">
                    <v-card color="teal lighten-2" dark>
                        <vue-video
                            :sources="video.sources"
                            :options="video.options"
                        ></vue-video>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-parallax>
</template>

<script>
import vueVideo from 'vue-video';
export default {
    name: 'HomeVideo',
    components: {
        vueVideo
    },
    data: () => ({
        video: {
            sources: [
                {
                    src: require('@/assets/drone-lancamento.mp4'),
                    type: 'video/mp4'
                }
            ]
        }
    })
};
</script>

<style scoped></style>
