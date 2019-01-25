const express = require('express');
const router = express.Router();
const powerShed = require("../models/userConsumptionInPowerShed");

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
    console.log(req.body);
    
    powerShed.consumption(req.body, () => { sendRes(res, true, "sucess") },
        (err) =>{ sendRes(res, false, "ERROR") })

});

module.exports = router;
