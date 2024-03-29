<template>
    <v-container>
        <v-row align="center">
            <v-col cols="12" class="display-2 text-center mb-5">{{
                contactData.title
            }}</v-col>
            <v-row class="pb-0 px-5 mb-0" justify="space-between">
                <v-col cols="12" md="5">
                    <div class="text-h5">Entre em contato conosco</div>

                    <div class="text-subtitle-1 mb-5">
                        Para suporte ou qualquer questão envie um e-mail para
                        nós:
                        <a :href="`mailto:${contactData.email}`">{{
                            contactData.email
                        }}</a>
                    </div>

                    <div class="font-weight-medium text-h6">
                        <v-icon>mdi-google-maps</v-icon> Endereço
                    </div>
                    <div class="text-subtitle-1 mb-5">
                        {{ contactData.address }}
                    </div>

                    <div class="font-weight-medium text-h6">
                        <v-icon>mdi-phone</v-icon> Telefone
                    </div>
                    <div class="text-subtitle-1 mb-5">
                        {{ contactData.phone }}
                    </div>

                    <div
                        class="font-weight-medium text-h6"
                        v-if="hasSocialNetwork"
                    >
                        <v-icon>mdi-wan</v-icon> Nossas redes sociais
                    </div>
                    <div class="text-subtitle-1 mb-5" v-if="hasSocialNetwork">
                        <a
                            v-if="contactData.instagram != ''"
                            :href="contactData.instagram"
                            class="social-network"
                            target="_blank"
                            ><v-icon class="mr-3">mdi-instagram</v-icon></a
                        >
                        <a
                            v-if="contactData.twitter != ''"
                            :href="contactData.twitter"
                            class="social-network"
                            target="_blank"
                            ><v-icon class="mr-3">mdi-twitter</v-icon></a
                        >
                        <a
                            v-if="contactData.facebook != ''"
                            :href="contactData.facebook"
                            class="social-network"
                            target="_blank"
                            ><v-icon class="mr-3">mdi-facebook</v-icon></a
                        >
                        <a
                            v-if="contactData.pinterest != ''"
                            :href="contactData.pinterest"
                            class="social-network"
                            target="_blank"
                            ><v-icon>mdi-pinterest</v-icon></a
                        >
                    </div>
                </v-col>
                <v-col cols="12" class="hidden-md-and-up">
                    <v-divider></v-divider>
                </v-col>

                <v-col cols="12" md="6">
                    <v-form ref="form" v-model="valid">
                        <v-row>
                            <v-col cols="12">
                                <div class="text-h5">
                                    Preencha o formulário e pressione enviar.
                                </div>
                            </v-col>

                            <v-col cols="12" md="6" class="pb-0">
                                <v-text-field
                                    v-model="email.name"
                                    outlined
                                    :rules="nameRules"
                                    label="Insira seu nome"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6" class="pb-0">
                                <v-text-field
                                    :rules="emailRules"
                                    v-model="email.email"
                                    type="email"
                                    outlined
                                    label="Insira seu e-mail"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" class="py-0">
                                <v-textarea
                                    outlined
                                    :rules="messageRules"
                                    v-model="email.message"
                                    label="Message"
                                    required
                                ></v-textarea>
                            </v-col>
                            <v-col cols="12" class="pt-0">
                                <v-btn
                                    tile
                                    large
                                    :disabled="loadingDialog"
                                    :loading="loadingDialog"
                                    dark
                                    color="teal"
                                    @click="submit"
                                >
                                    <v-icon left>
                                        mdi-send
                                    </v-icon>
                                    Enviar
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
        </v-row>
        <v-dialog v-model="loadingDialog" hide-overlay persistent width="350">
            <v-card color="primary" dark>
                <v-card-text>
                    <v-card-text>
                        Aguarde! Seu e-mail está sendo enviado!</v-card-text
                    >
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="emailResponse.active" :color="emailResponse.type">
            {{ emailResponse.message }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    :class="emailResponse.type"
                    text
                    v-bind="attrs"
                    @click="emailResponse.active = false"
                >
                    Fechar
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
import ContactService from '../service/ContactService';
export default {
    name: 'HomeContact',
    data: () => ({
        email: {},
        valid: true,
        loadingDialog: false,
        nameRules: [
            v => !!v || 'O nome é obrigatório',
            v => /[a-zA-Z]/.test(v) || 'O nome deve possuir somente letras.'
        ],
        emailRules: [
            v => !!v || 'O e-mail é obrigatório',
            v => /.+@.+\..+/.test(v) || 'Informe um e-mail válido.'
        ],
        messageRules: [
            v => !!v || 'A mensagem é obrigatória',
            v =>
                (v && v.length >= 20) ||
                'A mensagem deve ter pelo menos 20 caracteres.'
        ],
        emailResponse: {
            message: '',
            type: 'success',
            active: false
        }
    }),
    computed: {
        contactData() {
            return this.$store.getters.getContact
                ? this.$store.getters.getContact
                : {};
        },
        hasSocialNetwork() {
            if (!this.contactData) return false;

            if (
                this.contactData.instagram == '' &&
                this.contactData.twitter == '' &&
                this.contactData.facebook == '' &&
                this.contactData.pinterest == ''
            )
                return false;
            return true;
        }
    },

    methods: {
        async submit() {
            if (!this.$refs.form.validate()) return;
            this.loadingDialog = true;
            try {
                this.emailResponse.message = await ContactService.sendEmail(
                    this.email
                );
                this.emailResponse.type = 'success';
                this.$refs.form.resetValidation();
                this.$refs.form.reset();
            } catch (error) {
                this.emailResponse.message = error;
                this.emailResponse.type = 'error';
            } finally {
                this.loadingDialog = false;
                this.emailResponse.active = true;
                this.email = {};
            }
        }
    }
};
</script>

<style scoped>
.social-network {
    text-decoration: none;
}
.social-network .v-icon:hover {
    color: teal !important;
    font-size: 30px !important;
}
</style>
