const express = require('express');
const mongodb = require('../db/mongo');
const router = require('../routes/index');
const swaggerConfig = require('../../swagger');
const { addData } = require('../test/addData');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

swaggerConfig(app);

async function isDatabaseEmpty() {
  try {
    
      const count = await mongodb.db.collection('heros').countDocuments();
      console.log('Número de documentos en la colección heroes:', count);
      return count === 0;
  } catch (error) {
      console.error('Error al verificar si la colección heroes está vacía:', error);
      throw error;
  }
}

// Conexión a MongoDB
mongodb.once('open', async () => {
    
  try {
    const empty = await isDatabaseEmpty();
    if (empty) {
        console.log('La base de datos está vacía, añadiendo datos...');
        addData();
    } else {
        console.log('La base de datos no está vacía.');
    }
    } catch (error) {
      console.error('Error al verificar o agregar datos:', error);
    }
});

app.use("/superheroes", router);

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
});

module.exports = app;
