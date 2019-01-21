const mongoose = require('mongoose');

const TransformerSchema = mongoose.Schema({
    tranformerId: {
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

