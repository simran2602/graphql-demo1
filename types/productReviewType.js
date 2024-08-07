const { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt } = require('graphql');
const dateScalar = require('../scalars/dateScalar');

const productReviewType = new GraphQLInputObjectType({
    name: "productReview",
    fields: () => ({
        id: { type: GraphQLID },
        productId: { type: GraphQLID },
        userId: { type: GraphQLID },
        comment: { type: GraphQLString },
        rating: { type: GraphQLInt },
        status: { type: GraphQLBoolean },
        isDeleted: { type: GraphQLBoolean },
        createdOn: { type: dateScalar },
        updatedOn: { type: dateScalar },
    })
});

module.exports = productReviewType;