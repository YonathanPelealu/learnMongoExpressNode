const mongoose = require('mongoose');


var studentSchema = new mongoose.Schema({
stud_name: {
type: String,
required: 'This student needs name.'
},
email_add: {
type: String
},
contact: {
type: String
},
country: {
type: String
}
});


mongoose.model('Student', studentSchema);