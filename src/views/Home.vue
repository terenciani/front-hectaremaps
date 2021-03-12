<template>
    <span>
        <home-hero></home-hero>
        <home-about id="about" class="padding-section"></home-about>
        <home-service id="services"></home-service>
        <home-plan id="plans" class="padding-section"></home-plan>
        <home-video></home-video>
        <home-contact id="contact" class="padding-section"></home-contact>
        <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            x-large
            right
            color="teal"
            @click="toTop"
        >
            <v-icon>mdi-chevron-up </v-icon>
        </v-btn>
        <div class="text-center">&reg; Todos os direitos reservados.</div>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeAbout from '@/components/HomeAbout';
import HomeService from '@/components/HomeService';
import HomePlan from '@/components/HomePlan';
import HomeVideo from '@/components/HomeVideo';
import HomeContact from '@/components/HomeContact';
export default {
    name: 'Home',
    components: {
        HomeHero,
        HomeAbout,
        HomeService,
        HomePlan,
        HomeContact,
        HomeVideo
    },
    data() {
        return {
            fab: false
        };
    },
    methods: {
        onScroll(e) {
            if (typeof window === 'undefined') return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            this.fab = top > 20;
        },
        toTop() {
            this.$vuetify.goTo(0);
        }
    }
};
</script>
<style>
.padding-section {
    padding-top: 100px !important;
    padding-bottom: 100px !important;
}
</style>
