<template>
    <v-container class="mb-5">
        <v-row class="mt-5">
            <v-col xs="12" class="display-2 text-center mb-5"
                >Conheça Nossos Planos</v-col
            >
        </v-row>
        <v-row class="mb-5">
            <v-col
                cols="12"
                sm="4"
                v-for="plan in plansAndItems"
                :key="plan.id_plan"
            >
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card class="mx-auto" elevation="12">
                            <v-card-title class="teal d-block text-center">{{
                                plan.name
                            }}</v-card-title>
                            <v-divider class="mx-4"></v-divider>
                            <v-card-text>
                                <template
                                    v-for="(planItems, i) in plan.plan_items"
                                >
                                    <v-divider
                                        v-if="i > 0"
                                        class="my-4"
                                        :key="planItems.id_item_plan * 4"
                                    ></v-divider>
                                    <div
                                        :key="planItems.id_item_plan"
                                        class="text--primary"
                                    >
                                        {{ planItems.description }}
                                        <div>{{ planItems.price }}</div>
                                    </div>
                                </template>
                            </v-card-text>
                            <v-fade-transition>
                                <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="#036358"
                                >
                                    <v-btn large color="primary accent-4">
                                        Contratar
                                    </v-btn>
                                </v-overlay>
                            </v-fade-transition>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import PlanService from '../service/PlanService';
export default {
    name: 'HomePlan',
    data: () => ({
        plansAndItems: []
    }),
    methods: {
        async init() {
            this.plansAndItems = await PlanService.getAllPlansAndItems();
        } // init
    },
    created() {
        this.init();
    }
};
</script>

<style scoped></style>
