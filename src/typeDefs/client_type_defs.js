const { gql } = require('apollo-server');
const clientTypeDefs = gql `
    input ClientInput {
        licensePlate: String!
        entryDate: String
        exitDate: String
        useTime: Int
        cost: Float
        state: String
    }
    type Client{
        licensePlate: String!
        entryDate: String
        exitDate: String
        useTime: Int
        cost: Float
        state: String
    }
    extend type Mutation {
        createClient(client: ClientInput!): Client
        saveBilling(client:ClientInput!,licensePlate:String!): Client    
    }
    extend type Query {
        clientByActiveState(user:String):[Client]
        clientByInactiveState(user:String):[Client]
        clientByLicensePlate(licensePlate: String!): Client
    }
`;
module.exports = clientTypeDefs;