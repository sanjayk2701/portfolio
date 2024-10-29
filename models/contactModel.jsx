const { Schema, models, model } = require("mongoose");

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    subject: {
        type: String,
        required: true
    }, 
    message: {
        type: String,
        required: true
    }
});

const ContactModel = models.Contact || model('Contact', contactSchema);

export default ContactModel;