const Brand = require('../models/brand');
const BrandType = require('../types/brandType');
const { GraphQLID, GraphQLList ,GraphQLString,GraphQLBoolean} = require('graphql');



const queries = {
    brand: {
        type: BrandType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return Brand.findById(args.id)
        }
    },
    brands: {
        type: new GraphQLList(BrandType),
        resolve(parent, args) {
            return Brand.find({ isDeleted: false })
        }
    }
};

const mutations = {
    addBrand: {
        type: BrandType,
        args: {
            name: { type: GraphQLString },
            description: { type: GraphQLString },
            logo: { type: GraphQLString }
        },
        resolve(parent, args) {
            let brand = new Brand({
                name: args.name,
                description: args.description,
                logo: args.logo,
                createdOn: new Date().toISOString
            });
            return brand.save()
        }
    },
    updateBrand: {
        type: BrandType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return Brand.findByIdAndUpdate(args.id,
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
    deleteBrand: {
        type: BrandType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return Brand.findByIdAndUpdate(
                args.id,
                { isDeleted: true },
                { new: true }
            )
        }

    }
};

module.exports = {queries,mutations}