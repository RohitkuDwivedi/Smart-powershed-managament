const mongoose = require('mongoose');

const personalUsageSchema = mongoose.Schema({
    userName :{
        type : String,
        required : true
    },
    unitsConsumedPerDay: {
        type: Number,
        required: true
    }
});

const personalUsage = module.exports = mongoose.model("personalUsage", personalUsageSchema);

module.exports.personalUsage = (personalusage, callback) => {
    personalUsage.create(personalusage, callback)
}

module.exports.getPersonalUsage = (user, callback) => {
    
    personalUsage.find(user, callback)
    
    
}

