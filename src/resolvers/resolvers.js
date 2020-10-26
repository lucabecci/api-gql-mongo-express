import {tasks} from '../test'

import User from '../models/User'

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World made with gql'
        },
        greet: (root, {name}, ) => {
            console.log(root)
            return `Hello ${name}!`
        },
        tasks: () => {
            return tasks;
        },
        users: async() => {
            const users = await User.find()
            return users
        }
    },
    Mutation: {
        createTask: (_, { input } ) => {
            input._id = tasks.length
            tasks.push(input)
            return input;   
        },
        createUser : async(_, { input }) => {
            const newUser = new User(input)
            return await newUser.save()
        },
        deleteUser: async(_, {_id}) => {
            return await User.findByIdAndDelete(_id)
        },
        updateUser: async(_, { _id, input} ) => {
            return await User.findByIdAndUpdate(_id, input, { new: true })
        }
    }
}