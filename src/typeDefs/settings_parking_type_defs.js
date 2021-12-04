const { gql } = require('apollo-server');
const settingsParkingTypeDefs = gql `
    type SettingsParking {
        admin: String
        minutePrice: Int
        capacity: Int
    }
    input SettingsParkingInput {
        admin: String
        minutePrice: Int
        capacity: Int
    }
    extend type Query{
        actualSettings(user:String):SettingsParking
    }
    extend type Mutation {
        updateSettings(settingsParking: SettingsParkingInput!): SettingsParking  
    }
   
`;
module.exports = settingsParkingTypeDefs;