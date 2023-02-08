const User = require("./User");
const Blog = require("./Blog");

Blog.belongsTo(User,{
    onDelete:"CASCADE"
})
User.hasMany(Blog)


module.exports = {
    User, Blog
}