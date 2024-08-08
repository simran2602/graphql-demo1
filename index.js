const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require("./schema");
const { authenticate } = require('./services/middleware')

require('dotenv').config()


const app = express()

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);
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