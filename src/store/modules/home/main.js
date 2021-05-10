'use strict';

import DataService from '../../../service/DataService';

export default {
    state: {
        icon: {
            logo: '',
            favicon: ''
        },
        hero: {
            title: '',
            subtitle: '',
            background: '',
            position: 'end',
            shownavigationlogo: false,
            showlogo: false
        },
        about: {
            title: '',
            paragraph_one: '',
            paragraph_two: ''
        },
        service: {
            title: '',
            background: '',
            showprice: false
        },
        plan: {
            title: '',
            showprice: false
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
        getIcon: state => state.icon,
        getHero: state => state.hero,
        getAbout: state => state.about,
        getService: state => state.service,
        getPlan: state => state.plan,
        getVideo: state => state.video,
        getContact: state => state.contact
    },
    mutations: {
        setIcon(state, payload) {
            state.icon.logo = payload.logo;
            state.icon.favicon = payload.favicon;
        },
        setHero(state, payload) {
            state.hero.title = payload.title;
            state.hero.subtitle = payload.subtitle;
            state.hero.background = payload.background;
            state.hero.position = payload.position;
            state.hero.shownavigationlogo = payload.shownavigationlogo;
            state.hero.showlogo = payload.showlogo;
        },
        setAbout(state, payload) {
            state.about.title = payload.title;
            state.about.paragraph_one = payload.paragraph_one;
            state.about.paragraph_two = payload.paragraph_two;
        },
        setService(state, payload) {
            state.service.title = payload.title;
            state.service.background = payload.background;
            state.service.showprice = payload.showprice;
        },
        setPlan(state, payload) {
            state.plan.title = payload.title;
            state.plan.showprice = payload.showprice;
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
            state.hero.position = 'end';
            state.hero.shownavigationlogo = true;
            state.hero.showlogo = true;
            state.hero.background = '';
            state.about.title = '';
            state.about.paragraph_one = '';
            state.about.paragraph_two = '';
            state.service.title = '';
            state.service.background = '';
            state.service.showprice = false;
            state.plan.showprice = false;
            state.plan.title = '';
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
                let homeData = await DataService.getData();
                context.commit('setIcon', homeData.icon);
                context.commit('setHero', homeData.hero);
                context.commit('setAbout', homeData.about);
                context.commit('setService', homeData.service);
                context.commit('setPlan', homeData.plan);
                context.commit('setVideo', homeData.video);
                context.commit('setContact', homeData.contact);
                document.title = homeData.company;
            } catch (error) {
                context.commit('reloadHome');
                console.log(error);
            }
        }
    }
};
