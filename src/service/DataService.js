'use strict';

import API from '../Api';

export default class DataService {
    static async getData() {
        try {
            let siteData = await API.get('configdata');
            return siteData.data;
        } catch (error) {
            throw error.response.data;
        }
    } // getData()
} // class
