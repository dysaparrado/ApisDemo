const Persona = require('../models/persona.model');
const Telefono = require('../models/telefonos.model');
const Correo = require('../models/correo.model');

exports.PostNuevPersona = function(req, res){
    try{
        Telefono.insertMany(req.body.Telefono).then(resulTelf => {
            let nuevaPersona = [{
                Nombre: req.body.Nombre,
                ApPaterno: req.body.ApPaterno,
                ApMaterno: req.body.ApMaterno,
                Edad: req.body.Edad,
                Correo: req.body.Correo,
                Telefono: resulTelf
              }];
            Persona.insertMany(nuevaPersona).then(resPersona => {
                res.json(resPersona);
            }).catch(err => res.send(err));
        });
    }catch(err){
        res.send(err.message);
    }
}

exports.PostNuevaPersona = function(req, res){
    try{
        let telefonos = req.body.Telefono.map(tel => new Telefono(tel));
        telefonos.forEach(tel => tel.save(function(err){ }));
        let persona = new Persona(req.body);
        persona.Telefono = telefonos;
        persona.save(err => {
            if(err)res.send(err.message)
        });
        res.json(persona);
    }catch(err){
        res.send(err.message);
    }
}

exports.GetRegPersona = function (req, res){
    let persona = Persona.findOne({_id: req.params.IdPersona})
        .populate({path: 'Telefono', model: 'cat_telefonos'})
        .then(
        persona => res.json(persona)
    );
}

exports.GetListPersona = async function (req, res){
    let personas = await Persona.find().populate({path: 'Telefono', model: 'cat_telefonos'});
    res.json(personas);
}