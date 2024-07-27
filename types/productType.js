const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLList } = require('graphql');
const dateScalar = require('../scalars/dateScalar')

const productType = new GraphQLObjectType({
    name: "product",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        brandId: { type: GraphQLID },
        categoryId:{type:GraphQLID},
        imageUrls:{type:new GraphQLList(GraphQLString)},
        stockQuantity: { type: GraphQLInt },
        rating:{type:GraphQLInt},
        status:{type:GraphQLBoolean},
        isDeleted: { type: GraphQLBoolean },
        createdOn: { type: dateScalar },
        updatedOn:{ type: dateScalar },
    })
});

module.exports = productType;