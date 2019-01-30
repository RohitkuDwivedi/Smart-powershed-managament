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
app.use('/transformerConsumption', transformerConsumption)
app.use('/userGetsPersonalUsage',userGetsPersonalUsage)
app.use('/govtGetsAreawiseConsumption',govtGetsAreawiseConsumption )

app.post('/psOn',(req,res)=>{
    var topic = req.body.topic

var mqtt = require('mqtt')
// var client  = mqtt.connect('mqtt://test.mosquitto.org')
const client =
    mqtt.connect({
        host: '127.0.0.1',
        port: 1883
    });
 
client.on('connect', function () {
  client.subscribe(topic, function (err) {
    if (!err) {
      client.publish(topic, 'ON')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})







    // client.on('connect', function () {
    //     client.subscribe(topic, function (err) {
    //       if (!err) {
    //         client.publish(topic, 'Hello mqtt',null,(err)=>console.log(err))
    //         console.log("published");
            
    //       }
    //     })
    //   })
    //   client.on('message', function (topic, message) {
    //     // message is Buffer
    //     console.log(message.toString())
    //   })


    res.json({
         success:true,
         msg: "notified"
     });

    })
   


app.get('*', (req, res) => {
    res.send('Enter valid url');
});









port = 3000

app.listen(port, () => {
    console.log("Server is running on port " + port);
});