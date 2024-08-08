const category = require('../models/category');
const categoryType = require('../types/categoryType');
const { GraphQLID, GraphQLList ,GraphQLString,GraphQLBoolean} = require('graphql');



const queries = {
    category: {
        type: categoryType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return category.findById(args.id)
        }
    },
    categories: {
        type: new GraphQLList(categoryType),
        resolve(parent, args) {
            return category.find({ isDeleted: false })
        }
    }
};

const mutations = {
    addCategory: {
        type: categoryType,
        args: {
            name: { type: GraphQLString },
            description: { type: GraphQLString },
            parentId: { type: GraphQLID }
        },
       async resolve(parent, args) {
            let check = await category.findOne({ name: args.name })
            if (check) {
                throw new Error("category name already exists");
            }
            let categoryData = new category({
                name: args.name,
                description: args.description,
                parentId: args.parentId,
                createdOn: new Date().toISOString()
            });
            return await categoryData.save()
        }
    },
    updatecategory: {
        type: categoryType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return category.findByIdAndUpdate(args.id,
                {
                    name: args.name,
                    description: args.description,
                    logo: args.logo,
                    updatedOn: new Date().toISOString
                },
                { new: true }
            )
        }
    },
    deletecategory: {
        type: categoryType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return category.findByIdAndUpdate(
                args.id,
                { isDeleted: true },
                { new: true }
            )
        }

    }
};

module.exports = {queries,mutations}