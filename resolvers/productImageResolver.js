const ProductImage = require("../models/productImage");
const ProductImageType = require("../types/productImageType");
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = require("graphql");

const queries = {
    productImage: {
        type: ProductImageType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return ProductImage.findById(args.id)
        }
    },
    productImages: {
        type: new GraphQLList(ProductImageType),
        resolve(parent, args) {
            return ProductImage.find({ isDeleted: false })
        }
    }
};

const mutations = {
    addProductImage: {
        type: ProductImageType,
        args: {
            productId: { type: GraphQLID },
            attributeId: { type: GraphQLID },
            imageUrl: { type: GraphQLString },
            imageText: { type: GraphQLString },
        },
        resolve(parent, args) {
            let ProductImage = new ProductImage({
                productId: args.productId,
                attributeId: args.attributeId,
                imageUrl: args.imageUrl,
                imageText: args.imageText,
                createdOn: new Date().toISOString
            });
            return ProductImage.save()
        }
    },
    updateProductImage: {
        type: ProductImageType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return ProductImage.findByIdAndUpdate(args.id,
                {
                    productId: args.productId,
                    attributeId: args.attributeId,
                    imageUrl: args.imageUrl,
                    imageText: args.imageText,
                    updatedOn: new Date().toISOString
                },
                { new: true }
            )
        }
    },
    deleteProductImage: {
        type: ProductImageType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return ProductImage.findByIdAndUpdate(
                args.id,
                { isDeleted: true },
                { new: true }
            )
        }

    }
};

module.exports = { queries, mutations }