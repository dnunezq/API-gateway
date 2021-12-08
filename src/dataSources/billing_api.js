const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class BillingAPI extends RESTDataSource {
    constructor() {
            super();
            this.baseURL = serverConfig.billing_api_url;
    }
    async createClient(client) {
        client = new Object(JSON.parse(JSON.stringify(client)));
        return await this.post('/clients', client);
    }
    async getActiveClients() {
        
       return await this.get(`/clients`);
    }
    async getHistoricalClients(typeDate,date) {
        console.log("pass");
        let ct=await this.get(`/historical/${typeDate}/${date}`);
        console.log(ct);
        return ct
    }
    async billingClient(licensePlate) {
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
module.exports = BillingAPI;