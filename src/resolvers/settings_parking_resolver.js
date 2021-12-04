const settingsParkingResolver = {
    Query: {
        actualSettings: (_, { user }, { dataSources }) => {
            return dataSources.billingAPI.getActualSettings()
        }
    },
    Mutation: {
        updateSettings: async(_, { settingsParking }, { dataSources }) => {
            const newSettings = {
                admin: settingsParking.admin,
                minutePrice   : settingsParking.minutePrice,
                capacity    : settingsParking.capacity,
                
            }
            return await dataSources.billingAPI.modifySettings(newSettings);
        },
        
    }
};
module.exports = settingsParkingResolver;