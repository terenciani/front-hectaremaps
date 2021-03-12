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
                <v-list-item link to="/admin">
                    <v-list-item-title class="text-capitalize">
                        Entrar
                    </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item link @click.stop="dialog = true">
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
                <v-btn text to="/admin">ENTRAR</v-btn>
                <v-btn text class="grey darken-3" @click.stop="dialog = true"
                    >SOLCITAR CADASTRO</v-btn
                >
            </v-toolbar-items>
        </v-app-bar>

        <v-dialog
            v-model="dialog"
            max-width="600"
            :fullscreen="$vuetify.breakpoint.xs"
        >
            <v-card>
                <v-toolbar dark color="teal">
                    <v-btn icon dark @click="cancel()">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Solicitação de Cadastro</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn text @click="submit()" v-if="$vuetify.breakpoint.xs">
                            Confirmar
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <v-card-text class="pt-5" :style="$vuetify.breakpoint.xs ? 'width: 100%' : ''">
                    <v-container class="py-5">
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    label="Nome*"
                                    v-model="user.name"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    label="Sobrenome*"
                                    v-model="user.lastname"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    label="E-mail*"
                                    v-model="user.email"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    label="Telefone de contato*"
                                    v-model="user.phone"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions v-if="!$vuetify.breakpoint.xs" class="pb-5">
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="cancel()">
                        Cancelar
                    </v-btn>
                    <v-btn color="green darken-1" text @click="submit()">
                        Confirmar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            user: {},
            dialog: false,
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
    },
    methods: {
        cancel() {
            this.dialog = false;
        },
        submit() {
            this.dialog = false;
        }
    }
};
</script>

<style scoped></style>
