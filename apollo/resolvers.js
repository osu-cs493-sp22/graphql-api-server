module.exports = {
    Query: {
        posts: (_, __, { dataSources }) => dataSources.postsDataSource.getAllPosts(),
        post: (_, { id }, { dataSources }) => dataSources.postsDataSource.getPostById({ postId: id })
    },

    Post: {
        author: (post, _, { dataSources }) => dataSources.usersDataSource.getUserById({
            userId: post.authorId
        }),
        comments: (post, _, { dataSources }) => dataSources.commentsDataSource.getCommentsByPostId({
            postId: post.id
        })
    },

    Comment: {
        author: (comment, _, { dataSources }) => dataSources.usersDataSource.getUserById({
            userId: comment.authorId
        }),
        post: (comment, _, { dataSources }) => dataSources.postsDataSource.getPostById({
            postId: comment.postId
        })
    },

    User: {
        posts: (user, _, { dataSources }) => dataSources.postsDataSource.getPostsByAuthorId({
            authorId: user.id
        })
    }
}
