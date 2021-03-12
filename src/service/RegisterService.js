'use strict';
import API from '../Api';
export default class RegisterService {
    static async signUp(userData) {
        try {
            let message = await API.post('signup', userData);
            return message.data;
        } catch (error) {
            throw 'Não foi possível efetuar seu cadastro. Tente mais tarde!';
        }
    } // signUp()
} // class
