const { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = require('graphql');
const dateScalar = require('../scalars/dateScalar');

const categoryType = new GraphQLInputObjectType({
    name: "category",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        parentId: { type: GraphQLID },
        status: { type: GraphQLBoolean },
        isDeleted: { type: GraphQLBoolean },
        createdOn: { type: dateScalar },
        updatedOn: { type: dateScalar },
    })
});

module.exports = categoryType;