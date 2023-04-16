require('./database')
const app = require('./app'); // Importamos el modulo app.js

app.listen(app.get('port')); // Iniciamos el servidor en el puerto que se configuro en app.js
console.log('Server on port', app.get('port')); 