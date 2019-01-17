const express = require('express');
const router = express.Router();
const powerShed = require("../models/userConsumptionInPowerShed");

// const commonFn = require('../utils/commonFn');

sendRes = (res, success, msg) => {
    res.json({
        success: success,
        msg: msg
    });
}

router.post('/', (req, res) => {
    // data =  {
    //     user:req.body.user,
    //     consumptions:req.body.consumptions

    // }



    // powerShed.addUserConsumptionInPowerShed(data, (err, data) => {

    //     if (err) sendRes(res, false, "data can't be created");
    //     if (data) sendRes(res, true,
    //         "data Created " + data);
 
    // })

    powerShed.consumption(req.body, (err, data) => {
        if (err){
             sendRes(res, false, "req.body can't be created");
             console.log("error"+err); 
        }
             if (data){
            sendRes(res, true, "data added " + data);
            console.log("data"+data);            
            }
            
    })
});

module.exports = router;
