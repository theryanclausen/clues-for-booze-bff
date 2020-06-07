import { GraphQLScalarType } from 'graphql'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import { decode } from 'he'
const typeDefs = importSchema('src/schema/schema.graphql');

const schema = makeExecutableSchema({ 
  typeDefs,
  resolvers:{
    DecodedString:new GraphQLScalarType({
      name: 'DecodedString',
      description: 'Parse encoded string',
      serialize(value) {
        return decode(value);
      },
      parseValue(value) {
        return decode(value);
      }
    }),

    QuestionPayload:{
      responseCode:({response_code})=>response_code,
      question:({results})=>results[0]
    },
    Question:{
      questionType:({type})=>type,
      correctAnswer:({correct_answer})=>correct_answer,
      incorrectAnswers:({incorrect_answers})=>incorrect_answers
    },
    Query: {
        categories:(_,{},{dataSources:{TriviaAPI}})=>
          TriviaAPI.getCategories(),
        question:(_,args,{dataSources:{TriviaAPI}})=>
          TriviaAPI.getQuestion(args),
        drink:(_,{},{dataSources:{CocktailAPI}})=>
          CocktailAPI.getDrink()
      }
    }
  });
export default schema 
