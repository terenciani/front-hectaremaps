<template>
    <span>
        <v-navigation-drawer app v-model="drawer" disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item link :key="index" :to="item.route">
                        <v-list-item-title class="text-capitalize">
                            {{ item.title }}
                        </v-list-item-title>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
                <v-list-item link>
                    <v-list-item-title class="text-capitalize">
                        Entrar
                    </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item link>
                    <v-list-item-title class="text-capitalize">
                        Solicitar Cadastro
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dark>
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>

            <v-toolbar-items>
                <v-btn
                    v-for="(item, index) in items"
                    :key="index"
                    text
                    :to="item.route"
                    class="text-uppercase hidden-sm-and-down"
                    >{{ item.title }}</v-btn
                >
            </v-toolbar-items>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-toolbar-items>
                <v-btn text>ENTRAR</v-btn>
                <v-btn text class="grey darken-3">SOLCITAR CADASTRO</v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Hectare Maps',
            drawer: false,
            items: [
                { title: 'Home', route: '/' },
                { title: 'Sobre', route: '#about' },
                { title: 'Serviços', route: '#services' },
                { title: 'Planos', route: '#plans' },
                { title: 'Contato', route: '#contact' }
            ]
        };
    }
};
</script>

<style scoped></style>
