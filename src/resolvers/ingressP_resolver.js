const ingressPResolver = {
    Query: {
        ingressByActiveState: (_, { user }, { dataSources }) => {
            return dataSources.billingPAPI.getActiveIngressCars()
        },
        ingressByInactiveState: (_, { user }, { dataSources }) => {
            return dataSources.billingPAPI.getHistoricalCars()
        },
        ingressByLicensePlate: (_, { licensePlate }, { dataSources }) => {
            return dataSources.billingPAPI.getBillingClient(licensePlate)
        }
    },
    Mutation: {
        createCar: async(_, { ingress }, { dataSources }) => {
            
            return await dataSources.billingPAPI.createCart(client);
        },
        saveBilling: async(_, { ingress, licensePlate}, { dataSources }) =>
            dataSources.billingPAPI.saveBillingClient(client,licensePlate)
    }
};
module.exports = ingressPResolver;