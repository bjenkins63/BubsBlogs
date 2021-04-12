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

app.listen(process.env.PORT || 3000);

console.log(`Listening to server`);

//landing page
app.get('/main', (req, res) => {
    res.render("main");
})

app.get('/portfolio', (req, res) => {
    res.render("portfolio");
})

app.get('/web', (req, res) => {
    res.render("web");
})

app.get('/art', (req, res) => {
    res.render("art");
})

app.get('/contact', (req, res) => {
    res.render("contact");
})

app.get('/*', (req, res) => {
    res.render("notfound");
})