const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class BillingPAPI extends RESTDataSource {
    constructor() {
            super();
            this.baseURL = serverConfig.billing_api_url;
    }
    async createCar(client) {
        client = new Object(JSON.parse(JSON.stringify(client)));
        return await this.post('/creator', client);
    }
    async getActiveIngressCars() {
        return await this.get(`/clients`);
    }
    async getHistoricalCars() {
        return await this.get(`/historic`);
    }
    async getBillingClient(licensePlate) {
        return await this.get(`/clients/${licensePlate}`);
    }
    async saveBilling(client,licensePlate) {
        client = new Object(JSON.parse(JSON.stringify(client)));
        return await this.post(`/clients/${licensePlate}`, client);
    }

    async getActualSettings() {
        return await this.get(`/settings`);
    }
    async modifySettings(settingsParking) {
        settingsParking = new Object(JSON.parse(JSON.stringify(settingsParking)));
        return await this.post(`/settings`, settingsParking);
    }
}
module.exports = BillingPAPI;