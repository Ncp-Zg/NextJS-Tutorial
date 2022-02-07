import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    people: [Person!]!
    person(id: ID!): Person
  }


  type Person {
      id: ID!
      name: String!
      age: String!
  }

  type Mutation {
      createPerson(name:String!, age:String!): Person!
  }
`;
