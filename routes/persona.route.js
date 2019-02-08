const express = require('express');
const router =express.Router();
const personaController = require('../controllers/persona.controller');

router.post('/PostNuevaPersona', personaController.PostNuevaPersona);
router.get('/GetRegPersona/:IdPersona', personaController.GetRegPersona);
router.get('/GetListPersona', personaController.GetListPersona);



module.exports = router;