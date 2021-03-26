const express = require('express');
const blogRouter = require('./routes/blogs')
const app = express();
// const bodyParser = require('body-parser')
// const { check, validationResult } = require('express-validator')

const db = require('./config/database')

db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' + err))

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs')

app.use('/blogs', blogRouter)

app.get('/', (req, res) => {
    const blogs = [{
        title: 'Test Blog',
        description: 'this is a test description',
    }]
    res.render('index', { blogs: blogs })
})

// const urlencoded = urlencoded({ extended: false })

// app.get('/register', (req, res) => {
//     res.render('register')
// })

// app.post('/register', urlencodedParser, [
//     check('username', 'This username must be 6+ characters long')
//     .exists()
//     .isLength({ min: 6 }),
//     check('email', 'Email is not valid')
//     .isEmail()
//     .normalizeEmail()
// ],
    
//     (req, res) => {

//         const errors = validationResult(req)
//         if(!errors.isEmpty()) {
//             // return res.status(422).jsonp(errors.array())
//             const alert = errors.array()
//             res.render('register', {
//                 alert
//             })
//         }
// })


app.listen(PORT, () => console.log(`listening on port ${PORT}`));