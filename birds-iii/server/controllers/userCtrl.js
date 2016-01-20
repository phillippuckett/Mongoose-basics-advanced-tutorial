var sighting = require('./models/sighting');

module.exports = {
    /** C */
    create: function (req, res) {
        new Sighting(req.body).save(function(err, createSighitng) {
            
        })
        
    },
    /** R */
    read: ,
    /** U */
    update: ,
    /** D */
    delete: ,
};