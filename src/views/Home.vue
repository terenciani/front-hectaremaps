<template>
    <span>
        <home-hero></home-hero>
        <home-about></home-about>
        <home-service></home-service>
        <home-plan></home-plan>
        <home-service></home-service>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeAbout from '@/components/HomeAbout';
import HomeService from '@/components/HomeService';
import HomePlan from '@/components/HomePlan';

export default {
    name: 'Home',
    components: { HomeHero, HomeAbout, HomeService, HomePlan }
};
</script>
