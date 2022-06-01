const { DataSource } = require('apollo-datasource')

class UsersDataSource extends DataSource {
    constructor({ data }) {
        super()
        this.data = data
    }

    getUserById({ userId }) {
        // this.data.find(function (user) {
        //     return user.id === userId
        // })
        return this.data.find(user => user.id === userId)
    }
}

module.exports = UsersDataSource
