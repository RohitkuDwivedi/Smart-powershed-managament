const mongoose = require('mongoose');

const TransformerSchema = mongoose.Schema({
    transformerId: {
        type: String,
        required: true
    },
    areaPincode :{
        type : Number,
        required : true
    }
    
});

const newTransformer = module.exports = mongoose.model("addNewTransformer", TransformerSchema);

module.exports.addNewTransformer = (Transformer, callback) => {
    newTransformer.create(Transformer, callback)
}

module.exports.showall = (Transformer,callback) => {
    newTransformer.find(Transformer,callback)
}

