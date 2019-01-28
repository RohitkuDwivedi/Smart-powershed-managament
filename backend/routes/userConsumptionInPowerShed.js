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
    // powerShed.consumption(req.body, () => { sendRes(res, true, "sucess") },
    //     (err) =>{ sendRes(res, false, "ERROR") })

    powerShed.userConsumptionInPowerShed(req.body, (err, consumption) => {
        if (err) sendRes(res, false, "User can't be created");
        if (consumption) sendRes(res, true,
                "User Created " + consumption);
    })
});



module.exports = router;
