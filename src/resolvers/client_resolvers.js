const clientResolver = {
    Query: {
        clientByActiveState: (_, { user }, { dataSources, userIdToken }) => {
            if(userIdToken)
                return dataSources.billingAPI.getActiveClients()
            else
                return null
        },
        clientByInactiveState: (_, { user }, { dataSources , userIdToken}) => {
            if(userIdToken)
                return  dataSources.billingAPI.getHistoricalClients()
            else
                return null
            
        },
        clientByLicensePlate: (_, { licensePlate }, { dataSources , userIdToken}) => {
            if(userIdToken)
                return dataSources.billingAPI.billingClient(licensePlate)
            else
                return null
      
        }
    },
    Mutation: {
        createClient: async(_, { client }, { dataSources , userIdToken}) => {
            if(userIdToken)
                return await dataSources.billingAPI.createClient(client)
            else
                return null
      
        },
        saveBilling: async(_, { client, licensePlate}, { dataSources , userIdToken}) =>{
            if(userIdToken)
                return await dataSources.billingAPI.saveBilling(client,licensePlate)
            else
                return null
        }
            
    }
};
module.exports = clientResolver;