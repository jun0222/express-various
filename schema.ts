import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    user(id: Int!): User
    users: [User]
  }

  type User {
    id: Int
    name: String
    email: String
  }
`);

export default schema;
