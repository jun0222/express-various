import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    user(id: Int!): User
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: Int!, name: String, email: String): User
    deleteUser(id: Int!): User
  }

  type User {
    id: Int
    name: String
    email: String
  }
`);

export default schema;
