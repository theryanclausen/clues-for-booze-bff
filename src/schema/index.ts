import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
const typeDefs = importSchema('src/schema/schema.graphql');

const schema = makeExecutableSchema({ 
  typeDefs,
  resolvers:{
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
          TriviaAPI.getQuestion(args)
      }
    }
  });
export default schema 
