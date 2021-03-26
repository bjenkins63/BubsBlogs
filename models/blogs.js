const mysql = require('mysql2');
const Schema = ('mysql/schema');


const blogSchema = new Schema ({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }

});

const Blog = mysql.model('blogs', BlogSchema);

module.exports = Blog;