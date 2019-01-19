const express = require('express');
const router = express.Router();
const PersonalUsage = require("../models/userGetsPersonalUsage");

sendRes = (res, success, msg) => {
    res.json({
        success: success,
        msg: msg
    });
}

router.post('/', (req, res) => {
    PersonalUsage.personalUsage(req.body, (err, personalUsage) => {
        if (err) sendRes(res, false, "Usage and bill can't be displayed");
        if (personalUsage) sendRes(res, true,
            "Bill" + personalUsage);
    })
});

module.exports = router;