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
        if (err) sendRes(res, false, "err");

        if (personalUsage) sendRes(res, true,
            personalUsage);
    })
});

router.post('/getConsumption', (req, res) => {
    PersonalUsage.getPersonalUsage(req.body,(err,data)=>{
        if(err) sendRes(res,false,"error")
        if(data) sendRes(res,true, data);
    })

});

router.get('/gp',(req,res)=>{
    PersonalUsage.getPersonalUsage(req.body,(err,data)=>{
        if(err) sendRes(res,false,"error")
        console.log(data[0]._id)
        if(data) {
            console.log(data);
            
            sendRes(res,true,data)
        }
    })
})
module.exports = router;