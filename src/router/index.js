import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import goTo from 'vuetify/es5/services/goto';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const router = new VueRouter({
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0;

        if (to.hash) {
            scrollTo = to.hash;
        } else if (savedPosition) {
            scrollTo = savedPosition.y;
        }

        return goTo(scrollTo);
    },
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
