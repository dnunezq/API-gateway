const { gql } = require('apollo-server');

const ingressPTypeDefs = gql `

type Ingress{
    dateIngress: Date!;
    dateExit: Date!;
    licensePlate: String!;
    cost: double!;
    useTime: int!;
    status: String!;
}

input IngressInput{
    dateIngress: Date!;
    dateExit: Date!;
    licensePlate: String!;
    cost: double!;
    useTime: int!;
    status: String!;
}



extend type Query {
    ingressByActiveState(user:String):[Ingress]
    ingressByInactiveState(user:String):[Ingress]
    ingressByLicensePlate(licensePlate: String!): Ingress
    }


    extend type Mutation {
        createCar(ingress: IngressInput!): Ingress
        saveBilling(ingress: IngressInput!,licensePlate:String!): Ingress   
    }

`

module.exports = ingressPTypeDefs;