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
        licensePlate: String
        entryDate: String
        exitDate: String
        useTime: Int
        cost: Float
        state: String
        billNumber: String
    }
    type ClientAndCapacity{
        clients:[Client]!
        capacity: Int
    }
    
    type ResultHistorical{
        clients: [Client]
        earnings: Float
        
    }
    extend type Mutation {
        createClient(client: ClientInput!): Client
        saveBilling(client:ClientInput!,licensePlate:String!): Client    
    }
    extend type Query {
        clientByActiveState(user:String):ClientAndCapacity
        clientByInactiveState(typeDate:String! date:String ):ResultHistorical
        clientByLicensePlate(licensePlate: String!): Client
    }
`;
module.exports = clientTypeDefs;