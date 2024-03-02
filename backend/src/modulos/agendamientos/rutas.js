const express = require('express');
const respuesta = require('../../red/respuestas')

const router = express.Router();

router.get('/', function(req, res){
    respuesta.sucess(req, res, 'datos', 200);
});

module.exports = router;