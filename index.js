const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');



app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//handlebars setting
app.set("view engine", "hbs")
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'index'
}));

const port = 3020;
app.listen(port);
console.log(`Listening to server: http://localhost:${port}`);

//landing page
app.get('/', (req, res) => {
    res.render("main");
})

app.get('/about', (req, res) => {
    res.render("about");
})

app.get('/contact', (req, res) => {
    res.render("contact");
})

app.get('/portfolio', (req, res) => {
    res.render("portfolio");
})

app.get('/*', (req, res) => {
    res.render("notfound");
})