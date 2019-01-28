const mongoose = require('mongoose');

const userConsumptionInPowerShed = mongoose.Schema({
  unitConsumed: {
        type: Number,
        required: true,
    },
    user: {
      type: String,
      required: true,
      unique: true
  },
});

const uConsumptionInPowerShed = module.exports = mongoose.model("userConsumptionInPowerShed", userConsumptionInPowerShed);

module.exports.userConsumptionInPowerShed = (consumption, callback) => {
  uConsumptionInPowerShed.create( consumption, callback ) 
}

module.exports.userConsumptionInPowerShed = (consumption, callback) => {
  uConsumptionInPowerShed.create( consumption, callback ) 
}



// const Influx = require('influxdb-nodejs');
// const Influx1 = require('influx');


// const client = new Influx('http://127.0.0.1:8086/pwr_shed102');
// // i --> integer
// // s --> string
// // f --> float
// // b --> booleanconst client = new Influx('http://127.0.0.1:8086/mydb');

// const fieldSchema = {
//   unitConsumed: 'i',
// };
// const tagSchema = {
//   user :'*' 
// };
// // client.schema('city', fieldSchema, tagSchema, {
// //   // default is false
// //   stripUnknown: true,
// // });

// module.exports.consumption = (data,sucessCallback,errCallback) => {
// //callback -> (err,data)=>{ send response }
// client.write('consumed')
//   .tag({ 
//     user : data.user,
//   })
//   .field({
//     unitConsumed : data.units
//   })
//   .then( ()=>{ 
//     sucessCallback() 
//   })
//   .catch( (err) => { 
//     errCallback(err) 
//   })

// }
