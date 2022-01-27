const { model, Schema} = require('mongoose');

const MessageSchema = new Schema({

    cuerpo:
    {
        type: String,
        required: true
    },
    fecha: 
    {
        type: Date,
        default: new Date()
    },
    remitente: [],
    destinatario: []

})

module.exports = model('Message', MessageSchema)