const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    passwd: config.mysql.passwd,
    database: config.mysql.database,
};

var conexion;

function conectarBD(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if(err){
            setTimeout(conectarBD, 200);
        } else {
            console.log("conectado");
        }
    });

    conexion.on('error', (err) => {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conectarBD();
        } else {
            throw err; //ALGO ESTA MAL CON LA DB
        }
    });
}

//Inicializar conexión
conectarBD();



//TRAER TABLA
function obtenerDatos(tabla) {

    return new Promise ((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (err, result) => {
            return !err ? resolve(result) : reject(console.log('algo salio'))
        });
    });

}

//TRAER UN REGISTRO
function obtenerRegistro(tabla, id) {

    return new Promise ((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id = ${id}`, (err, result) => {
            return !err ? resolve(result) : reject(console.log('algo salio'))
        });
    });

}

//AGREGAR UN REGISTRO
function agregarRegistro(tabla, data) {

    return new Promise ((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ?`, data, (err, result) => {
            return !err ? resolve(result) : reject(console.log('algo salio mal en mysql'+err))
        });
    });

}

//ACTUALIZAR UN REGISTRO
function actualizarRegistro(tabla, data) {

    return new Promise ((resolve, reject) => {
        conexion.query(`UPDATE ${tabla} SET ? WHERE id = ?`, [data, data.id], (err, result) => {
            return !err ? resolve(result) : reject(console.log('algo salio'))
        });
    });

}

//ELIMINAR UN REGISTRO
function eliminarRegistro(tabla, id) {

    return new Promise ((resolve, reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE id = ${id}`, (err, result) => {
            return !err ? resolve(result) : reject(console.log('algo salio'))
        });
    });

}

module.exports = {
    conectarBD,
    obtenerDatos,
    obtenerRegistro,
    agregarRegistro,
    actualizarRegistro,
    eliminarRegistro,

}