const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const userResolver = require('./resolvers/userResolver')


//root query for all fetching
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        ...userResolver.queries,
        // ...productResolver.queries
    }
});

//mutation for modifying data in database
const Mutation = new GraphQLObjectType({
    name: "MutationType",
    fields: {
        ...userResolver.mutations,
        // ...productResolver.mutations
    }
});

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
});