import { Random } from 'meteor/random';

export const typeDefs = [`
type Email {
  address: String
  verified: Boolean
}

type User {
  emails: [Email]
  username: String
  randomString: String
  _id: String
}

type Query {
  user(id: String!): User
  getOracleApiDemo: String
}

schema {
  query: Query
}
`];
