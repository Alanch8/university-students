const express = require('express'); // Importamos express.
const morgan = require('morgan'); // Importamos morgan.

const app = express(); // Inicializamos express.

app.set('port', process.env.PORT || 3000); // Configuramos el puerto del servidor.

app.use(morgan('dev')); // Middleware para ver las peticiones que se hacen al servidor.
app.use(express.json()); // Middleware para entender los datos que nos envian en formato JSON.
app.use(express.urlencoded({ extended: false })); // Middleware para entender los datos que nos envian en formato URL.

app.use('/api/students', require('./routes/students.routes')); // Importamos las rutas de los estudiantes.

module.exports = app; // Exportamos el modulo para poder usarlo en otros archivos.