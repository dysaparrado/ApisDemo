const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CorreoSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        Dominio: {type: String},
        NombreCorreo: {type: String}
    }
);

module.exports = mongoose.model('cat_correo', CorreoSchema);