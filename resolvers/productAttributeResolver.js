const ProductAttribute = require("../models/productAttribute");
const ProductAttributeType = require("../types/productAttribute");
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = require("graphql");

const queries = {
    productAttribute: {
        type: ProductAttributeType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return ProductAttribute.findById(args.id)
        }
    },
    productAttributes: {
        type: new GraphQLList(ProductAttributeType),
        resolve(parent, args) {
            return ProductAttribute.find({ isDeleted: false })
        }
    }
};

const mutations = {
    addProductAttribute: {
        type: ProductAttributeType,
        args: {
            productId: { type: GraphQLID },
            attributeName: { type: GraphQLString },
            attributeValue: { type: GraphQLString },
        },
        resolve(parent, args) {
            let ProductAttribute = new ProductAttribute({
                productId: args.productId,
                attributeName: args.attributeName,
                attributeValue: args.attributeValue,
                createdOn: new Date().toISOString
            });
            return ProductAttribute.save()
        }
    },
    updateProductAttribute: {
        type: ProductAttributeType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return ProductAttribute.findByIdAndUpdate(args.id,
                {
                    productId: args.productId,
                    attributeName: args.attributeName,
                    attributeValue: args.attributeValue,
                    updatedOn: new Date().toISOString
                },
                { new: true }
            )
        }
    },
    deleteProductAttribute: {
        type: ProductAttributeType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return ProductAttribute.findByIdAndUpdate(
                args.id,
                { isDeleted: true },
                { new: true }
            )
        }

    }
};

module.exports = {queries,mutations}