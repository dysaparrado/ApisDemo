const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TelefonoSchema = new Schema({
  //  _id : Schema.Types.ObjectId,
    Codigo : {type: String},
    Lada : {type: String},
    Telefono : {type: String},
    Tipo : {type: String}
});

module.exports = mongoose.model('cat_telefonos', TelefonoSchema);