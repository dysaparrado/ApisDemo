const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({
    //_id : Schema.Types.ObjectId,
    Nombre : {type: String},
    ApPaterno : {type: String},
    ApMaterno : {type: String},
    Edad : Number,
    Correo: [{
        IdCorreo: Number,
        Dominio: {type: String},
        NombreCorreo: {type: String}
    }],
    Telefono: [{type: Schema.Types.ObjectId, ref: 'cat_telefonos'}]
});


module.exports = mongoose.model('cat_personas', PersonaSchema);
