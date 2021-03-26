const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//handlebars setting
app.set("view engine", "hbs");
app.engine('hbs', exphbs({
   extname: 'hbs',
   defaultLayout: 'index',
   layoutsDir: __dirname + '/views/layouts',
   partialsDir: __dirname + '/views/partials',
}));


const PORT = 5000;
app.listen(PORT);
console.log(`Listening to server on port: ${PORT}`);


//landing page
app.get('/main', (req, res) => {
    res.render("main") ;
})

app.get('/about', (req, res) => {
    res.render("about") ;
})

app.get('/contact', (req, res) => {
    res.render("contact") ;
})

app.get('/portfolio', (req, res) => {
    res.render("portfolio") ;
})

app.get('/*', (req, res) => {
    res.render("notfound") ;
})
