const Influx = require('influxdb-nodejs');

const client = new Influx('http://127.0.0.1:8086/pwr_shed1');
// i --> integer
// s --> string
// f --> float
// b --> booleanconst client = new Influx('http://127.0.0.1:8086/mydb');

const fieldSchema = {
  unitConsumed: 'i',
};
const tagSchema = {
  // spdy: ['speedy', 'fast', 'slow'],
  
  user :'*'
  
};
client.schema('pwr_shed1', fieldSchema, tagSchema, {
  // default is false
  stripUnknown: true,
});

module.exports.consumption = (data,callback) => {
  
  client.write('pwr_shed1')
  .tag({
    // spdy: 'fast',
    // method: 'GET',
    // type: '2',  
    user : data.user,
  })
  .field({
    // use: 300,
    // bytes: 2312,
    // url: 'https://github.com/vicanso/influxdb-nodejs',
    unitConsumed : data.units
  })
  .then(() => console.info('write point success'))
  .catch(console.error);
}















// const Influx = require('influx');

// const influx = new Influx.InfluxDB({
//     host: 'localhost',
//     database: 'pwr_shed',
//     schema: [
//       {
//         measurement: 'userConsumptionInPowerShed',
//         fields: { unitConsumed: Influx.FieldType.INTEGER },
//         tags: ['user']
//       }
//     ]
//   });

//   influx.getDatabaseNames()
//   .then(names => {
//     if (!names.includes('pwr_shed')) {
//       return influx.createDatabase('pwr_shed');
//     }
//   });
// //    (() => {
// //     app.listen(app.get('port'), () => {
// //       console.log(`Listening on ${app.get('port')}.`);
// //     });
//     // writeDataToInflux(100);
// // })

// module.exports.addUserConsumptionInPowerShed = (data,callback)=>{
//     /*

//     data = {
//         user:"userId <string>",
//         consumptions:" units consumed <int> "
//     }

//     */
//   //   influx.writePoints([
//   //   {
//   //     measurement: 'userConsumptionInPowerShed',
//   //     tags: {
//   //       user:data.user                    //userId form req.body
        
//   //     },
//   //     fields: { unitConsumed: data.consumptions },   // get this value from req.body
//   //   }
//   // ], {
//   //   database: 'pwr_shed',   // which database is the measurement
    
//   // }).then( data=>{console.log(data);
//   //   callback()
//   // })


// }
  