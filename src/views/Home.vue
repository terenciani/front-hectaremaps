<template>
    <span>
        <home-hero></home-hero>
        <home-about></home-about>
        <home-services></home-services>
        <home-about></home-about>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeAbout from '@/components/HomeAbout';
import HomeServices from '@/components/HomeServices';
export default {
    name: 'Home',
    components: { HomeHero, HomeAbout, HomeServices }
};
</script>
