const express = require('express');
const router = express.Router();
const transformer = require("../models/addNewTransformer");

sendRes = (res, success, msg) => {
    res.json({
        success: success,
        msg: msg
    });
}

router.post('/', (req, res) => {
    transformer.addNewTransformer(req.body, (err, transformer) => {
        if (err) sendRes(res, false, "Transformer not added");
        if (transformer) sendRes(res, true,
            "Transformer Added " + transformer);
    })
});

router.get('/displayAllTransformers', (req, res) => {
    transformer.showall(req.body, (err, transformers) => {
        if (err) sendRes(res, false, "Cannot display");
        if (transformers) sendRes(res, true,
             transformers);
    })
});

module.exports = router;
