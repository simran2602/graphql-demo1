const { GraphQLID, GraphQLList, GraphQLString } = require('graphql');
const User = require('../models/user');
const UserType = require('../types/userType');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const queries = {
    user: {
        type: UserType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return User.findById(args.id);
        }
    },
    users: {
        type: new GraphQLList(UserType),
        resolve(parenr, args) {
            return User.find({})
        }
    }
};

const mutations = {
    addUser: {
        type: UserType,
        args: {
            name: { type: GraphQLString },
            email: { type: GraphQLString },
            password: { type: GraphQLString },
            address: { type: GraphQLString },
            token: { type: GraphQLString },

        },
        async resolve(parent, args) {

            let check = await User.findOne({ email: args.email })
            if (check) {
                throw new Error("Email already exists");
            }
            let user = new User({
                name: args.name,
                email: args.email,
                password: passwordHash.generate(args.password),
                address: args.address,
                token: jwt.sign(args, process.env.JWT_SECRET),
                createdOn: new Date().toISOString()
            });
            let savedUser = await user.save()
            return savedUser
        }
    },
    updateUser: {
        type: UserType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return User.findByIdAndUpdate(
                args.id,
                {
                    name: args.name,
                    email: args.email,
                    password: args.password,
                    address: args.address,
                },
                { new: true }
            )
        }
    },
    deleteUser: {
        type: UserType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return User.findByIdAndUpdate(
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