/** Require */
var mongoose = require('mongoose');
var Schema = new mongoose.Schema;

/** Schema Object*/
var birdSchema = Schema({
    name: { type: 'String', lowercase: true },
    order: { type: 'String', lowercase: true, maxlength: 20 },
    status: { type: 'String', lowercase: true,
        enum: [
            'extinct',
            'extinct in the wild',
            'critically endangered',
            'endangered',
            'vulnarable',
            'near threatened',
            'conservation dependant',
            'least concern'
        ]},
});

/** Make the model for the schema above*/
module.exports = birdSchema;