const { GraphQLObjectType, GraphQLID, GraphQLString,GraphQLBoolean } = require('graphql');
const dateScalar = require('../scalars/dateScalar')


const brandType = new GraphQLObjectType({
    name: "brand",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        logo: { type: GraphQLString },
        status: { type: GraphQLBoolean },
        isDeleted: { type: GraphQLBoolean },
        createdOn: { type: dateScalar },
        updatedOn: { type: dateScalar },
    })
});

module.exports = brandType;