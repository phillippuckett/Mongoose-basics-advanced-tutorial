var mongoose = require('mongoose');

var sightingSchema = new mongoose.Schema ({
    User: {},
    bird:
    confirmed:
    
 updateAt: { type: Date },
});

sighitngSchema.pre('save', function (next) {
    var user = this;
    user.updatedAt = new Date();
    next();
});