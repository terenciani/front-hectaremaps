'use strict';
import API from '../Api';
export default class RegisterService {
    static async signUp(userData) {
        let preparedUser = {
            email: userData.email.toLowerCase(),
            name: userData.name,
            phone: userData.phone,
            lastname: userData.lastname
        };
        try {
            let message = await API.post('signup', preparedUser);
            return message.data;
        } catch (error) {
            throw 'Não foi possível efetuar seu cadastro. Tente mais tarde!';
        }
    } // signUp()
} // class
