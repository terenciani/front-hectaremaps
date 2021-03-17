'use strict';

import HomeService from '../../../service/HomeService';

export default {
    state: {
        hero: {
            title: '',
            subtitle: '',
            background: ''
        },
        about: {
            title: '',
            text: ''
        },
        service: {
            title: '',
            background: ''
        },
        plan: {
            title: ''
        },
        video: {
            title: '',
            src: '',
            background: ''
        },
        contact: {
            title: '',
            email: '',
            address: '',
            phone: '',
            instagram: '',
            twitter: '',
            facebook: '',
            pinterest: ''
        }
    },
    getters: {
        getHero: state => state.hero,
        getAbout: state => state.about,
        getService: state => state.service,
        getPlan: state => state.plan,
        getVideo: state => state.video,
        getContact: state => state.contact
    },
    mutations: {
        setHero(state, payload) {
            state.hero.title = payload.title;
            state.hero.subtitle = payload.subtitle;
            state.hero.background = payload.background;
        },
        setAbout(state, payload) {
            state.about.title = payload.title;
            state.about.text = payload.text;
        },
        setService(state, payload) {
            state.service.title = payload.title;
            state.service.background = payload.background;
        },
        setPlan(state, payload) {
            state.plan.title = payload.title;
        },
        setVideo(state, payload) {
            state.video.title = payload.title;
            state.video.src = payload.src;
            state.video.background = payload.background;
        },
        setContact(state, payload) {
            state.contact.title = payload.title;
            state.contact.email = payload.email;
            state.contact.address = payload.address;
            state.contact.phone = payload.phone;
            state.contact.instagram = payload.instagram;
            state.contact.twitter = payload.twitter;
            state.contact.facebook = payload.facebook;
            state.contact.pinterest = payload.pinterest;
        },
        reloadHome(state) {
            state.hero.title = '';
            state.hero.subtitle = '';
            state.hero.background = '';
            state.about.title = '';
            state.about.text = '';
            state.service.title = '';
            state.service.background = '';
            state.video.title = '';
            state.video.src = '';
            state.video.background = '';
            (state.contact.title = ''), (state.contact.email = '');
            state.contact.address = '';
            state.contact.phone = '';
            state.contact.instagram = '';
            state.contact.twitter = '';
            state.contact.facebook = '';
            state.contact.pinterest = '';
        }
    },
    actions: {
        async loadHomeData(context) {
            try {
                let homeData = await HomeService.getData();
                context.commit('setHero', homeData.hero);
                context.commit('setAbout', homeData.about);
                context.commit('setService', homeData.service);
                context.commit('setPlan', homeData.plan);
                context.commit('setVideo', homeData.video);
                context.commit('setContact', homeData.contact);
            } catch (error) {
                context.commit('reloadHome');
                console.log(error);
            }
        }
    }
};
