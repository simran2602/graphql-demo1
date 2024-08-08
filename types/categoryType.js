const { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLObjectType } = require('graphql');
const dateScalar = require('../scalars/dateScalar');
const categoryModel = require('../models/category');

const CtegoryType = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        parentId: { type: GraphQLID },
        parent:{
            type:CtegoryType,
            resolve(parent,args){
                return categoryModel.findById(parent.parentId)
            }
        },
        status: { type: GraphQLBoolean },
        isDeleted: { type: GraphQLBoolean },
        createdOn: { type: dateScalar },
        updatedOn: { type: dateScalar },
    })
});

module.exports = CtegoryType;