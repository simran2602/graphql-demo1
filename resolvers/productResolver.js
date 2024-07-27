const { GraphQLInputObjectType, GraphQLID, GraphQLList, GraphQLFloat, GraphQLInt, GraphQLString } = require('graphql');
const ProductType = require('../types/productType');
const Product = require('../models/product');

const queries = {
    product: {
        type: ProductType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return Product.findById(args.id)
        }
    },
    products: {
        type: new GraphQLList(ProductType),
        resolve(parent, args) {
            return Product.find({ isDeleted: false })
        }
    }
};

const mutations = {
    addProduct: {
        type: ProductType,
        args: {
            name: { type: GraphQLString },
            description: { type: GraphQLString },
            price: { type: GraphQLFloat },
            brandId: { type: GraphQLID },
            categoryId: { type: GraphQLID },
            imageUrls: { type: new GraphQLList(GraphQLString) },
            stockQuantity: { type: GraphQLInt },
            rating: { type: GraphQLInt },
        },
        resolve(parent, args) {
            const newProduct = new Product({
                name: args.name,
                description: args.description,
                price: args.price,
                brandId: args.brandId,
                categoryId: args.categoryId,
                imageUrls: args.imageUrls,
                stockQuantity: args.stockQuantity,
                rating: args.rating,
                createdOn: new Date().toISOString()
            });
            return newProduct.save()
        }
    },
    updateProduct: {
        type: ProductType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return Product.findByIdAndUpdate(
                args.id,
                {
                    name: args.name,
                    description: args.description,
                    price: args.price,
                    brandId: args.brandId,
                    categoryId: args.categoryId,
                    imageUrls: args.imageUrls,
                    stockQuantity: args.stockQuantity,
                    rating: args.rating
                },
                { new: true }
            )
        }
    },
    deleteProduct: {
        type: ProductType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return Product.findByIdAndUpdate(
                args.id,
                {
                    isDeleted: true
                },
                { new: true }
            )
        }
    }
};

module.exports = { queries, mutations }
