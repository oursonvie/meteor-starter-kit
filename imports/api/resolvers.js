import { Random } from 'meteor/random';
import { OracleApiDemo } from './connectors'

export const resolvers = {
  Query: {
    user(root, args, context) {
      // Only return the current user, for security
      if (context.userId === args.id) {
        return context.user;
      }
    },
    getOracleApiDemo(){
      return OracleApiDemo.getOne();
    },
  },
  User: {
    emails: ({emails}) => emails,
    randomString: () => Random.id(),
  }
}
