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

type APIOracle {
  CERTIFICATENO: String,
  EMAIL: String,
  LOGINNAME: String,
  OPENSTUNO: String,
  PASSWORD: String,
  REALNAME: String,
  USERID: Int
}

type Query {
  user(id: String!): User
  getOracleApiDemo: String
  apiOracle(EMAIL: String): [APIOracle]
}

schema {
  query: Query
}
`];
