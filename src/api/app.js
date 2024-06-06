const express = require('express');
const mongodb = require('../db/mongo');
const router = require('../routes/index');
const swaggerConfig = require('../../swagger');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

swaggerConfig(app);

// Conexión a MongoDB
mongodb.once('open', () => {
    console.log('Conexión a MongoDB establecida');
    // Ahora puedes hacer cualquier cosa que necesites con la conexión a MongoDB
    // addData()
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
