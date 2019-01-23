const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

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
var transformerConsumption = require('./routes/transformerConsumption');
var govtGetsAreawiseConsumption = require('./routes/govtGetsAreawiseConsumption');

app.use('/addUser', addUser)

app.use('/addNewTranformer',addNewTranformer)

app.use('/userConsumptionInPowerShed', userConsumptionInPowerShed)

app.use('/tranformerConsumption', transformerConsumption)

app.use('/userGetsPersonalUsage',userGetsPersonalUsage)

app.use('/govtGetsAreawiseConsumption',govtGetsAreawiseConsumption )

app.get('*', (req, res) => {
    res.send('Enter valid url');
});

port = 3000

app.listen(port, () => {
    console.log("Server is running on port " + port);
});