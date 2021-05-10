'use strict';

import API from '../Api';

export default class ServicesService {
    static async getAll() {
        try {
            let services = await API.get('service/actives');
            return services.data;
        } catch (error) {
            throw error.response.data;
        }
    } // getAll()
} // class
