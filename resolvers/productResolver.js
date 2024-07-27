const { GraphQLInputObjectType, GraphQLID, GraphQLList, GraphQLFloat, GraphQLInt,GraphQLString } = require('graphql');
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
            price: { type: GraphQLFloat },
            description: { type: GraphQLString },
            stock: { type: GraphQLInt },
        },
        resolve(parent, args) {
            const newProduct = new Product({
                name: args.name,
                price: args.price,
                description: args.description,
                stock: args.stock,
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
                price: args.price,
                description: args.description,
                stock: args.stock
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

module.exports = {queries,mutations}
