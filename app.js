const express = require('express');
const exphbs = require('express-handlebars');
const fileUpload = require('express-fileupload');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 5001;



//default option
app.use(fileUpload());

// Static Files
app.use(express.static('public'));
app.use('/form', express.static(__dirname + '/upload'));


//template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



//connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Bernie2020',
    database: 'BubsBlog'
});

pool.getConnection((err, connection)=> {
    if(err) throw err;
    console.log('connected!')
});

app.get('', (req, res) => {
    res.render('index');

    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected');

//         connection.query('UPDATE artist SET artwork_image = ? WHERE id = "1"', (err, rows) => {
//             connection.release();

            if(!err) {
                res.redirect('/');
            } else {
                console.log(err);
            }
        });
    });

app.post('/upload', function(req, res) {
    let sampleFile;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).send('no file uploaded');
    }

    //name of the input is sampleFile
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/upload/' + sampleFile.name;

    console.log(sampleFile);

    //use mv() to place file on the server
    sampleFile.mv(uploadPath, function (err) {
        if (err) 
        return res.status(500).send(err);

        res.send('file uploaded');

    });
});


app.listen(PORT, () => console.log(`listening on port ${PORT}`));