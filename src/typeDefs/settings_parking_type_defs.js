const { gql } = require('apollo-server');
const settingsParkingTypeDefs = gql `
    type SettingsParking {
        admin: String!
        nameParking: String!
        adressParking: String!
        minutePrice: Int!
        capacity: Int
        prefix: String
        billNumberInit: Int
        billNumberEnd: Int
        lastBillNumber: String

    }
    input SettingsParkingInput {
        admin: String
        nameParking: String
        adressParking: String
        minutePrice: Int
        capacity: Int
        prefix: String
        billNumberInit: Int
        billNumberEnd: Int
        lastBillNumber: String
    }
    extend type Query{
        actualSettings(user:String):SettingsParking
    }
    extend type Mutation {
        updateSettings(settingsParking: SettingsParkingInput!): SettingsParking  
    }
   
`;
module.exports = settingsParkingTypeDefs;