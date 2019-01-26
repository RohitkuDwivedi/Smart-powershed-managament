const express = require('express');
const router = express.Router();
const addNewTransformer = require("../models/addNewTransformer");

// const commonFn = require('../utils/commonFn');

sendRes = (res, success, msg) => {
    res.json({
        success: success,
        msg: msg
    });
}

router.post('/', (req, res) => {
    addNewTransformer.addNewTransformer(req.body, (err, transformer) => {
        if (err) sendRes(res, false, "Transformer not added");
        if (transformer) sendRes(res, true,
            "Transformer Added " + transformer);
    })
});

module.exports = router;