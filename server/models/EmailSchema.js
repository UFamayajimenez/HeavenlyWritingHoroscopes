const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    audience: {
        natalSign: {type: String},
        moonPhase: {type: String},
        moonSign: {type: String},
        type: JSON, required: true
    },
    content: {type: String, required: true}
});

module.exports = mongoose.model('email', emailSchema);
