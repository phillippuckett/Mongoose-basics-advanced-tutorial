/** These 'Require's are necessary for to set up the schema*/
var mongoose = require('mongoose');
var Schema = new mongoose.Schema;

/** Password varification */
var passwordVarifier = [
    function (varify) {
        return (varify.length > 5)
    },
];
    
/** Schema Object */
var userSchema = Schema({
    name: { type: String, required: true },
    age: { type: Number, require: true },
    password: { type: String, varify: passwordVarifier },
});

/** The model for the schema above*/
module.exports = mongoose.model('User', userSchema);