const express = require('express');
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema.js")
const mongoose = require('mongoose')
const {
    port,
    mongoDB_Url
} = require('./config');

const app = express()
mongoose.connect(
    mongoDB_Url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`now listening for requests on port ${port}` )
})