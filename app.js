const express = require('express');
let mongoose = require('mongoose');

const bodyParser = require('body-parser');

const persona = require('./routes/persona.route');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=> res.send('Hello World with Express'));
app.use('/api/persona',persona);

const bdURL = 'mongodb://ds:123qwe@ds219095.mlab.com:19095/eva_prueva'

mongoose.connect(bdURL, {useNewUrlParser: true}).then(
    () => { console.log("Mongoose default connection is open to ", bdURL)},
    err => {console.log("Mongoose default connection has occured "+err+" error"); }
);

app.listen(port, function (){
    console.log(`Example App Listening on Port ${port}!`);
});