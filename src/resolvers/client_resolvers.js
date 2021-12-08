try{
    const clientResolver = {
        Query: {
            clientByActiveState: (_, { user }, { dataSources, userIdToken }) => {
                if(userIdToken)
                    
                    return dataSources.billingAPI.getActiveClients()
                else
                    return null
            },
            clientByInactiveState: (_, { typeDate,date }, { dataSources , userIdToken}) => {
                if(userIdToken){
                    if(date==null){
                        date="2021-01-01";
                    }
                    return   dataSources.billingAPI.getHistoricalClients(typeDate,date)
                }
                else{
                    return null
                }
                
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
}
catch (error) {
    throw new ApolloError(`request ERROR: ${500}: ${error}`, 500);
}

