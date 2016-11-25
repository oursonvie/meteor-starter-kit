import { Random } from 'meteor/random';
import { OracleApiDemo, APIOracle } from './connectors'

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
    apiOracle(_, args) {
      // debugging the content in args
      // console.log(args);
      return APIOracle.get(args);
    }
  },
  User: {
    emails: ({emails}) => emails,
    randomString: () => Random.id(),
  }
}
