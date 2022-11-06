const {Schema, model} = require('mongoose');

const GroupSchema = new Schema({
    name: {type: String, unique: true, required: true},
    owner: {type: String, required: true},
    members: {type: [String], required: true, default: []},
});

module.exports = model('Group', GroupSchema);