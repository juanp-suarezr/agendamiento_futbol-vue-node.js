const db = require('../../DB/mysql');

const TABLA = 'usuario';

function obtenerUsuarios(){
    return db.obtenerDatos(TABLA);
}

function obtenerUsuarioXID(){
    return db.obtenerRegistro(TABLA, id);
}

function agregarUsuario(data){
    return db.agregarRegistro(TABLA, data);
}

function eliminarUsuario(id){
    return db.eliminarRegistro(TABLA, id);
}

function actualizarUsuario(){
    return db.actualizarRegistro(TABLA, id);
}



module.exports = {
    obtenerUsuarios,
    obtenerUsuarioXID,
    agregarUsuario,
    actualizarUsuario,

}