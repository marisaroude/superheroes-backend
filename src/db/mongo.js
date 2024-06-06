const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo-database:27017/mongo-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexión a MongoDB exitosa'))
.catch(err => console.error('Error al conectar a MongoDB', err));

module.exports = mongoose.connection; 