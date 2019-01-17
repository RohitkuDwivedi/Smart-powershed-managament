const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const mongoose = require('mongoose');
const Influx = require('influxdb-nodejs');




app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// const variables = require('./utils/variables');

// const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/pwr_shed' , {
    useNewUrlParser: true
});

// const client = new Influx('http://127.0.0.1:8086/pwr_shed1');

// mongoose.connection.on('connected', () => {
//     console.log('Connected to database ' +mongodb.db );
// });
// mongoose.connection.on('error', () => {
//     console.log('Connection error');
// });

var addUser = require("./routes/addUser")
var addNewTranformer = require('./routes/addNewTranformer');
var userGetsPersonalUsage = require('./routes/userGetsPersonalUsage');
var userConsumptionInPowerShed = require('./routes/userConsumptionInPowerShed');

app.use('/addUser', addUser)

app.use('/addNewTranformer',addNewTranformer)

app.use('/userConsumptionInPowerShed', userConsumptionInPowerShed)

app.use('/tranformerConsumption', function(req,res,tranformerConsumption){

    res.send('tranformerConsumption');

});

app.use('/userGetsPersonalUsage',userGetsPersonalUsage)

app.use('/govtGetsAreawiseConsumption', function(req,res,govtGetsAreawiseConsumption){

    res.send('govtGetsAreawiseConsumption');

});

app.get('*', (req, res) => {
    res.send('Enter valid url');
});

port = 3000

app.listen(port, () => {
    console.log("Server is running on port " + port);
});