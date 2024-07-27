const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const userResolver = require('./resolvers/userResolver')
const productResolver = require('./resolvers/productResolver');
const brandResolver = require('./resolvers/brandResolver');
const dateScalar = require('./scalars/dateScalar');


//root query for all fetching
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        ...userResolver.queries,
        ...productResolver.queries,
        ...brandResolver.queries
    }
});

//mutation for modifying data in database
const Mutation = new GraphQLObjectType({
    name: "MutationType",
    fields: {
        ...userResolver.mutations,
        ...productResolver.mutations,
        ...brandResolver.mutations
    }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
    types: [dateScalar]
  });
  
  module.exports = schema;