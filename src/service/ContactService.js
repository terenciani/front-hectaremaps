'use strict';
import API from '../Api';
export default class ContactService {
    static async sendEmail(emailData) {
        try {
            let email = await API.post('email', emailData);
            return email.data;
        } catch (error) {
            throw 'Não foi possível enviar seu e-mail. Tente mais tarde!';
        }
    } // sendEmail()
} // class
