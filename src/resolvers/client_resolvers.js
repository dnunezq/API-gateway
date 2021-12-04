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
            const clientInput = {
                licensePlate: client.licensePlate,
                entryDate   : client.entryDate,
                exitDate    : client.exitDate,
                userTime    : client.userTime,
                cost        : client.cost,
                state       : client.state
            }
            return await dataSources.billingAPI.createClient(clientInput);
        },
        saveBilling: async(_, { client, licensePlate}, { dataSources }) =>
            dataSources.billingAPI.saveBilling(client,licensePlate)
    }
};
module.exports = clientResolver;