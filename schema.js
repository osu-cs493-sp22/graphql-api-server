const { gql } = require('apollo-server-express')

module.exports = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        posts: [Post!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        author: User!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!
        text: String!
        author: User!
        post: Post!
    }

    type Query {
        posts: [Post!]!
        post(id: ID!): Post
    }
`
