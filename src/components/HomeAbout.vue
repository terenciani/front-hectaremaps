<template>
    <v-container>
        <v-row>
            <v-col class="display-2 text-center">{{ aboutData.title }}</v-col>
        </v-row>
        <v-row justify="center">
            <v-col md="8" sm="10" xs="12" v-html="aboutData.text"></v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HomeAbout',
    computed: {
        aboutData() {
            return this.$store.getters.getAbout
                ? this.$store.getters.getAbout
                : {};
        }
    }
};
</script>

<style scoped></style>
