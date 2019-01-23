const mongoose = require('mongoose');

const personalUsageSchema = mongoose.Schema({
    unitsConsumedPerMonth: {
        type: Number,
        required: true
    },
    Bill :{
        type : Number,
        required : true
    }
    
});

const personalUsage = module.exports = mongoose.model("personalUsage", personalUsageSchema);

module.exports.personalUsage = (personalusage, callback) => {
    personalUsage.create(personalusage, callback)

    
}

