'use strict';

import API from '../Api';

export default class PlanService {
    static async getAllPlansAndItems() {
        try {
            let plansAndItems = await API.get('plansanditems');
            return plansAndItems.data;
        } catch (error) {
            throw error.response.data;
        }
    } // getAllPlansAndItems()
} // class
