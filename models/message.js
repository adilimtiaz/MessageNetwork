var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schama.post('/remove', function(message){
    User.findById(message.user, function(err,user){
        user.messages.pull(message);
        user.save();
    });
});

module.exports = mongoose.model('Message', schema);