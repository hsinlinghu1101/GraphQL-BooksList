const express = require('express');
const graphqlHTTP= require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema.js")
const mongoose = require('mongoose')

const app = express()
mongoose.connect(
    "mongodb+srv://Hsinling:Mm1101@cluster0.st9mz.mongodb.net/Cluster0?retryWrites=true&w=majority",
     { useNewUrlParser: true, useUnifiedTopology: true }
)
mongoose.connection.once('open', ()=>{
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=>{
    console.log('now listening for requests on port 4000')
})