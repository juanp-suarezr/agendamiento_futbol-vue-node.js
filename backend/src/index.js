const app = require('./app');

//Listener escucha el puerto

app.listen(app.get( 'port' ), () => {
    console.log(`Server on port ${app.get( 'port' )}`);
});