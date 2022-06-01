const { DataSource } = require('apollo-datasource')

class PostsDataSource extends DataSource {
    constructor({ data }) {
        super()
        this.data = data
    }

    getAllPosts() {
        return this.data || []
    }

    getPostById({ postId }) {
        return this.data.find(post => post.id === postId)
    }

    getPostsByAuthorId({ authorId }) {
        return this.data.filter(post => post.authorId === authorId)
    }
}

module.exports = PostsDataSource
