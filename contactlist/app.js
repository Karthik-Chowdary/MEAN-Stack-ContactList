// Importing Modules

var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');


var app = express();

const route = require('./routes/route');

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

//On connection

mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongodb at port: 27017');
});

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('Error in database connection ' +err);
    }
});

// Assign ports

const port = 3000;

// Adding Middleware
// cors

app.use(cors());

// body-parser

app.use(bodyparser.json());

// Static files

app.use(express.static(path.join(__dirname, 'public')));

// routes

app.use('/api', route);

//Testing server
app.get('/', (req, res)=>{
    res.send('foobar');
});

app.listen(port, ()=>{
    console.log('server has started at port '+ port);
});
