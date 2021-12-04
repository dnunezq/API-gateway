const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class BillingAPI extends RESTDataSource {
    constructor() {
            super();
            this.baseURL = serverConfig.billing_api_url;
    }
    async createClient(client) {
        client = new Object(JSON.parse(JSON.stringify(client)));
        return await this.post('/create', client);
    }
    async getActiveClients() {
        return await this.get(`/Clients`);
    }
    async getHistoricalClients() {
        return await this.get(`/historical`);
    }
    async billingClient(licensePlate) {
        return await this.get(`/Clients/${licensePlate}`);
    }
    async saveBilling(client,licensePlate) {
        client = new Object(JSON.parse(JSON.stringify(client)));
        return await this.post(`/Clients/${licensePlate}`, client);
    }

    async getActualSettings() {
        return await this.get(`/Settings`);
    }
    async modifySettings(settingsParking) {
        settingsParking = new Object(JSON.parse(JSON.stringify(settingsParking)));
        return await this.post(`/Settings`, settingsParking);
    }
}
module.exports = BillingAPI;