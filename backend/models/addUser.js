const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
        
    },
    pincode: {
        type: Number,
        required: true
        
    },
    phoneno: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        
    },

    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model("User", UserSchema);

module.exports.addUser = (user, callback) => {
    User.create( user, callback )
}

