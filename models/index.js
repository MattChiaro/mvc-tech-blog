const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User can create many posts - upon deletion of user, delete their posts.
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// User can create many comments - upon deletion of user, delete their comments.
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//Posts can have many comments - upon deletion of post, delete its comments.
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

//Comments belong to a post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

// Posts must have a user
Post.belongsTo(User, {
    as: 'poster',
    foreignKey: 'user_id',
})

// Comments must have a user
Comment.belongsTo(User, {
    as: 'commenter',
    foreignKey: 'user_id',
})