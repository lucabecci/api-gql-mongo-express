import express from "express";
import { graphqlHTTP } from 'express-graphql'
import schema from './schemas/schema'
//initialize
const app = express();
//middlewares

//routes
app.get('/', (req, res) => {
    res.send('hello world')
})


app.use('/gql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        message: 'test'
    }
}))

export default app;
