const clientResolver = {
    Query: {
        clientByActiveState: (_, { user }, { dataSources }) => {
            return dataSources.billingAPI.getActiveClients()
        },
        clientByInactiveState: (_, { user }, { dataSources }) => {
            return dataSources.billingAPI.getHistoricalClients()
        },
        clientByLicensePlate: (_, { licensePlate }, { dataSources }) => {
            return dataSources.billingAPI.billingClient(licensePlate)
        }
    },
    Mutation: {
        createClient: async(_, { client }, { dataSources }) => {
            
            return await dataSources.billingAPI.createClient(client);
        },
        saveBilling: async(_, { client, licensePlate}, { dataSources }) =>
            dataSources.billingAPI.saveBilling(client,licensePlate)
    }
};
module.exports = clientResolver;