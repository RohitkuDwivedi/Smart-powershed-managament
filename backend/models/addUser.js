const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,//newTransformer.create(Transformer, callback)
    
    
        required: true,//newTransformer.create(Transformer, callback)
    
    
        unique: true
        
    },
    pincode: {
        type: Number,
        required: true
        
    },
    phoneno: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true
        
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

module.exports.showuser = (user,callback) => {
    finduser={
        userName : user.userName,
        password : user.password 
    }
    User.findOne(finduser,callback)
}

module.exports.authenticate = (user, callback) => {
    finduser={
        userName : user.userName,
        password : user.password 
    }
    User.findOne(finduser,callback)
}

