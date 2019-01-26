const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());



mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/pwr_shed' , {
    useNewUrlParser: true
});

var addUser = require("./routes/addUser")
var addNewTransformer = require('./routes/addNewTransformer');
var userGetsPersonalUsage = require('./routes/userGetsPersonalUsage');
var userConsumptionInPowerShed = require('./routes/userConsumptionInPowerShed');
var transformerConsumption = require('./routes/transformerConsumption');
var govtGetsAreawiseConsumption = require('./routes/govtGetsAreawiseConsumption');

app.use('/addUser', addUser)

app.use('/addNewTransformer',addNewTransformer)

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