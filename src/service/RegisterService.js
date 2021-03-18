'use strict';
import API from '../Api';
import md5 from 'md5';
export default class RegisterService {
    static async signUp(userData) {
        let preparedUser = {
            email: userData.email.toLowerCase(),
            name: await RegisterService.capitalizeCase(userData.name),
            phone: await RegisterService.unMask(userData.phone),
            lastname: await RegisterService.capitalizeCase(userData.lastname),
            password: await md5(userData.password)
        };
        try {
            let message = await API.post('signup', preparedUser);
            return message.data;
        } catch (error) {
            throw 'Não foi possível efetuar seu cadastro. Tente mais tarde!';
        }
    } // signUp()

    static unMask(phone = '') {
        var str = '';
        for (var i = 0; i < phone.length; i++) {
            let char = phone.charAt(i);
            if (char != '(' && char != ')' && char != '-' && char != ' ')
                str += char;
        }
        return str;
    } // unMask
    static capitalizeCase(name) {
        var i, j, str, lowers;
        str = name.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });

        // Certain minor words should be left lowercase unless
        // they are the first or last words in the string
        lowers = ['De', 'Da', 'Do', 'Dos', 'Das', 'E'];
        for (i = 0, j = lowers.length; i < j; i++)
            str = str.replace(
                new RegExp('\\s' + lowers[i] + '\\s', 'g'),
                function(txt) {
                    return txt.toLowerCase();
                }
            );

        return str;
    }
} // class
