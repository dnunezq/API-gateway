const { gql } = require('apollo-server');
const billing_TypeDefs = gql `

type Client {

id: String!
licensePlate: String!
entryDate: Date!
exitDate: Date!
useTime: Int!
cost: Double!
state: String!
}

input ClientInput {
LicensePlate: String!
}

extend type Mutation {
createClient(Client: ClientInput!): Client
}

input getBillingClient {
LicensePlate: String!
}

extend type Mutation {
getBillingClient(Client: getBillingClienteInput!): Client
}

extend type Query {
ClientByState(state: String!): Client
ClientBylicensePlateandState(state: String!): Client
}

`;
module.exports = billing_TypeDefs;


