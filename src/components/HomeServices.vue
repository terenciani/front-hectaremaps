<template>
    <v-parallax
        :src="require('@/assets/bg_services.jpg')"
        height="1000px"
        class="py-5"
    >
        <v-container>
            <v-row class="mt-5">
                <v-col xs="12" class="display-2 text-center mb-5"
                    >Nossos Serviços</v-col
                >
            </v-row>
            <v-row class="d-none d-sm-flex my-5" align="center">
                <v-col xs="12">
                    <v-card height="400">
                        <v-tabs
                            v-model="tab"
                            background-color="transparent"
                            color="basil"
                            grow
                        >
                            <v-tab
                                v-for="service in services"
                                :key="service.id"
                            >
                                {{ service.name }}
                            </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                            <v-tab-item
                                v-for="service in services"
                                :key="service.id"
                            >
                                <v-card color="basil">
                                    <v-row
                                        align="center"
                                        justify="space-around"
                                    >
                                        <v-col sm="6" md="6">
                                            <v-card-title class="headline"
                                                >Preço: R$
                                                {{
                                                    service.price
                                                }}</v-card-title
                                            >
                                            <v-card-text
                                                class=" text-justify"
                                                >{{
                                                    service.description
                                                }}</v-card-text
                                            >
                                        </v-col>
                                        <v-col sm="5" md="4" class="pa-5">
                                            <v-img
                                                :src="host + service.image"
                                            ></v-img>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="d-flex d-sm-none my-5">
                <v-carousel cycle height="300" hide-delimiter-background>
                    <v-carousel-item
                        v-for="service in services"
                        :key="service.id"
                        :src="host + service.image"
                    >
                        <v-sheet color="transparent" height="100%">
                            <v-row
                                class="fill-height pt-5"
                                align="start"
                                justify="center"
                            >
                                <div class="display-1">{{ service.name }}</div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-row>
        </v-container>
        <!--<v-row class="d-none d-sm-flex mt-5">
                <v-col
                    v-for="service in services"
                    :key="service.id"
                    xs="12"
                    sm="4"
                    md="3"
                >
                    <v-card>
                        <v-img
                            :src="host + service.image"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                        >
                            <v-card-title v-text="service.name"></v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        -->
    </v-parallax>
</template>

<script>
import ServicesService from '../service/ServicesService';
import config from './../../config';
export default {
    name: 'HomeServices',
    data: () => ({
        host: config.apiHost + '/assets/',
        services: [],
        tab: null
    }),
    methods: {
        async init() {
            this.services = await ServicesService.getAll();
        } // init
    },
    created() {
        this.init();
    }
};
</script>

<style scoped>
.description {
}
</style>
