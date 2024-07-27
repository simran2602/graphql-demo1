const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean } = require('graphql');
const dateScalar = require('../scalars/dateScalar')

const productType = new GraphQLObjectType({
    name: "product",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },
        description: { type: GraphQLString },
        stock: { type: GraphQLInt },
        isDeleted: { type: GraphQLBoolean },
        createdOn: { type: dateScalar }
    })
});

module.exports = productType;