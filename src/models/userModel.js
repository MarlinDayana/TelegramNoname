const {Schema, model} = require('mongoose');


const UserSchema = new Schema({
    nombre: 
    {
        type: String, 
        required: true
    },
    celular: 
    {
        type: String, 
        required: true
    },
    username: 
    {
        type: String, 
        unique: true
    },
    correo: 
    {
        type: String,  
        required: false
    },
    estado: 
    {
        type: Boolean, 
        default: true
    }
    // mensajes: 
    // {
    //     type:Array
    // }, // referencia a otro modelo 
    // grupos:
    // {
    //     type:Array
    // } // referencia a otro modelo
})


module.exports= model('User', UserSchema);

 