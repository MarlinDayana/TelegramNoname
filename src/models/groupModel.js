const { model, Schema} = require('mongoose');

const GroupSchema = new Schema({

    nombre:
    {
        type: String,
        required: true
    },
    descripcion: 
    {
        type: String
    },
    integrantes: [],
    mensajes: []

})

module.exports = model('Group', GroupSchema)