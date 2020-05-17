import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
const typeDefs = importSchema('src/schema/schema.graphql');

const schema = makeExecutableSchema({ 
  typeDefs,
  resolvers:{
    Query: {
        categories:(_,args,{dataSources:{TriviaAPI}})=>
          TriviaAPI.getCategories(args),
      }
    }
  });
export default schema 
