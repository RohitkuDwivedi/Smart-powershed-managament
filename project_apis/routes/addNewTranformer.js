const express = require('express');
const router = express.Router();
const addNewTranformer = require("../models/addNewTranformer");

// const commonFn = require('../utils/commonFn');

sendRes = (res, success, msg) => {
    res.json({
        success: success,
        msg: msg
    });
}

router.post('/', (req, res) => {
    addNewTranformer.addNewTransformer(req.body, (err, transformer) => {
        if (err) sendRes(res, false, "Transformer not added");
        if (transformer) sendRes(res, true,
            "Transformer Added " + transformer);
    })
});

module.exports = router;