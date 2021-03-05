<template>
    <span>
        <v-navigation-drawer app v-model="drawer" disable-resize-watcher>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>
                        {{ item.title }}
                    </v-list-item-title>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dark>
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
            <v-toolbar-items>
                <v-btn text class="hidden-sm-and-down">Menu</v-btn>
            </v-toolbar-items>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-toolbar-items>
                <v-btn text class="hidden-sm-and-down">SIGN IN</v-btn>
                <v-btn text class="grey darken-3 hidden-sm-and-down"
                    >JOIN</v-btn
                >
            </v-toolbar-items>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Hectare Maps',
            drawer: false,
            items: [{ title: 'Menu' }, { title: 'Sign In' }, { title: 'Join' }]
        };
    }
};
</script>

<style scoped></style>
