/** This 'Require' is necessary for to set up the schema*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var birdSchema = require('./birdSchema');

/** Schema Object*/
var sightingSchema = new mongoose.Schema({
    user: { type: Schema.Type.ObjectId, ref: 'User' },
    bird: [birdSchema],
    confirmed: { type: Boolean, default: false },
    numberSeen: { type: Number, min: 1 },
});

/** Make the model for the schema above*/
module.exports = mongoose.model('sighting', sightingSchema);