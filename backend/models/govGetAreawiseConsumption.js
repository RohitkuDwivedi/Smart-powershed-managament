//govGetAreawiseConsumption

const Influx = require('influxdb-nodejs');


const client = new Influx('http://127.0.0.1:8086/pwr_shed102');
// i --> integer
// s --> string
// f --> float
// b --> booleanconst client = new Influx('http://127.0.0.1:8086/mydb');

const fieldSchema = {
  transformerUnitConsumedPerMonth: 'i',
};
const tagSchema = {
  area:'*',
  tid:'i'
};

module.exports.govtTransformerConsumption = (data,sucessCallback,errCallback) => {
//callback -> (err,data)=>{ send response }
client.write('areawiseTransformerUnitsconsumption')
  .tag({ 
    area : data.area,
    tid:data.tid
  })
  .field({
    transformerUnitConsumedPerMonth : data.units
  })
  .then( ()=>{ 
    sucessCallback() 
  })
  .catch( (err) => { 
    errCallback(err) 
  })

}
