const express = require('express');
const respuesta = require('../../red/respuestas')

const controlador = require('./controlador');

const router = express.Router();

// router.get('/', function(req, res){
//     respuesta.sucess(req, res, 'datos', 200);
// });

router.get('/', obtenerUsuarios);
router.get('/consultar/:id', obtenerUsuarioXID);
router.post('/crear/', agregarUsuario);
router.put('/actualizar/', actualizarUsuario);
router.delete('/eliminar/:id', eliminarUsuario);

//obtener USUARIOS
async function  obtenerUsuarios (req, res){
    try {
        const items = await controlador.obtenerUsuarios();
        respuesta.sucess(req, res, items, 200)
    } catch (err) {
        respuesta.error(req, res, 'error interno del servidor:'+ err, 500);
    }
}

//obtener un solo registro
async function  obtenerUsuarioXID (req, res){
    try {
        const items = await controlador.obtenerUsuarioXID(req.params.id);
        respuesta.sucess(req, res, items, 200)
    } catch (err) {
        respuesta.error(req, res, 'error interno del servidor:'+ err, 500);
    }
}
//agrager usuario
async function  agregarUsuario (req, res){
    try {
        const items = await controlador.agregarUsuario(req.body);
        respuesta.sucess(req, res, 'registro agregado con exito', 201)
    } catch (err) {
        respuesta.error(req, res, 'error interno del servidor:'+ err, 500);
    }
}

//actualizar usuario
async function  actualizarUsuario (req, res){
    
        const existe = await controlador.obtenerUsuarioXID(req.body.id);
        if (existe == '') {
            respuesta.sucess(req, res, 'registro no existente', 201);
        } else {
            try {
                const items = await controlador.actualizarUsuario(req.body);
                respuesta.sucess(req, res, 'registro no existente', 201);
            } catch (err) {
                respuesta.error(req, res, 'error interno del servidor:'+ err, 500);
            }
        }
        
    
}

//eliminar usuario
async function  eliminarUsuario (req, res){
    try {
        const items = await controlador.eliminarUsuario(req.params.id);
        respuesta.sucess(req, res, 'registro eliminado con exito', 200)
    } catch (err) {
        respuesta.error(req, res, 'error interno del servidor:'+ err, 500);
    }
}

module.exports = router;