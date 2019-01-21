const Influx = require('influxdb-nodejs');
// const Influx1 = require('influx');


const client = new Influx('http://127.0.0.1:8086/pwr_shed102');
// i --> integer
// s --> string
// f --> float
// b --> booleanconst client = new Influx('http://127.0.0.1:8086/mydb');

const fieldSchema = {
  totalUnitsPerDay: 'i',
};
const tagSchema = {
  // spdy: ['speedy', 'fast', 'slow'],
  
  area :'*',
  
};
client.schema('city', fieldSchema, tagSchema, {
  // default is false
  stripUnknown: true,
});

module.exports.transformer_consumption = (data,sucessCallback,errCallback) => {
//callback -> (err,data)=>{ send response }
client.write('tranformer_consumption1')
  .tag({ 
    area : data.area,
  })
  .field({
    totalUnitsPerDay : data.units
  })
  .then( ()=>{ 
    sucessCallback() 
  })
  .catch( (err) => { 
    errCallback(err) 
  })
}
