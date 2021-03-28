<template>
    <v-parallax
        :src="serviceData.background ? `${host}${serviceData.background}` : ''"
        height="700"
    >
        <v-container>
            <v-row class="mt-5">
                <v-col xs="12" class="display-2 text-center mb-5">{{
                    serviceData.title
                }}</v-col>
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
                                            <v-card-title
                                                class="headline"
                                                v-if="serviceData.showprice"
                                            >
                                                {{
                                                    utilFormatter.numberToMoney(
                                                        service.price
                                                    )
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
    </v-parallax>
</template>

<script>
import ServicesService from '../service/ServicesService';
import UtilFormatter from '../utils/UtilFormatter';
import config from '../../config';
export default {
    name: 'HomeService',
    data: () => ({
        host: config.apiHost + '/assets/',
        services: [],
        utilFormatter: UtilFormatter,
        tab: null
    }),
    methods: {
        async init() {
            this.services = await ServicesService.getAll();
        } // init
    },
    computed: {
        serviceData() {
            return this.$store.getters.getService
                ? this.$store.getters.getService
                : {};
        }
    },
    created() {
        this.init();
    }
};
</script>

<style scoped>
.v-parallax__xs {
    height: 100% !important;
}
</style>
