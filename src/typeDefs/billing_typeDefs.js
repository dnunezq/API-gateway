const { gql } = require('apollo-server');
const accountTypeDefs = gql `
type Client {

id: String!
licensePlate: String!
entryDate: Date!
exitDate: Date!
useTime: Int!
cost: Double!
state: String!
}
extend type Query {
facturaByState(state: String!): Client
}
`;
module.exports = accountTypeDefs;


