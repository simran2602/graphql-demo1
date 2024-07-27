const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = require('graphql');
const dateScalar = require('../scalars/dateScalar')


const userType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        address: { type: GraphQLString },
        isDeleted: { type: GraphQLBoolean },
        createdOn: { type: dateScalar }
    })
});

module.exports = userType;