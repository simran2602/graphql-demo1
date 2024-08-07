const { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = require('graphql');
const dateScalar = require('../scalars/dateScalar');

const productAttributeType = new GraphQLInputObjectType({
    name: "productAttribute",
    fields: () => ({
        id: { type: GraphQLID },
        productId: { type: GraphQLID },
        attributeName: { type: GraphQLString },
        attributeValue: { type: GraphQLString },
        status: { type: GraphQLBoolean },
        isDeleted: { type: GraphQLBoolean },
        createdOn: { type: dateScalar },
        updatedOn: { type: dateScalar },
    })
});

module.exports = productAttributeType;