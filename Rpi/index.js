var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
var gpio = require('rpi-gpio')
var gpiop = gpio.promise;
var http = require('http');
http.post = require('http-post');

//------------------------------uart code
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/ttyS0')
const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
parser.on('data',(data)=>{

  var myData =  data.split(":")
  const postUrl="http://192.168.43.89:3000/userGetsPersonalUsage"
  const postData={
    unitsConsumed:myData[1],
    user:myData[0]
  }

  http.post(postUrl,postData, (res)=>console.log(res))
})

// read docs and get data
//------------------------------



client.on('connect', function () {
  client.subscribe('T01', function (err) {
    if (!err) {
      //client.publish('presence', 'Hello mqtt')
    }
  })
})
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  const rMsg = message.toString()
  if(rMsg == "ON"){             //checks if the msg is off
  gpiop.setup(11, gpio.DIR_OUT)
    .then(() => {
         gpiop.write(11, true)
	setTimeout(()=>gpiop.write(11, false),50)

    })
    .catch((err) => {
        console.log('Error: ', err.toString())
    })
}else if(rMsg == "OFF"){
 gpiop.setup(11, gpio.DIR_OUT)
    .then(() => {
        return gpiop.write(11, false)
    })
    .catch((err) => {
        console.log('Error: ', err.toString())
    })


}

  //client.end()
})
