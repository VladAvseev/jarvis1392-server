const {Schema, model} = require('mongoose');

const InvitesSchema = new Schema({
    groupId: {type: String, required: true},
    userId: {type: String, required: true},
});

module.exports = model('Invites', InvitesSchema);