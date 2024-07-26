const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require("./schema");

const app = express()

// Connect to MongoDB
mongoose.connect('mongodb+srv://elite:peVdNDRvWHBKYyn8@cluster0.gwlunkx.mongodb.net/test');
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

//set up graphql endpoint
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000/graphql');
});