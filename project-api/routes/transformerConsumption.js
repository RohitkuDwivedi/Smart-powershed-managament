const express = require('express');
const router = express.Router();
const transformerConsumption = require("../models/transformerConsumption");

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
    
    transformerConsumption.transformer_consumption(req.body, () => { sendRes(res, true, "sucessfully added") },
        (err) =>{ sendRes(res, false, "ERROR") })

});

module.exports = router;
