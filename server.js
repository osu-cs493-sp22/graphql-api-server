const express = require('express');
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./schema')

const UsersDataSource = require('./apollo/users')
const PostsDataSource = require('./apollo/posts')
const CommentsDataSource = require('./apollo/comments')

const resolvers = require('./apollo/resolvers')

const usersData = require('./data/users.json')
const postsData = require('./data/posts.json')
const commentsData = require('./data/comments.json')

const app = express();
const port = process.env.PORT || 8000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    usersDataSource: new UsersDataSource({ data: usersData }),
    postsDataSource: new PostsDataSource({ data: postsData }),
    commentsDataSource: new CommentsDataSource({ data: commentsData })
  })
})

server.start().then(() => {
  server.applyMiddleware({ app })
  app.listen(port, () => {
    console.log("== Server listening on port", port);
  })
})
