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
                        <v-btn
                            text
                            @click="submit()"
                            v-if="$vuetify.breakpoint.xs"
                        >
                            Confirmar
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <v-card-text
                    class="pt-5"
                    :style="$vuetify.breakpoint.xs ? 'width: 100%' : ''"
                >
                    <v-container class="py-5">
                        <v-form ref="form" v-model="valid">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        label="Nome*"
                                        v-model="user.name"
                                        required
                                        :rules="nameRules"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        label="Sobrenome*"
                                        :rules="lastNameRules"
                                        v-model="user.lastname"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        label="E-mail*"
                                        :rules="emailRules"
                                        v-model="user.email"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        :rules="phoneRules"
                                        label="Telefone de contato*"
                                        v-model="user.phone"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
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
        <v-dialog v-model="loadingDialog" hide-overlay persistent width="350">
            <v-card color="primary" dark>
                <v-card-text>
                    <v-card-text>
                        Aguarde! Sua solicitação está sendo
                        enviada!</v-card-text
                    >
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="response.active" :color="response.type">
            {{ response.message }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    :class="response.type"
                    text
                    v-bind="attrs"
                    @click="response.active = false"
                >
                    Fechar
                </v-btn>
            </template>
        </v-snackbar>
    </span>
</template>

<script>
import RegisterService from '../service/RegisterService';
export default {
    name: 'AppNavigation',
    data() {
        return {
            user: {},
            dialog: false,
            valid: true,
            loadingDialog: false,
            appTitle: 'Hectare Maps',
            drawer: false,
            items: [
                { title: 'Home', route: '/' },
                { title: 'Sobre', route: '#about' },
                { title: 'Serviços', route: '#services' },
                { title: 'Planos', route: '#plans' },
                { title: 'Contato', route: '#contact' }
            ],
            nameRules: [v => !!v || 'O nome é obrigatório'],
            lastNameRules: [v => !!v || 'O sobrenome é obrigatório'],
            emailRules: [
                v => !!v || 'O e-mail é obrigatório',
                v => /.+@.+\..+/.test(v) || 'Informe um e-mail válido.'
            ],
            phoneRules: [v => !!v || 'O telefone é obrigatório'],
            response: {
                message: '',
                type: 'success',
                active: false
            }
        };
    },
    methods: {
        cancel() {
            this.$refs.form.resetValidation();
            this.$refs.form.reset();
            this.dialog = false;
            this.loadingDialog = false;
            this.response = {
                message: '',
                type: 'success',
                active: false
            };
            this.user = {};
        },
        async submit() {
            if (!this.$refs.form.validate()) return;
            this.dialog = false;
            this.loadingDialog = true;
            try {
                let resp = await RegisterService.signUp(this.user);
                this.response.message = resp.message;
                if (resp.status == 200) this.response.type = 'success';
                else this.response.type = 'warning';
                this.$refs.form.resetValidation();
                this.$refs.form.reset();
            } catch (error) {
                this.response.message = error;
                this.response.type = 'error';
            } finally {
                this.loadingDialog = false;
                this.response.active = true;
                this.user = {};
            }
        }
    }
};
</script>

<style scoped></style>
