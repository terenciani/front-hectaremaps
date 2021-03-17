'use strict';

import API from '../Api';

export default class HomeService {
    static async getData() {
        try {
            let homeData = await API.get('homedata');
            return homeData.data;
        } catch (error) {
            throw error.response.data;
        }
    } // getData()
} // class
