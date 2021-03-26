const Sequelize = require('sequelize');
const db = require('../config/database');

const Blog = db.define('blog', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Date,
        // default: Date.now
        }
})

Blog.sync().then(() => {
    console.log('table created');
});

module.exports.Blog;