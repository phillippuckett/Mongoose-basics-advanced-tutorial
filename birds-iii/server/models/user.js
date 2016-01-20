/** Require */
var mongoose = require('mongoose');
var Schema = new mongoose.Schema;
var userSchema = require('./userSchema');

var userSchema = Schema({
    email: { type: String },
    username: { type: String, require: true },
    level: { type: Number },
    location: { type: String },
    member: { require: true },
    updateAt: { type: Date },
});

userSchema.pre('save', function (next) {
    var User = this;
    User.updatedAt = new Date();
    next();
});