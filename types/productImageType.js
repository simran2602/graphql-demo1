const { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = require('graphql');
const dateScalar = require('../scalars/dateScalar');

const productImageType = new GraphQLInputObjectType({
    name: "productImage",
    fields: () => ({
        id: { type: GraphQLID },
        productId: { type: GraphQLID },
        attributeId: { type: GraphQLID },
        imageUrl: { type: GraphQLString },
        imageText: { type: GraphQLString },
        status: { type: GraphQLBoolean },
        isDeleted: { type: GraphQLBoolean },
        createdOn: { type: dateScalar },
        updatedOn: { type: dateScalar },
    })
});

module.exports = productImageType;