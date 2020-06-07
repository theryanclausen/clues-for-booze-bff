import 'dotenv/config'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import TriviaAPI from './DataSources/TriviaAPI'
import CocktailAPI from './DataSources/CocktailAPI'
import schema from './schema'

const server = new ApolloServer({
  schema,
  dataSources:()=>({
    CocktailAPI: new CocktailAPI(),
    TriviaAPI: new TriviaAPI()
  })
});
 
const app = express();
server.applyMiddleware({ app });

app.get('/', (req,res) => res.send("hello"))
const PORT = process.env.PORT || 4000
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready ON ${PORT}`)
);